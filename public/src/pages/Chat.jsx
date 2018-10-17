import React from "react";
import Store from "../Store";
import socket from "../socket";
import * as actions from "../actions/chat";

class Chat extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            msg: "",
            comments: []
        }
    }

    componentDidMount() {
        var store = this.props.store;

        socket.on('entered', (data) => {
            var comments = store.get("comments");
            comments.push(data);
            store.set("comments")(comments);
        });

        socket.on('received', (data) => {
            var comments = store.get("comments");
            comments.push(data);
            store.set("comments")(comments);
        });

        socket.on('leaved', (data) => {
            var comments = store.get("comments");
            comments.push(data);
            store.set("comments")(comments);
        });

        //stateにstoreの値をbind
        store.on("comments").subscribe((comments) => {
            this.setState({ comments: comments });
        });
    }

    changeTxt(e) {
        this.setState({ msg: e.target.value });
    }

    render() {
        var messages = this.state.comments.map((comment, index) => {
            return <p key={index}>{comment.msg}</p>
        });
        return (
            <div>
                <input type="text" value={this.state.msg} onChange={(e) => {
                    this.changeTxt(e);
                }} />
                <button onClick={() => {
                    actions.sendMsg(this.props.store, this.state.msg);
                    this.setState({ msg: "" });
                }}>
                    投稿
                </button>
                <div>
                    {messages}
                </div>
            </div>
        );
    }

}

export default Store.withStore(Chat);