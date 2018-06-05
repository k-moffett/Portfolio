import React, { Component } from 'react';
import './index.css'
import MenuBtn from './menuButton/menuBtn'

export default class Navbar extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return(
            <div id="navBar">
                <MenuBtn id="menu-button" chooseDisplay={this.props.chooseDisplay} />
            </div>
        )
    }
}