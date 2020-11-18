import React from 'react';
import '../scss/fa/css/all.css';
import '../scss/bootstrap/css/bootstrap.css';
import '../scss/1.css';


class tableDataUser extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            users: []
        };
    }
    componentDidMount() {
        fetch('http://localhost:3001/viewuser')
            .then(res => res.json())
            .then(result => {
                console.log(result)
                this.setState({ users: result })
            }
            )
    }
    render() {
        let ViewUser = this.state.users.map((users,i) => {
            return (
                <tr key={i}>
                    <th scope="row">{users.users_id}</th>
                    <td>{users.users_name}</td>
                    <td>{users.users_email}</td>
                    <td>{users.users_country}</td>
                    <td>{users.users_birthday === null ? "" : users.users_birthday.substring(0, 10)}</td>
                </tr>
            )
        })
        return (
            <>
                <div className="col-md-8 ">
                    <table className="table table-striped">
                        <thead>
                            <tr>
                                <th scope="col">ID</th>
                                <th scope="col">Name</th>
                                <th scope="col">Email</th>
                                <th scope="col">Country</th>
                                <th scope="col">Birthday</th>
                            </tr>
                        </thead>
                        <tbody>
                            {ViewUser}
                        </tbody>
                    </table>
                </div>

            </>

        );
    }
}

export default tableDataUser;