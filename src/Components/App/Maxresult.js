import React, { Component } from 'react'
import { Databutton } from './Databutton';
import '../styles/datasection.css';

export class Maxresult extends Component {
    
    constructor(props){
        super(props);
        this.logVal=this.logVal.bind(this);
    }

    logVal(e){
    }

    render() {
        return (
            <div className="slidecontainer">
                <div>
                    <Databutton onClick={this.logVal} cnam='fas fa-caret-down'/>
                    <Databutton/>
                    <Databutton onClick={this.logVal} cnam='fas fa-caret-up'/>
                </div>
            </div>
        )
    }
}
