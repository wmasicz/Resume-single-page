import React, { Component } from 'react'

let techStack = [
    {
        name: 'HTML5',
        className: 'html'
    },
    {
        name: 'CSS3',
        className: 'css'
    },
    {
        name: 'javascript',
        className: 'js'
    },
    {
        name: 'SASS',
        className: 'sass'
    },
    {
        name: 'photoshop',
        className: 'photoshop'
    },
    {
        name: 'ES6',
        className: 'es6'
    },
    {
        name: 'React',
        className: 'react'
    },
    {
        name: 'jquery',
        className: 'jq'
    }
    
];

export default class Skills extends Component {
    render() {
        return (
            <div className="skills">
                <div className="container">
                    <h1>Technologies</h1>
                    <ul className="skills__list">
                        {
                            techStack.map((item, index) => 
                                <li className={`skills__list-technology--${item.className}`} key={index}></li>
                            )
                        }
                    </ul>
                </div>
            </div>
        )
    }
}
