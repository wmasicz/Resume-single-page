import React, { Component } from 'react';
import Slider from './Slider';
import Skills from './Skills';
import Contact from './Contact';


export default class Content extends Component {
    render() {
        return (
            <div className="content">
                <Slider />
                <Skills />
                <Contact />
            </div>
        )
    }
}
