import React, { Component } from 'react'

import { Datatable } from './Datatable';
import { TotalDatatable } from './TotalDatatable';
import {Logo} from './Logo';
import {Hamburgermenu} from './Hamburgermenu';
import {Clicklocation } from './Clicklocation';
import {Cdclink} from './Cdclink';
import {Searchlocation} from './Searchlocation.js';
import { Databutton } from './Databutton';

import '../styles/head.css';
import '../styles/welcome.css';
import '../styles/app.css';
import '../styles/datasection.css';

export const searchObj = {
    myLocation : undefined,
    searchLocation : undefined,
    allSeachData : undefined
}

export default class App extends Component {

    constructor(props){
    super(props);
        this.hightlightrow = this.hightlightrow.bind(this);
        this.displayLocation = this.displayLocation.bind(this);
        this.getLocationData = this.getLocationData.bind(this);
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

    hightlightrow(e){
        console.log(e.target.innerHTML);
    }

    // lifecyclemethod to update live log on render
    componentDidMount(){
        this.updateLivelog();
        this.displayLocation();
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
              />
              <Searchlocation
                  placeholder='hello, this is place holder text tht will change'
              />
          </section>        
        </section>
        <section className='datasection'>   
          <div>
              <TotalDatatable/>
              <div className='doubdatatable'>
                  <Datatable/>
                  this is below the table
              </div>
          </div>
          <div className="slidecontainer">
                <Databutton onClick={this.hightlightrow} inner={<i className="fa fa-caret-up"></i>}/>
                <Databutton inner='midbutton' className="middlebutton"/>
                <Databutton onClick={this.hightlightrow} inner={<i className="fa fa-caret-down"></i>}/>
            </div>
        </section>    
      </div>
    );  
    }
}
