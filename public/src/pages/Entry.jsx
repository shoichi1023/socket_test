import React from "react";
import Store from "../Store";
import { Link } from "react-router-dom";
import * as actions from "../actions/chat"

class Entry extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            name: ""
        }
    }

    changeTxt(e) {
        this.setState({ name: e.target.value });
    }

    render() {
        return (
            <div>
                <input type="text" value={this.state.name} onChange={(e) => {
                    this.changeTxt(e);
                }} />
                <Link to="/chat">
                    <button onClick={() => {
                        actions.entry(this.props.store, this.state.name);
                    }}>
                        入室する
                    </button>
                </Link>
            </div>
        );
    }
}

export default Store.withStore(Entry);