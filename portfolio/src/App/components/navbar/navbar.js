import React, { Component } from 'react';
import './index.css'

export default class Navbar extends Component {

    homepageClick() {
        this.props.displayHomepage()
    }

    portfolioClick() {
        this.props.displayPortfolio()
    }

    contactClick() {
        this.props.displayContact()
    }

    render() {
        return(
            <div>
               <button onClick={(e) => {this.homepageClick()}}>Home</button>
               <button onClick={(e) => {this.portfolioClick()}}>Portfolio</button>
               <button onClick={(e) => {this.contactClick()}}>Contact</button>
            </div>
        )
    }
}