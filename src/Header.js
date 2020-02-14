import React, { Component } from 'react';
import avatar from './images/avatar.png';

export default class Header extends Component {
    render() {
        return (
            <div className="header">
                <div className="container">
                    <div className="container__header">
                        <div className="header__photo">
                            <img className="header__photo-avatar" alt="avatar" src={avatar} />
                        </div>
                        <div className="header__text">
                            <h1>Wojciech Masicz</h1>
                            <h3>Junior Frontend Developer</h3>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
