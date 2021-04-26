import React, { Component } from 'react'
import '../styles/datasection.css';
import {Datatable} from './Datatable';
import {searchObj} from './Learnmore.js';

export class Datasection extends Component {
    render() {
        return (
            <section className='datasection'>   
                <table>
                </table>
            </section>
        )
    }
}

searchObj.searchLocation ? console.log(searchObj.searchLocation) : console.log();