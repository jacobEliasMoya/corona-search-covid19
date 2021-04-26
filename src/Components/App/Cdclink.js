import React, { Component } from 'react'

export class Cdclink extends Component {
    render() {
        return (
            <a
                href={this.props.href}
                target={this.props.target}
                rel={this.props.rel}

            >
                Click to learn more about COVID
            </a>
        )
    }
}
