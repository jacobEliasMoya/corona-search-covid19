import {Learnmore} from './Learnmore';
import {Logo} from './Logo';
import {Hamburgermenu} from './Hamburgermenu';
import { Datatable } from './Datatable';
import { TotalDatatable } from './TotalDatatable';
import { Maxresult } from './Maxresult';
import {searchObj} from './Learnmore';
import {Clicklocation } from './Clicklocation';
import {Cdclink} from './Cdclink';
import {Searchlocation} from './Searchlocation.js';

import '../styles/head.css';
import '../styles/app.css';
import '../styles/welcome.css';
import '../styles/datasection.css';

import React, { Component } from 'react'

export default class App extends Component {

  constructor(props){
      super(props);
      this.displayLocation = this.displayLocation.bind(this);
      this.getLocationData = this.getLocationData.bind(this);
      this.crosstest = this.crosstest.bind(this);

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

  crosstest(){
    console.log('working');
  }

  // small function that takes an element, saves the value to be used in other areas
  checkforMatch(e){
      e.country===searchObj.searchLocation ? searchObj.myLocation=e:console.log();
  }

  // method that consumes an api for specific country data in regards to covid19
  getLocationData(){
      fetch("https://covid-193.p.rapidapi.com/statistics", {
          "method": "GET",
          "headers": {
              "x-rapidapi-key": "ee1c72e30dmshb0923a36f539943p1c489cjsnbc83887d6b42",
              "x-rapidapi-host": "covid-193.p.rapidapi.com"
          }
      })
      .then(res=>res.json())
      .then(res=>{
          // res.resposnse because of json documentation** sorry for any confustion, check documentation for concerns
          res.response.forEach(element => {
              this.checkforMatch(element);
          });
      })

      .catch(err => {
          console.error(err);
      });

  }

  // method that consumes one api to save userCountry        
  displayLocation(){
      // fetching api
      fetch("https://ip-geo-location.p.rapidapi.com/ip/check?format=json", {
          "method": "GET",
          "headers": {
              "x-rapidapi-key": "ee1c72e30dmshb0923a36f539943p1c489cjsnbc83887d6b42",
              "x-rapidapi-host": "ip-geo-location.p.rapidapi.com"
          }
      })
      .then(response => response.json())
      .then(response =>{
          response.country.name==="United States of America" ? searchObj.searchLocation="USA":searchObj.searchLocation=undefined;
          this.getLocationData();
      })

      .catch(err => {
          console.error(err);
      });    
  }

  // method that consumes another api to get all location information pertaining to covid-19 
  updateLivelog(){
      fetch("https://covid-193.p.rapidapi.com/statistics", {
          "method": "GET",
          "headers": {
              "x-rapidapi-key": "ee1c72e30dmshb0923a36f539943p1c489cjsnbc83887d6b42",
              "x-rapidapi-host": "covid-193.p.rapidapi.com"
          }
      })
      .then(res => res.json())
      .then(res =>{
          // saving data to be used in later components
          searchObj.allSeachData=res.response;
          // empty array to stor data

      })
  }

  // lifecyclemethod to update live log on render
  componentDidMount(){
      this.updateLivelog();
  }

  updateMylocInfo(){
      console.log()
  }

  render() {
    return (
      <div className="App">
        <header className='mainHeader'>
            <Logo />
            <Hamburgermenu />
        </header>

        <section className="welcome_section">
          <div>
              <h1>Welcome to JakeRona</h1>
              <p>This Is an informative site which intends to educate the public on current stats centered around the COVID-19 Corona Virus. You can see information about your Country or other countries near you. Please enjoy the information and stay safe out there.</p>
          </div>

          <section className='learnmore'>
            <Cdclink
                href='https://www.cdc.gov/coronavirus/2019-ncov/communication/guidance.html'
                target="_blank"
                rel="noreferrer"
            />
            <Clicklocation
                onClick={this.displayLocation}                    
            />
            <Searchlocation
                placeholder='hello, this is place holder text tht will change'
            />
          </section>

        </section>

        <section className='datasection'>   
          <div>
              <TotalDatatable/>
              <Datatable/>
          </div>
          <Maxresult/>
        </section>    
      </div>
    )
  }
}
