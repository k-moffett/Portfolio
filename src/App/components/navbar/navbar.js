import React, { Component } from 'react';
import './index.css'

export default class Navbar extends Component {
    constructor(props) {
        super(props)
    }

    homepageClick() {
        this.props.displayHomepage()
    }

    portfolioClick() {
        this.props.displayPortfolio()
    }

    contactClick() {
        this.props.displayContact()
    }

    menuBtn() {
      return(
          <div className='dropDown'>      
            <button>                       
                <div className='menuBtn'></div>
                <div className='menuBtn'></div>
                <div className='menuBtn'></div> 
            </button>
          </div>
          )
    }


    render() {
        return(
            <div>
                <this.menuBtn />
                <button onClick={(e) => {this.homepageClick()}}>Home</button>
                <button onClick={(e) => {this.portfolioClick()}}>Portfolio</button>
                <button onClick={(e) => {this.contactClick()}}>Contact</button>
            </div>
        )
    }
}