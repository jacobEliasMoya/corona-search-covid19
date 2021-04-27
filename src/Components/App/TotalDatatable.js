import React, { Component } from 'react'
import {Totaldatarow} from './Totaldatarow';

export class TotalDatatable extends Component {
    render() {
        return (
            <table >
                <tbody className='alldatatbody'>
                    <tr className='headrow'>
                        <th>Country Name</th>
                        <th>Continent Name</th>
                        <th>Population</th>
                        <th>New Cases</th>
                        <th>Existing Cases</th>
                        <th>Date</th>
                    </tr>
                    <Totaldatarow />
                </tbody>
            </table>          
        )
    }
}
