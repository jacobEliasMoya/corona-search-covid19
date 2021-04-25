import React, { Component } from 'react';
import {Clicklocation } from './Clicklocation';

export class Learnmore extends Component {
    render() {
        return (
            <section className='learnmore'>
                <a
                    href='https://www.cdc.gov/coronavirus/2019-ncov/communication/guidance.html'
                    target="_blank"
                >Click here to learn more about COVID-19</a>
                <Clicklocation/>
            </section>
        )
    }
}
