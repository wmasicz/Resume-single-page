import React, { Component } from 'react';

const contactInfo = [
    {
        header: 'Phone: ',
        txt: '516 667 709'
    },
    {
        header: 'Email: ',
        txt: 'wmasicz@gmail.com'
    },
    {
        header: '',
        txt: 'Warsaw, PL'
    }
];

export default class Contact extends Component {
    render() {
        return (
            <div className="contact">
                <div className="container box">
                    <div className="contact__header">
                        <h1>Contact</h1>
                    </div>
                    <div className="contact__wrapper">
                        <ul className="contact__list">
                            {
                                contactInfo.map((item, index) =>
                                    <li key={index} className="contact__list-element">
                                        <h3 className="contact__list-header">{item.header}</h3>
                                        <p className="contact__list-txt">{item.txt}</p>
                                    </li>
                                ) 
                            }
                        </ul>
                    </div>
                </div>
            </div>
        )
    }
}
