import React, { Component } from 'react';
import './index.css'
import MenuBtn from './menuButton/menuBtn'

export default class Navbar extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return(
            <div>
                <MenuBtn chooseDisplay={this.props.chooseDisplay} />
            </div>
        )
    }
}