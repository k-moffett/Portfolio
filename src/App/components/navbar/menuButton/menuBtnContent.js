import React, { Component } from 'react';
import './index.css'

export default class MenuBtnContent extends Component {

    homepageClick() {
        this.props.chooseDisplay('home')
    }

    portfolioClick() {
        this.props.chooseDisplay('portfolio')
    }

    contactClick() {
        this.props.chooseDisplay('contact')
    }
    
    render() {
        return(
            <div className="dropdown-content">
                <button id="btn-1" onClick={(e) => {this.homepageClick()}}>Home</button>
                <button id="btn-2" onClick={(e) => {this.portfolioClick()}}>Portfolio</button>
                <button id="btn-3" onClick={(e) => {this.contactClick()}}>Contact</button>
            </div>
        )
    }
}