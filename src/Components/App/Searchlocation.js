import React, { Component } from 'react';
import {searchObj} from './Learnmore';



// need to be able to return options for valid search parameters, easy squeezy
export class Searchlocation extends Component {
    constructor(props){
        super(props);
        this.loadOptions=this.loadOptions.bind(this);
        this.state={
            isloading : true,
            loadingText : "Loading Country List ..."
        }
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
                    loadingText : 'Please select from options below'
                })
            }
        }, 10);
    }

    componentDidMount(){
        this.loadOptions();
    }

    render() {
        return (
            <div>
                <select >
                    <option className='mainselnull'>
                        {this.state.loadingText}
                    </option>
                </select>
            </div>
        )
    }
}
