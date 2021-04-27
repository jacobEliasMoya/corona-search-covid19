import React, { Component } from 'react'
import { Databutton } from './Databutton';
import '../styles/datasection.css';



export class Maxresult extends Component {
    constructor(props){
        super(props);
    }

    render() {
        return (
            <div class="slidecontainer">
                <Databutton />
                <Databutton />
                <Databutton />
                <Databutton />
            </div>
        )
    }
}
