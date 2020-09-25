import React from 'react';
<<<<<<< Updated upstream
import '../scss/css/bootstrap.css';
import '../scss/css/2.css';
import '../scss/css/login.css';
import '../scss/css/all.css'
=======
import '../css/bootstrap.css';
import '../css/all.css'
import '../css/2.css';
import '../css/login.css';
>>>>>>> Stashed changes

function UIweb() {
  return (
    <div>
        <nav className="navbar navbar-expand-lg navbar-light bg-light sticky-top">
          <a className="navbar-brand" href="#" style={{fontWeight: 700}}><h4>Plan
              Meeting</h4></a>
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
            <span className="navbar-text pr-3">
              <button className><a className="nav-link" href="register.html">Đăng
                  Ký</a></button>
            </span>
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
                          <img style={{width: '100%'}} src={require("../images/login21.jpg")} alt="" />
                        </div>
                        <div className="col-md-4">
                          <div className="mt-3">
                            <a style={{color: 'silver', fontWeight: 600}} className="pt-5" href="#">Sign in/ </a>
                            <a style={{color: 'black', fontWeight: 600}} className="pt-5" href="register.html">Sign up</a>
                          </div>
                          <div className="pr-3" style={{borderRight: 'solid  1px silver'}}>
                            <input type="email" className="form-control mt-4 mb-5
                                                text-center" id="inputEmail4" placeholder="Email" />
                            <input type="password" className="form-control text-center" id="inputPassword4" placeholder="Password" />
                            <div style={{border: 'transparent'}} className="text-center">
                              <button className="button mt-4">
                                <span className="pt-2 pb-2 pl-4 pr-4">Log in</span>
                              </button>
                            </div>
                            <a href="register.html"> <h6 className="text-center pt-2">Sign up</h6></a>
                          </div>
                          <h6 style={{color: 'silver'}} className=" Forgot text-center pt-4">Forgot your password</h6>
                        </div>
                        <div className="col-md-4 ">
                          <div className="text-center loginwith">
                            <button className="fb p-2"> login on facebook <i className="fab fa-facebook" aria-hidden="true" /></button> <br />
                            <button className="gm mt-2 pt-2 pb-2 pl-4 pr-4"> login on Gmail <i className="far fa-envelope" /></button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </span>
            <span className="navbar-text">
              <button className="meeting"><a className="nav-link" href="join.html" style={{color: 'white'}}> <i className="fas fa-plus" />
                  Tạo cuộc họp</a></button>
            </span>
          </div>
        </nav>
        <section className="form1 pt-5 pb-5">
          <div className="container">
            <div className="row">
              <div className="col-md-6 pt-5 pb-5">
                <img style={{width: '100%'}} src={require("../images/anh16.jpg")} alt="" />
              </div>
              <div className="col-md-6 p-5">
                <h1 className="title">Trải nghiệm hội họp dễ dàng.</h1>
                Meet giúp bạn không phải lo lắng khi tham gia cuộc gọi
                video ở cơ quan. Chỉ cần thiết lập cuộc họp và chia sẻ
                một liên kết. Không phải lo lắng về việc liệu người
                trong nhóm hoặc khách hàng có tài khoản hoặc plug-in
                thích hợp hay không. Với giao diện nhanh chóng, gọn nhẹ
                và tính năng quản lý người tham gia thông minh, cuộc gọi
                video nhiều người diễn ra thật dễ dàng.
                <br />
                <div className="text-center">
                  <button className="meeting mt-3 text-center"><a className="nav-link" href="#" style={{color: 'white'}}> <i className="fas
                                        fa-plus" />
                      Tạo cuộc họp</a></button>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="form2 pt-5 pb-5">
          <div className="container">
            <div className="row">
              <div className="col-md-6 p-5">
                <h1 className="title">
                  Sắp xếp nhanh thời gian và lịch trình bận rộn.
                </h1>
                Kiểm tra tính khả dụng trên các múi giờ, để những người
                chơi chính không bị bỏ sót trong các cuộc họp quan trọng
                - và các dự án tiến triển nhanh hơn.
              </div>
              <div className="col-md-6 pt-5 pb-5">
                <img style={{width: '100%'}} src={require("../images/anh16.jpg")} alt="" />
              </div>
            </div>
          </div>
        </section>
        <section className="form1 pt-5 pb-5">
          <div className="container">
            <div className="row">
              <div className="col-md-6 pt-5 pb-5">
                <img style={{width: '100%'}} src={require("../images/anh16.jpg")} alt="" />
              </div>
              <div className="col-md-6 p-5">
                <h1 className="title"> Kết nối nhanh với nhiều máy tính.</h1>
                Cung cấp giải pháp nhắn tin và hội nghị truyền hình cho
                máy tính, sử dụng rất nhanh và dễ dàng có nhiều tính
                năng có thể mở rộng sử dụng trực tuyến
              </div>
            </div>
          </div>
        </section>
        <section className="form2 pt-5 pb-5">
          <div className="container">
            <div className="row">
              <div className="col-md-6 p-5">
                <h1 className="title">
                  Giữ lịch của bạn ở chế độ riêng tư.
                </h1>
                Lịch của bạn - và lịch của những người tham dự - là lịch
                cá nhân. Chúng tôi hiểu rồi. Với Doodle, các sự kiện,
                cuộc họp, cuộc hẹn và các hoạt động hàng ngày nằm ngoài
                tầm nhìn của công chúng..
              </div>
              <div className="col-md-6 pt-5 pb-5">
                <img style={{width: '100%'}} src={require("../images/anh16.jpg")} alt="" />
              </div>
            </div>
          </div>
        </section>
        <section className="form1 pt-5 pb-5">
          <div className="container">
            <div className="row">
              <div className="col-md-6 pt-5 pb-5">
                <img style={{width: '100%'}} src={require("../images/anh16.jpg")} alt="" />
              </div>
              <div className="col-md-6 p-5">
                <h1 className="title">Cũng hoạt động với các giải pháp hội
                  họp khác.</h1>
                Những nhóm sử dụng Skype for Business hoặc các hệ thống
                hội họp dựa trên tiêu chuẩn SIP và H.323 (ví dụ: Polycom
                và Cisco) có thể tham gia liền mạch một cuộc họp trên
                Meet thông qua Nền tảng Pexip Infinity.
              </div>
            </div>
          </div>
        </section>
        <section className="slide pt-5 pb-5">
          <div className="container p-4 mt-4 mb-4">
            <h1 className="text-center title">Người dùng nói gì về Plan Meeting</h1>
            <div className="row pt-3">
              <div id="carouselExampleSlidesOnly" className="carousel slide" data-ride="carousel">
                <div className="carousel-inner">
                  <div className="carousel-item active">
                    <p className="comment p-4">"Đã qua rồi cái thời mà
                      bạn gửi hàng loạt email để biết tình trạng
                      sẵn có và phải
                      phân loại từng người để tìm ra thời điểm
                      thích hợp nhất.
                      "</p>
                    <img className="avt ml-4" src={require("../images/avt1.JPG")} alt="" />
                    <strong style={{color: '#000000'}}>Huỳnh Bá Thắng</strong>
                    <span style={{color: '#000000'}}>SV Khoa Quốc Tế
                      Ngành CNTT - HV khóa K23</span>
                  </div>
                  <div className="carousel-item">
                    <p className="comment p-4">"Tôi sử dụng nó để lập kế
                      hoạch các cuộc họp với các thành viên trong
                      nhóm, cộng
                      tác viên dự án và các nhà cung cấp bên
                      ngoài. Đó là một khái niệm đơn giản!"</p>
                    <img className="avt ml-4" src={require("../images/avt1.JPG")} alt="" />
                    <strong style={{color: '#000000'}}>Trần Tuấn Kiệt</strong>
                    <span style={{color: '#000000'}}>SV Ngành Kinh Doanh
                      Quốc Tế - KT ĐN - HV khóa K45</span>
                  </div>
                  <div className="carousel-item">
                    <p className="comment p-4">"Đã qua rồi cái thời mà
                      bạn gửi hàng loạt email để biết tình trạng
                      sẵn có và phải
                      phân loại từng người để tìm ra thời điểm
                      thích hợp nhất.
                      "</p>
                    <img className="avt ml-4" src={require("../images/avt1.JPG")} alt="" />
                    <strong style={{color: '#000000'}}>Trần Tuấn Kiệt</strong>
                    <span style={{color: '#000000'}}>SV Ngành Kinh Doanh
                      Quốc Tế - KT ĐN - HV khóa K45</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="form1 pt-5 pb-5">
          <div className="container">
            <div className="row">
              <div className="col-md-4 p-5">
                <h4 style={{fontSize: '20px'}}>Sắp xếp nhanh thời gian và
                  lịch trình bận rộn</h4>
                Kiểm tra tính khả dụng trên các múi giờ, để những người
                chơi chính không bị bỏ sót trong các cuộc họp quan trọng
                - và các dự án tiến triển nhanh hơn.
              </div>
              <div className="col-md-4 p-5">
                <h4 style={{fontSize: '20px'}}>Kết nối nhanh với nhiều máy
                  tính</h4>
                Cung cấp giải pháp nhắn tin và hội nghị truyền hình cho
                máy tính, sử dụng rất nhanh và dễ dàng có nhiều tính
                năng có thể mở rộng sử dụng trực tuyến
              </div>
              <div className="col-md-4 p-5">
                <h4 style={{fontSize: '20px'}}>Tích hợp lịch cơ bản</h4>
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
          <div className="container">
            <div className="row">
              <div className="col-md-4 p-5">
                <h4 className="title" style={{fontSize: '25px'}}>Người tham
                  gia bên ngoài có
                  thể tham gia cuộc gọi không?</h4>
                Chắc chắn là được! Trên thực tế, bạn có thể chia sẻ một
                đường liên kết duy nhất với tất cả những người tham gia
                cuộc họp, giúp bạn mời tất cả những người bạn muốn tham
                gia cuộc gọi.
              </div>
              <div className="col-md-4 p-5">
                <h4 className="title" style={{fontSize: '25px'}}>Tôi có cần
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
                <h4 className="title" style={{fontSize: '25px'}}>
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
        <section className="form1 pt-5 pb-5">
          <div className="container mt-3">
            <h1 className="text-center title">Làm việc trong các công cụ hiện có
              của bạn</h1>
            <div className="row">
              <div className="col-md-4 p-5">
                <h4 className="title">Đa nền tảng</h4>
                <p>Lên lịch trên nhiều lịch</p>
                <img className="logo" src={require("../images/anh9.jpg")} alt="" />
                <img className="logo" src={require("../images/anh10.jpg")} alt="" />
              </div>
              <div className="col-md-4 p-5">
                <h4 className="title">Trình cắm trực tiếp</h4>
                <p>Hoàn thành công việc, nơi bạn đã làm việc</p>
                <img className="logo pl-2" src={require("../images/anh11.jpg")} alt="" />
                <img className="logo" src={require("../images/anh12.jpg")} alt="" />
              </div>
              <div className="col-md-4 p-5">
                <h4 className="title">Tích hợp nâng cao</h4>
                <p>Xây dựng tích hợp tùy chỉnh cho bất kỳ trường hợp sử
                  dụng nào</p>
                <img className="logo pl-2" src={require("../images/anh14.jpg")} alt="" />
                <img className="logo" src={require("../images/anh15.jpg")} alt="" />
              </div>
            </div>
          </div>
        </section>
      </div>
  );
}




export default UIweb;
