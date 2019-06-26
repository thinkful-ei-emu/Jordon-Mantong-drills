import React, { Component } from 'react';

export default class Accordion extends Component {
    state = {
        current: null
    }

    listenEvent(tab) {
        this.setState({ current: tab })
    }

    buttons() {
        return this.props.sections.map((section, key) => (
            <li key={key} onClick={() => this.listenEvent(key)}>
                <button>{section.title}</button>
                {this.renderContent()}
            </li >
        ))
    }


    renderContent() {
        let currentTab = this.props.sections[this.state.current];
        return (
            <p>
                {currentTab.content}
            </p>
        )
    }

    render() {
        console.log(this.props.sections);
        return (
            <ul>
                {this.buttons()}
            </ul>
        )
    }
}