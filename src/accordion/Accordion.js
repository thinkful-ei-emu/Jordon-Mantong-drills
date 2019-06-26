import React, { Component } from 'react';

export default class Accordion extends Component {
    state = {
        current: null
    }

    render() {
        console.log(this.props.sections);
        return (
            <ul>
                {this.props.sections.map((section, key) => (
                    <li key={key}>
                        <button>{section.title}</button>
                    </li>
                ))}
            </ul>
        )
    }
}