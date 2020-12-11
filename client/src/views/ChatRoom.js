import React, { useState, useEffect } from 'react';
import {
    useHistory,
    useParams
} from "react-router-dom";
import {
    Container,
    Row,
    Col,
    Card,
    CardBody,
    CardSubtitle,
    Button,
    Form,
    InputGroup,
    Input,
    InputGroupAddon
} from 'reactstrap';
import Moment from 'moment';
import firebase from '../Firebase';
import ScrollToBottom from 'react-scroll-to-bottom';
import '../scss/RoomChat.css'

class ChatRoom extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            chats: [],
            users: [],
            nickname: '',
            // newchat: [{ roomname: '', nickname: '', message: '', data: '', type: '' }],
            roomname: '',
            room: '',
            message: '',
            inputVal_1:''
        }
        this.closeForm = this.closeForm.bind(this)
        this.openForm = this.openForm.bind(this)
        this.submitMessage = this.submitMessage.bind(this)
    }
    // const [chats, setChats] = useState([]);
    // const [users, setUsers] = useState([]);
    // const [nickname, setNickname] = useState('');
    // const [roomname, setRoomname] = useState('');
    // const [newchat, setNewchat] = useState({ roomname: '', nickname: '', message: '', date: '', type: '' });
    // // const history = useHistory();
    // const { room } = useParams();

    // useEffect(() => {
    //     const fetchData = async () => {
    //         setNickname(localStorage.getItem('nickname'));
    //         setRoomname(room);
    //         firebase.database().ref('chats/').orderByChild('roomname').equalTo(roomname).on('value', resp => {
    //             setChats([]);
    //             setChats(snapshotToArray(resp));
    //         });
    //     };

    //     fetchData();
    // }, [room, roomname]);
    componentDidMount() {
        const dataRef = firebase.database().ref('/chats')
        dataRef.orderByChild('roomname').equalTo(sessionStorage["poll_id"]).on('value', resp => {
            this.setState({ chats: this.snapshotToArray(resp) })
            console.log(this.state.chats)
        })
    }
    // useEffect(() => {
    //     const fetchData = async () => {
    //         setNickname(localStorage.getItem('nickname'));
    //         setRoomname(room);
    //         firebase.database().ref('roomusers/').orderByChild('roomname').equalTo(roomname).on('value', (resp2) => {
    //             setUsers([]);
    //             const roomusers = snapshotToArray(resp2);
    //             setUsers(roomusers.filter(x => x.status === 'online'));
    //         });
    //     };

    //     fetchData();
    // }, [room, roomname]);
    // componentDidMount() {
    // const chatRef= firebase.database().ref('chats')        

    // }

    snapshotToArray = (snapshot) => {
        const returnArr = [];

        snapshot.forEach((childSnapshot) => {
            const item = childSnapshot.val();
            item.key = childSnapshot.key;
            returnArr.push(item);
        });

        return returnArr;
    }

    submitMessage = (e) => {
        e.preventDefault();
        var chat = {
            roomname: sessionStorage["poll_id"],
            users: sessionStorage["users_id"],
            nickname: sessionStorage["users_name"],
            message: this.state.message,
            date: Moment(new Date()).format('DD/MM/YYYY HH:mm:ss'),
            type: 'message'
        };
        // chat.roomname = sessionStorage["poll_id"];
        // chat.users=sessionStorage["users_id"]
        // chat.nickname = sessionStorage["users_name"];
        // chat.message=[...this.state.message]
        // alert(chat.message)
        // chat.date = Moment(new Date()).format('DD/MM/YYYY HH:mm:ss');
        // chat.type = 'message';
        alert(chat)
        const newMessage = firebase.database().ref('chats/').push();
        newMessage.set(chat);

        this.setState({ message: ''})
        e.target.reset();
    };

    onChange = (e) => {
        e.persist();
        this.setState({ message: e.target.value });
    }

    // exitChat = (e) => {
    //     const chat = { roomname: '', nickname: '', message: '', date: '', type: '' };
    //     chat.roomname = roomname;
    //     chat.nickname = nickname;
    //     chat.date = Moment(new Date()).format('DD/MM/YYYY HH:mm:ss');
    //     chat.message = `${nickname} leave the room`;
    //     chat.type = 'exit';
    //     const newMessage = firebase.database().ref('chats/').push();
    //     newMessage.set(chat);

    //     firebase.database().ref('roomusers/').orderByChild('roomname').equalTo(roomname).once('value', (resp) => {
    //         let roomuser = [];
    //         roomuser = snapshotToArray(resp);
    //         const user = roomuser.find(x => x.nickname === nickname);
    //         if (user !== undefined) {
    //             const userRef = firebase.database().ref('roomusers/' + user.key);
    //             userRef.update({ status: 'offline' });
    //         }
    //     });

    // history.goBack();

    openForm = (e) => {
        document.getElementById("myModal").style.display = "block";
    }

    closeForm = (e) => {
        document.getElementById("myModal").style.display = "none";
    }
    render() {
        return (
            <>
                <button id="myBtn" onClick={this.openForm}><i class="fas fa-comment-dots"></i></button>
                <div id="myModal" class="modal">
                    {/* <!-- Modal content --> */}
                    <div className="modal-content">
                        <span className="close text-right p-3 " onClick={this.closeForm}>&times;</span>
                        <div className="scroll_mess">
                            <div className="popup-head">
                            </div>
                            {this.state.chats.map((item, idx) => (
                                <div className="popup-messages">
                                    <div className="direct-chat-messages">
                                        <div className="chat-box-single-line">
                                            <abbr className="timestamp">{item.date}</abbr>
                                        </div>
                                        <div className="direct-chat-msg doted-border">
                                                                           
                                        
                                            <div className={`${item.nickname === sessionStorage["users_name"] ? "RightBubble" : "LeftBubble"}`}>
                                                {item.nickname === sessionStorage["users_name"] ?
                                                    <span className="MsgName">Me</span> : <span className="MsgName">{item.nickname}</span>
                                                }
                                                <p>{item.message}</p>
                                            </div>
                                            
                                        </div>
                                    </div>
                                </div>
                            ))}
                            
                        </div>
                        <div style ={{"position":"sticky"}} className="popup-messages-footer">
                                <Form className="MessageForm" onSubmit={this.submitMessage}>
                                    <InputGroup>
                                        <Input type="text" name="message"  id="message" placeholder="Enter message here" onChange={this.onChange} />
                                        <InputGroupAddon addonType="append">
                                            <Button variant="primary" type="submit">Send</Button>
                                       </InputGroupAddon>
                                    </InputGroup>
                                </Form>

                            </div>
                    </div>

                </div>
             
            </>
        );
    }
}

export default ChatRoom;