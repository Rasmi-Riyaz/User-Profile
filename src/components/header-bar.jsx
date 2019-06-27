import React, { Component } from 'react';
import { Button } from "antd";

class HeaderBar extends Component {

    toggleAddUser() {
        this.props.toggleAddUser();
    }

    render() {

        return (
            <div id="headerBar">
                <h2>Users' Information</h2>
                <Button type="primary" onClick={() => this.toggleAddUser()}>Add User</Button>
            </div>
        )
    }
}

export default HeaderBar
