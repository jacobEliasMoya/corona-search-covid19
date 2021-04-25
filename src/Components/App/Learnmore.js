import React, { Component } from 'react';
import {Clicklocation } from './Clicklocation';

let searchObj = {
    searchLocation : undefined,
    
}

export class Learnmore extends Component {
    
    constructor(props){
        super(props);
        this.displayLocation = this.displayLocation.bind(this);
        this.getLocationData = this.getLocationData.bind(this);
    }

    // small function that takes an element, and based on a match to another keyvalue exexcute console log
    checkforMatch(e){
        e.country===searchObj.searchLocation ? console.log(e):console.log();
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
            console.log(res.response);
        })
    }

    // lifecyclemethod to update live log on render
    componentDidMount(){
        this.updateLivelog();
    }

    render() {
        return (
            <section className='learnmore'>
                <a
                    href='https://www.cdc.gov/coronavirus/2019-ncov/communication/guidance.html'
                    target="_blank"
                >Click here to learn more about COVID-19</a>
                < Clicklocation
                    onClick={this.displayLocation}                    
                />
            </section>
        )
    }
}
