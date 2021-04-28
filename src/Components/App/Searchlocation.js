import React, { Component } from 'react';
import {searchObj} from './App';
import {SearchButton} from './SearchButton';




// need to be able to return options for valid search parameters, easy squeezy
export class Searchlocation extends Component {
    constructor(props){
        super(props);
        this.loadOptions=this.loadOptions.bind(this);
        this.saveSelectedSearch = this.saveSelectedSearch.bind(this); 
        this.logCurrentState = this.logCurrentState.bind(this); 

        this.state={
            isloading : true,
            loadingText : "Loading Country List ...",
            loadingTextButton : "Select",
            currentLocation : undefined,

        }
    }

    logCurrentState(){
        this.state.currentLocation ? console.log(this.state.currentLocation) : console.log();
    }

    // method that will run an interval, and update list options when list has been fetched from api
    loadOptions(){
        const int = setInterval(() => {
            // checking if searchdata is undefined or not
            if(searchObj.allSeachData){
                // clears interval if true
                clearInterval(int);
                // updates state of app with proper text when text is loading 
                this.setState({
                    loadingText : 'Select Country ...',
                })
            }
        }, 10);
    }

    // method to add options dynamically by creating and appending new elements to DOM, will be run with lifecycle method update
    addOptions(){
        searchObj.allSeachData.forEach(element => {
            let newoption = document.createElement("OPTION");
            newoption.innerHTML=element.country;
            document.querySelector('.selectaddition').appendChild(newoption);           
        });
    }

    saveSelectedSearch(){
        this.setState({
            currentLocation : document.querySelector('.selectaddition').value
        }) 

    }

    // runs loadoptions to set newstate of class
    componentDidMount(){
        this.loadOptions();
    }

    // adding options in dropdown on load, using prev state to check if one function should be ran
    componentDidUpdate(prevState){
        this.addOptions();
        prevState.currentLocation !== this.state.currentLocation ? this.logCurrentState() : console.log();
    }

    render() {
        return (
            <div>
                <select onChange={this.saveSelectedSearch} className='selectaddition'>
                    <option className='mainselnull'>
                        {this.state.loadingText}
                    </option>
                </select>
                <SearchButton 
                    btext={this.state.loadingTextButton}
                />
            </div>
        )
    }
}
