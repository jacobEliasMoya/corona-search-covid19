import React, { Component } from 'react'

export class Cdclink extends Component {
    render() {
        return (
            <a
                href={this.props.href}
                target={this.props.target}
                rel={this.props.rel}

            >
                Click here to learn more about COVID-19
            </a>
        )
    }
}
