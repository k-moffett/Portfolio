import React, { Component } from 'react';
import './index.css'
import {MenuBtn, Social} from './components/index'

export default class Navbar extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return(
            <div id="navBar">
                <Social />
                <MenuBtn id="menu-button" chooseDisplay={this.props.chooseDisplay} />
            </div>
        )
    }
}