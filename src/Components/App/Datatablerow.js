import React, { Component } from 'react';
import {searchObj} from './Learnmore';

export class Datatablerow extends Component {

    constructor(props){
        super(props);
        this.state= {information : searchObj.myLocation}
    }

    displayMydata(){
        let x = setInterval(() => {
            !searchObj.myLocation ? console.log(searchObj.myLocation): console.log();
        }, 10);
    }    

    componentDidMount(){
        this.displayMydata()
    }

    render() {
        return (
            <tr className="mylocationrow">
            </tr>    
        )
    }
}
