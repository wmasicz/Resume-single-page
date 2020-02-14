import React, { Component } from 'react';
import ExpSlider from './Slider';
import Skills from './Skills';
import Contact from './Contact';


export default class Content extends Component {
    render() {
        return (
            <div className="content">
                <ExpSlider />
                <Skills />
                <Contact />
            </div>
        )
    }
}
