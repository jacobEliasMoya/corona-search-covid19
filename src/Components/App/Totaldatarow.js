import React, { Component } from 'react'
import {searchObj} from './Learnmore';

export class Totaldatarow extends Component {

    constructor(props){
        super(props);
        this.state={
            information : searchObj.myLocation,
            maxDisplay : 15
        }
    }

    displayMydata(){
        let x = setInterval(() => {
            if(searchObj.myLocation){
                clearInterval(x);
                // resetState to update component
                this.setState({information : searchObj.allSeachData})
                console.log(this.state.information)
                this.createNewRow();
            }   
        }, 1000);
    }    

    createNewRow(){
        // way to clear html
        this.state.information.forEach(item=>{
            //  && document.querySelector('.alldatatbody').childElementCount < this.state.maxDisplay for the if statement when necessary
            if(item.population && document.querySelector('.alldatatbody').childElementCount < this.state.maxDisplay ){
                let newrow = document.createElement("tr");
                this.createDynamicTableData(newrow,item);
                document.querySelector('.alldatatbody').append(newrow);
            }
        })
    }

    // two part function, creates single row data, and appends data
    createDynamicTableData(row,item){
        // creating all table data to be used
        let country = document.createElement("td");
        country.classList.add('country');
        let continent = document.createElement("td");
        let population = document.createElement("td");
        let newcases = document.createElement("td");
        let existingcases = document.createElement("td");
        let date = document.createElement("td");
        // filling td with corresponding information
        country.innerHTML=item.country;
        continent.innerHTML=item.continent;
        population.innerHTML=item.population;
        newcases.innerHTML=item.cases.new;
        existingcases.innerHTML=item.cases.active;
        date.innerHTML=item.day;
        // appending all created elements
        row.append(country,continent,population,newcases,existingcases,date)
    }
    

    componentDidMount(){
        this.displayMydata();
    }

    render() {
        return (
            <tr className="mylocationrow1">
            </tr>    
        )
    }
}
