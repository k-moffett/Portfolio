import React, { Component } from 'react';
import './index.css'

export default class Navbar extends Component {
    constructor(props) {
        super(props)
    }

    homepageClick(e) {
        e.preventDefault()
        this.props.displayHomepage()
    }

    homepageBtn() {
        return(
            <button onClick={(e) => {this.homepageClick}}>Home</button>
        )
    }

    portfolioClick(e) {
        e.preventDefault()
        this.props.displayPortfolio()
    }

    portfolioBtn() {
        return(
            <button onClick={(e) => {this.portfolioClick}}>Portfolio</button>
        )
    }

    contactClick(e) {
        e.preventDefault()
        this.props.displayContact()
    }

    contactBtn() {
        return(
            <button onClick={(e) => {this.contactClick}}>Contact</button>
        )
    }

    render() {
        return(
            <div>
                <this.homepageBtn />
                <this.portfolioBtn />
                <this.contactBtn />
            </div>
        )
    }
}