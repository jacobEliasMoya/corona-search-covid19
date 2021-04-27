import React, { Component } from 'react'
import '../styles/datasection.css';
import { Datatable } from './Datatable';
import { TotalDatatable } from './TotalDatatable';

// import {searchObj} from './Learnmore.js';

export class Datasection extends Component {
    render() {
        return (
            <section className='datasection'>   
                <TotalDatatable/>
                <Datatable/>
            </section>
        )
    }
}

