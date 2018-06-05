import React, { Component } from 'react';
import './index.css'
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';


export default class MenuBtn extends Component {
    constructor(props) {
        super(props)
        this.toggle = this.toggle.bind(this);
        this.state = {
          dropdownOpen: false
        };
    }

    toggle() {
        this.setState(prevState => ({
          dropdownOpen: !prevState.dropdownOpen
        }));
      }

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
        return (
            <Dropdown isOpen={this.state.dropdownOpen} toggle={this.toggle}>
              <DropdownToggle id='dropdownBtn'>
                <div className='menuBtn'></div>
                <div className='menuBtn'></div>
                <div className='menuBtn'></div>
              </DropdownToggle>
              <DropdownMenu>
                <DropdownItem><button className='dropdownContent' onClick={(e) => {this.homepageClick()}}>Home</button></DropdownItem>
                <DropdownItem divider />
                <DropdownItem><button className='dropdownContent' onClick={(e) => {this.portfolioClick()}}>Portfolio</button></DropdownItem>
                <DropdownItem divider />
                <DropdownItem><button className='dropdownContent' onClick={(e) => {this.contactClick()}}>Contact</button></DropdownItem>
              </DropdownMenu>
            </Dropdown>
          );
    }
  }