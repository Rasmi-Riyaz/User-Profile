import React, { Component } from 'react';
import { Icon } from "antd";
import UserList from './user-list';
import { connect } from "react-redux";
import { deleteUsers } from "../redux/actions/user-actions";

class LeftPane extends Component {

    handleDelete() {
        this.props.deleteUsers();
    }

    render() {
        return (
            <div id="leftPane">
                <div className="header">
                    <h2>People</h2>
                    <Icon type="delete" onClick={() => this.handleDelete()} />
                </div>
                <div>
                    <UserList />
                </div>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {};
}

const mapDispatchToProps = {
    deleteUsers
}

export default connect(mapStateToProps, mapDispatchToProps)(LeftPane);

