import React, { Component } from 'react'

export class SearchButton extends Component {
    render() {
        return (
            <button className='selectbutton'>    
                {this.props.btext}
            </button>
        )
    }
}
