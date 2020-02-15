import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faAt } from '@fortawesome/free-solid-svg-icons';
import { fab, faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';
// import { faLinkedin } from '@fortawesome/free-solid-svg-icons'
 
library.add(fab, faLinkedin, faGithub );

const icons = [
    {
        name: 'linkedIn',
        src: 'https://www.linkedin.com/in/wmasicz/',
    },
    {
        name: 'gitHub',
        src: 'https://github.com/wmasicz',
    },
    {
        name: 'mail',
        src: 'mailto:wmasicz@gmail.com',
    }
];
  
let getCurrentDate = () =>{

    let date = new Date().getDate();
    let month = new Date().getMonth() + 1;
    let year = new Date().getFullYear();
    
    return `${year}-${month<10?`0${month}`:`${month}`}-${date}`
}



export default class Footer extends Component {
    state = {
        class: ''
    };

    flipBtnIn = () => {
        this.setState({
            class: 'flip-horizontal-bottom'
        })
    }

    flipBtnOut = () => {
        this.setState({
            class: 'flip-horizontal-back'
        })
    }

    render() {
        return (
            <div className="footer">
                <div className="container">
                    <div className="container__footer">
                        <div className="footer__social">
                            <ul className="footer__social-icons">
                                <a href={icons[0].src} target="_blank" rel="noopener noreferrer"><FontAwesomeIcon className="footer__social-icon--linkedIn" icon={ faLinkedin } size="3x" /></a>
                                <a href={icons[1].src} target="_blank" rel="noopener noreferrer"><FontAwesomeIcon className="footer__social-icon--gitHub" icon={ faGithub } size="3x"/></a>
                                <a href={icons[2].src} target="_blank" rel="noopener noreferrer"><FontAwesomeIcon className="footer__social-icon--mail" icon={ faAt } size="3x"/></a>
                            </ul>
                        </div>
                        <div className="footer__copyright">
                            <a 
                                className={`btn ${this.state.class}`} 
                                onMouseEnter={this.flipBtnIn} 
                                onMouseLeave={this.flipBtnOut}
                                href="https://drive.google.com/open?id=16_kGjU5fph89Yf6EIdLscVzosg9KOMFB" 
                                target="_blank" 
                                rel="noopener noreferrer"
                                download="w3logo"
                            >
                               
                            </a>
                        </div>
                    </div>
                </div>
                <div className="copy">
                        <p>Copyright &copy; Wojciech Masicz {getCurrentDate()}</p>
                </div>
            </div>
        )
    }
}
