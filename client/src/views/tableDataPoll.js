import React from 'react';
import '../scss/fa/css/all.css';
import '../scss/bootstrap/css/bootstrap.css';
import '../scss/1.css';


class tableDataPoll extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            poll: []
        };
    }
    componentDidMount() {
        fetch('http://localhost:3001/viewpoll')
            .then(res => res.json())
            .then(result => {
                this.setState({ poll: result })
            }
            )
    }
    render() {
        console.log(this.state.poll)
        let ViewPoll = this.state.poll.map((poll,i) => {
            return (<tr key={i}>
                <th scope="row">{poll.poll_id}</th>
                <td>{poll.poll_title}</td>
                <td>{poll.poll_status === 1 ? "Đang hoạt động" : "Dừng hoạt động"}</td>
                <td>0905674600</td>
                <td>{poll.poll_date === null ? "":poll.poll_date.substring(0,10)}</td>
            </tr>)
        })
        return (
            <>
                <div className="col-md-8 ">
                    <table className="table table-striped">
                        <thead>
                            <tr>
                                <th scope="col">ID</th>
                                <th scope="col">Title</th>
                                <th scope="col">Status</th>
                                <th scope="col">Role</th>
                                <th scope="col">Create date</th>
                            </tr>
                        </thead>
                        <tbody>
                            {ViewPoll}
                            {/* <tr>
                                <th scope="row">1</th>
                                <td>Quang</td>
                                <td>phuquang197@gmail.com</td>
                                <td>0905674600</td>
                                <td>man</td>
                            </tr>
                            <tr>
                                <th scope="row">2</th>
                                <td>Quang</td>
                                <td>phuquang197@gmail.com</td>
                                <td>0905674600</td>
                                <td>man</td>
                            </tr>
                            <tr>
                                <th scope="row">3</th>
                                <td>Quang</td>
                                <td>phuquang197@gmail.com</td>
                                <td>0905674600</td>
                                <td>man</td>
                            </tr> */}
                        </tbody>
                    </table>
                </div>
            </>
        );
    }
}

export default tableDataPoll;