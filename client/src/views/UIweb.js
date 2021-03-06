import React from 'react';
import '../scss/bootstrap/css/bootstrap.css'
import '../scss/2.css';
import '../scss/fa/css/all.css';
import Authentication from './Authentication'
import { Link } from 'react-router-dom';
// import { Button } from 'semantic-ui-react';
// import { NavLink } from 'react-router-dom';
import UserInfo from './UserInfo'
class UIweb extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      user: [],
      emailError: '',
      passwordError: ''
    }
  }
  componentDidMount() {
    sessionStorage.removeItem("poll_id");
  }
  validate() {
    let passwordError = "";
    let emailError = "";
    if (!this.state.email.includes("@")) {
      emailError = "Invalid email "
    }
    if (this.state.password.length < 8 && this.state.password.length > 16) {
      passwordError = "Password length should be more than 8 and less than 16"
    }
    if (emailError || passwordError) {
      this.setState({ emailError, passwordError });
      return false;
    }
    return true;
  }
  Login1 = (e) => {
    e.preventDefault();
    var message = document.getElementById('error');
    const users = {
      user_email: this.state.email,
      user_password: this.state.password
    };
    const isValid = this.validate()
    if (isValid) {
      fetch('http://localhost:3001/checklogin', {
        method: "POST",
        headers: {
          "Accept": "application/json",
          "Content-Type": "application/json"
        },
        body: JSON.stringify(users)
      })
        .then(response => response.text())
        .then(result => {
          // chua on sai pass
          if (result === "null") {
            alert("Account don't exist")
            message.innerHTML = "Account don't exist!!!";
          }
          else {
            var user = JSON.parse(result);
            console.log(user.users_id)
            console.log(user.users_email)
            // this.setState({user:result})
            // console.log(this.state.user);
            // console.log(this.state.user[0].users_id);
            sessionStorage.setItem("users_id", user.users_id);
            sessionStorage.setItem("users_email", user.users_email);
            //console.log(sessionStorage["users_email"],sessionStorage["users_id"])
            setTimeout(() => {
              window.location = "/dashboard";
            }, 1500);
          }
        })
        .catch(error => {
          console.log(error)
        })
    }
  }
  handleEmail = (e) => {
    this.setState({ email: e.target.value })
  }
  handlePassword = (e) => {
    this.setState({ password: e.target.value })
  }
  render() {
    // }
    return (
      <div>
        <nav className="navbar navbar-expand-lg navbar-light bg-light sticky-top">
          <a className="navbar-brand" style={{ fontWeight: 700, color: 'lightskyblue' }} >
            <Link to='/' >
              <h4>Meeting Planner</h4>
            </Link>
          </a>

          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle
                navigation">
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarText">
            <ul className="navbar-nav mr-auto">
              <li className="nav-item active">
                <a className="nav-link" href="#">Home <span className="sr-only">(current)</span></a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Features</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Pricing</a>
              </li>
            </ul>
            <>
              {<Authentication />}
            </>
            {/* <div className="item-auth">
              <Link to="/register">
                <span className="navbar-text pr-3">
                  <button className="register nav-link" style={{ color: 'black' }}>Đăng Ký</button>
                </span>
              </Link>

              <span className="navbar-text pr-3">
                <button className="login p-2" data-toggle="modal" data-target="#exampleModal" data-whatever="@mdo">Đăng Nhập</button>
                <div className="modal fade" id="exampleModal" tabIndex={-1} aria-labelledby="exampleModalLabel" aria-hidden="true">
                  <div className="modal-dialog">
                    <div className="modal-content">
                      <div className="modal-header">
                        <h5 className="modal-title" id="exampleModalLabel">Sign in</h5>
                        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                          <span aria-hidden="true">×</span>
                        </button>
                      </div>
                      <div className="container">
                        <div className="row">
                          <div className="col-md-4">
                            <img style={{ width: '100%' }} src={require("../images/login21.jpg")} alt="" />
                          </div>
                          <div className="col-md-8">
                            <div className="mt-3 text-center">

                            </div>
                            <div className="pr-3" style={{ borderRight: 'solid  1px silver' }}>
                              <input type="email" className="form-control mt-4 mb-5 text-center" id="inputEmail4" placeholder="Email" onChange={this.handleEmail} />
                              <input type="password" className="form-control text-center" id="inputPassword4" placeholder="Password" onChange={this.handlePassword} />
                              <div style={{ border: 'transparent' }} className="text-center">
                                <button className="button mt-4" onClick={this.Login1}>
                                  <span className="pt-2 pb-2 pl-4 pr-4">Log in</span>
                                </button>
                              </div>

                            </div>
                            <h6 style={{ color: 'silver' }} className=" Forgot text-center pt-4"></h6>
                          </div>

                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </span>
            </div> */}
            <span className="navbar-text">
              {/* <button className="meeting"><a className="nav-link" href="join.html" style={{ color: 'white' }}> <i className="fas fa-plus" />
                  Tạo cuộc họp</a></button> */}

              <Link to={sessionStorage["users_email"] ? '/create' : '/login'}>
                <button className="meeting btn btn-danger  pl-2 pr-2">
                  <h5 style={{ color: 'white', fontWeight: 700 }}>+ Create a poll </h5>
                </button>
              </Link>
            </span>
          </div>
        </nav>
        <section className="form1 pt-5 pb-5">
          <div className="container-fluid">
            <div className="row">
              <div className="col-md-6 pt-5 pb-5">
                <img style={{ width: '100%' }} src={require("../images/anh16.jpg")} alt="" />
              </div>
              <div className="col-md-6 p-5">
                <h1 className="title">Easy meeting experience.</h1>

Meet saves you from having to worry about joining a call
                video at work. Just set up meeting and sharing
                a link. No worries about whether people
                in groups or clients with accounts or plug-ins
                appropriate or not. With a fast, lightweight interface
                and smart participant management, calls
                Multiplayer video is so easy.
                <br />
                <div className="text-center">
                  <Link to={sessionStorage["email"] ? '/create' : '/login'}>
                    <button className="meeting btn btn-danger mt-4 pl-2 pr-2 ">
                      <h5 style={{ color: 'white', fontWeight: 700 }}>+ Create a poll </h5>
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="form2 pt-5 pb-5">
          <div className="container-fluid">
            <div className="row">
              <div className="col-md-6 p-5">
                <h1 className="title">
                  Quickly schedule busy times and schedules.
                </h1>
Check availability across time zones, so key players aren't left out in key meetings - and projects progress faster.
              </div>
              <div className="col-md-6 pt-5 pb-5">
                <img style={{ width: '100%' }} src={require("../images/banner4.jpg")} alt="" />
              </div>
            </div>
          </div>
        </section>
        <section className="form1 pt-5 pb-5">
          <div className="container-fluid">
            <div className="row">
              <div className="col-md-6 pt-5 pb-5">
                <img style={{ width: '100%' }} src={require("../images/anh18.png")} alt="" />
              </div>
              <div className="col-md-6 p-5">
                <h1 className="title">
                  Quick connection with multiple computers.
                  </h1>
                      Provides PC-based messaging and video conferencing solutions,
                      very fast and easy to use with many features that can be expanded online.
              </div>
            </div>
          </div>
        </section>
        <section className="form2 pt-5 pb-5">
          <div className="container-fluid">
            <div className="row">
              <div className="col-md-6 p-5">
                <h1 className="title">
                  Keep your calendar private.
                </h1>
                Your calendar - and the attendees' calendar - is personal. We understand.
                With Meeting planner, events, meetings, appointments and daily activities are out of the public's view ..
              </div>
              <div className="col-md-6 pt-5 pb-5">
                <img style={{ width: '100%' }} src={require("../images/bgr.jpg")} alt="" />
              </div>
            </div>
          </div>
        </section>
        <section className="form1 pt-5 pb-5">
          <div className="container-fluid">
            <div className="row">
              <div className="col-md-6 pt-5 pb-5">
                <img style={{ width: '100%' }} src={require("../images/anh17.jpg")} alt="" />
              </div>
              <div className="col-md-6 p-5">
                <h1 className="title">
                  Also works with other meeting solutions.</h1>
                  Groups that use Skype for Business or systems Meetings based on the SIP and H.323 standards (eg Polycom and Cisco) can seamlessly join a meeting above Meet through Pexip Infinity Platform.
              </div>
            </div>
          </div>
        </section>
        <section className="slide pt-5 pb-5">
          <div className="container-fluid p-4 mt-4 mb-4">
            <h1 className="text-center title">What users said about Plan Meeting</h1>
            <div className="row pt-3">
              <div id="carouselExampleSlidesOnly" className="carousel slide" data-ride="carousel">
                <div className="carousel-inner">
                  <div className="carousel-item active">
                    <p className="comment p-4">"Gone are the days you send mass emails to know the status available and right categorize each person to find the timing most suitable."</p>
                    <img className="avt mr-4" src={require("../images/avt1.JPG")} alt="" />
                    <strong className=" mr-4" style={{ color: '#000000' }}>Huỳnh Bá Thắng</strong>
                    <small style={{ color: '#000000' }}><i>"SV Khoa Quốc Tế
                      Ngành CNTT - HV khóa K23"</i></small>
                  </div>
                  <div className="carousel-item">
                    <p className="comment p-4">
"I use it to plan meetings with team members, project collaborators and outside providers. It's a simple concept!"</p>
                    <img className="avt mr-4" src={require("../images/avt1.JPG")} alt="" />
                    <strong className=" mr-4" style={{ color: '#000000' }}>Trần Tuấn Kiệt</strong><br />
                    <small style={{ color: '#000000' }}><i>"SV Ngành Kinh Doanh
                      Quốc Tế - KT ĐN - HV khóa K45"</i></small>
                  </div>
                  <div className="carousel-item">
                    <p className="comment p-4">"Đã qua rồi cái thời mà
                    bạn gửi hàng loạt email để biết tình trạng
                    sẵn có và phải
                    phân loại từng người để tìm ra thời điểm
                    thích hợp nhất.
                      "</p>
                    <img className="avt ml-4" src={require("../images/avt1.JPG")} alt="" />
                    <strong style={{ color: '#000000' }}>Trần Tuấn Kiệt</strong>
                    <span style={{ color: '#000000' }}>SV Ngành Kinh Doanh
                      Quốc Tế - KT ĐN - HV khóa K45</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="form1 pt-5 pb-5">
          <div className="container-fluid">
            <div className="row">
              <div className="col-md-4 p-5">
                <h4 style={{ fontSize: '20px' }}>Sắp xếp nhanh thời gian và
                  lịch trình bận rộn</h4>
                Kiểm tra tính khả dụng trên các múi giờ, để những người
                chơi chính không bị bỏ sót trong các cuộc họp quan trọng
                - và các dự án tiến triển nhanh hơn.
              </div>
              <div className="col-md-4 p-5 border">
                <h4 style={{ fontSize: '20px' }}>Kết nối nhanh với nhiều máy
                  tính</h4>
                Cung cấp giải pháp nhắn tin và hội nghị truyền hình cho
                máy tính, sử dụng rất nhanh và dễ dàng có nhiều tính
                năng có thể mở rộng sử dụng trực tuyến
              </div>
              <div className="col-md-4 p-5">
                <h4 style={{ fontSize: '20px' }}>Tích hợp lịch cơ bản</h4>
                Doodle chỉ lưu trữ email và mã thông báo của bạn - và
                không có gì khác. Dữ liệu cá nhân của bạn - lịch, sự
                kiện và tính khả dụng - không bao giờ được lưu trữ trong
                cơ sở dữ liệu của chúng tôi
              </div>
            </div>
          </div>
        </section>
        <section className="form2 pt-5 pb-5">
          <h1 className="text-center title">Câu hỏi thường gặp về Plan Meeting</h1>
          <div className="container-fluid">
            <div className="row">
              <div className="col-md-4 p-5">
                <h4 className="title" style={{ fontSize: '25px' }}>Người tham
                gia bên ngoài có
                  thể tham gia cuộc gọi không?</h4>
                Chắc chắn là được! Trên thực tế, bạn có thể chia sẻ một
                đường liên kết duy nhất với tất cả những người tham gia
                cuộc họp, giúp bạn mời tất cả những người bạn muốn tham
                gia cuộc gọi.
              </div>
              <div className="col-md-4 p-5 border">
                <h4 className="title" style={{ fontSize: '25px' }}>Tôi có cần
                cài đặt gì
                  không?</h4>
                Đối với người dùng trên Chrome, Firefox, Safari và Edge
                mới mà chúng tôi không yêu cầu hoặc đề nghị cài đặt bất
                kỳ plugin hoặc phần mềm nào, Meet hoạt động hoàn toàn
                trong trình duyệt. Điều này hạn chế lỗ hổng cho Meet và
                nhu cầu đưa ra các bản vá bảo mật thường xuyên trên máy
                của người dùng cuối. Trên thiết bị di động, hãy cài đặt
                ứng dụng Meet từ App Store của Apple hoặc Cửa hàng
                Google Play.
              </div>
              <div className="col-md-4 p-5">
                <h4 className="title" style={{ fontSize: '25px' }}>
                  Tôi có cần dùng dịch vụ bên thứ ba để truy cập bằng
                  phương pháp quay số không?</h4>
                Không. Với G Suite, bạn có thể thêm số điện thoại và mã
                PIN vào mỗi cuộc họp mà không cần có cấu hình nào khác.
                Hãy tham khảo tài liệu về việc quay số để biết thêm
                thông tin.
              </div>
            </div>
          </div>
        </section>
        <section className="form1 pt-5 pb-5  ">
          <div className="container-fluid mt-3">
            <h1 className="text-center title">Làm việc trong các công cụ hiện có
              của bạn</h1>
            <div className="row">
              <div className="col-md-4 p-5">
                <h4 className="title">Đa nền tảng</h4>
                <p>Lên lịch trên nhiều lịch</p>
                <img className="logo mr-4" src={require("../images/anh9.jpg")} alt="" />
                <img className="logo ml-4" src={require("../images/anh10.jpg")} alt="" />
              </div>
              <div className="col-md-4 p-5 border">
                <h4 className="title">Trình cắm trực tiếp</h4>
                <p>Hoàn thành công việc, nơi bạn đã làm việc</p>
                <img className="logo mr-4" src={require("../images/anh11.jpg")} alt="" />
                <img className="logo ml-4" src={require("../images/anh12.jpg")} alt="" />
              </div>
              <div className="col-md-4 p-5">
                <h4 className="title">Tích hợp nâng cao</h4>
                <p>Xây dựng tích hợp tùy chỉnh cho bất kỳ trường hợp sử
                  dụng nào</p>
                <img className="logo mr-4" src={require("../images/anh14.jpg")} alt="" />
                <img className="logo ml-4" src={require("../images/anh15.jpg")} alt="" />
              </div>
            </div>
          </div>
        </section>
        <footer className=" pb-5 mb-5 mr-5 ml-5" >
          <nav class="navbar navbar-expand-lg navbar-light ">
            <div class="container-fluid">
              <a class="nav-link " aria-current="page" href="#">About Us</a>

              {/* <a class="nav-link active" href="#"></a> */}
              <div class=" navbar-collapse" id="navbarNav">
                <ul class="navbar-nav">
                  <li class="nav-item">
                    <a class="nav-link " aria-current="page" href="#">Team</a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" href="#">Career</a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" href="#">Press</a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link " href="#" tabindex="-1" aria-disabled="true">Ads on Planmeeting</a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link " href="#" tabindex="-1" aria-disabled="true">Help</a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link " href="#" tabindex="-1" aria-disabled="true">Contact Sales</a>
                  </li>
                </ul>

              </div>
              <span class="navbar-text">
                <i style={{ fontSize: '25px' }} class="fab fa-instagram "></i>
                <i style={{ fontSize: '25px' }} class="fab fa-twitter-square ml-3"></i>
                <i style={{ fontSize: '25px' }} class="fab fa-facebook-square ml-3"></i>
              </span>
            </div>

          </nav>
        </footer>
      </div>
    );
  }
}




export default UIweb;
