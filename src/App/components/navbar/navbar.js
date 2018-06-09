import React, { Component } from 'react';
import './index.css'
import MenuBtns from './components/menuBtns'


export default class Navbar extends Component {

    render() {
        return(
            <div id="navBar">
                <MenuBtns id="menu-button" chooseDisplay={this.props.chooseDisplay} />
            </div>
        )
    }
}