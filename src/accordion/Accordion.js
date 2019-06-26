import React, { Component } from 'react';

export default class Accordion extends Component {
    state = {
        current: null
    }

    onEvent(tab) {
        this.setState({ current: tab })
    }

    buttons() {
        //map each section/tab
        return this.props.sections.map((section, key) => (
            //On click 
            <li key={key} onClick={() => this.onEvent(key)}>
                {section.title}
                {(this.state.current === key) && this.renderContent()}
            </li > //render content section
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