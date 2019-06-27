import React, { Component } from 'react';
import UserInformation from './user-information';

class RightPane extends Component {
    render() {
        return (
            <div id="rightPane">
                <UserInformation />
            </div>
        )
    }
}

export default RightPane;
