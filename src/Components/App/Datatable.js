import React, { Component } from 'react';
import {Datatablerow} from './Datatablerow';
export class Datatable extends Component {

    render() {
        return (
            <table>
                <tbody>
                    <tr className='headrow'>
                        <th>Country Name</th>
                        <th>Continent Name</th>
                        <th>Population</th>
                        <th>New Cases</th>
                        <th>Existing Cases</th>
                        <th>Date</th>
                    </tr>
                    <Datatablerow/>
                </tbody>
            </table>   
        )
    }
}
