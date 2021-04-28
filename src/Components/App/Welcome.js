import React, { Component } from 'react'
import '../styles/welcome.css';
import {Learnmore} from './Learnmore';
 
export class Welcome extends Component {
    render() {
        return (
            <section className="welcome_section">
                <div>
                    <h1>Welcome to JakeRona</h1>
                    <p>This Is an informative site which intends to educate the public on current stats centered around the COVID-19 Corona Virus. You can see information about your Country or other countries near you. Please enjoy the information and stay safe out there.</p>
                </div>
                <Learnmore />
            </section>
        )
    }
}
