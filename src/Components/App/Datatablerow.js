import React, { Component } from 'react';
import {searchObj} from './Learnmore';

export class Datatablerow extends Component {

    constructor(props){
        super(props);
        this.state= {information : searchObj.myLocation}
    }

    // function that runs an interval, once value is true, interval is cleared, and state is changed
    displayMydata(){
        let x = setInterval(() => {
            if(searchObj.myLocation){
                clearInterval(x);
                // resetState to update component
                this.setState({information : searchObj.myLocation})
            }   
        }, 1000);
    }    

    // two part function, creates single row data, and appends data
    createDynamicTableData(){
        // creating all table data to be used
        let country = document.createElement("td");
        let continent = document.createElement("td");
        let population = document.createElement("td");
        let newcases = document.createElement("td");
        let existingcases = document.createElement("td");
        let date = document.createElement("td");
        // filling td with corresponding information
        country.innerHTML=this.state.information.country;
        continent.innerHTML=this.state.information.continent;
        population.innerHTML=this.state.information.population;
        newcases.innerHTML=this.state.information.cases.new;
        existingcases.innerHTML=this.state.information.cases.active;
        date.innerHTML=this.state.information.day;
        // appending all created elements
        document.querySelector('.mylocationrow').append(country,continent,population,newcases,existingcases,date)
    }

    componentDidMount(){
        this.displayMydata();
    }

    componentDidUpdate(){
        this.createDynamicTableData();
    }

    render() {
        return (
            <tr className="mylocationrow">
            </tr>    
        )
    }
}
