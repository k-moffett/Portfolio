import React, { Component } from 'react';
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';
import githubLogo from '../../../images/github.jpg';
import linkedinLogo from '../../../images/linkedin.jpg';
import twitterLogo from '../../../images/twitter.jpg';



export default class MenuBtns extends Component {
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

    githubLink() {
      return (
        <a href="https://github.com/moffkr91" target="_blank">
          <img id="githubImg"  src={githubLogo} alt="github" />
        </a>
        );
    }

    linkedinLink() {
      return (
        <a href="https://www.linkedin.com/in/kurtis-moffett-88388aa5/" target="_blank">
          <img id="linkedinImg"  src={linkedinLogo} alt="github" />
        </a>
         );
    }

    twitterLink() {
      return (
        <a href="https://twitter.com/moffkr91" target="_blank">
          <img id="linkedinImg"  src={twitterLogo} alt="github" />
        </a>
        );
    }

    render() {
        return (
          <div id="navBar">
            <Dropdown isOpen={this.state.dropdownOpen} toggle={this.toggle}>
            <this.githubLink />
            <this.linkedinLink/>
            <this.twitterLink />
              <DropdownToggle id='dropdownBtn'>
                <div className='menuBtn'></div>
                <div className='menuBtn'></div>
                <div className='menuBtn'></div>
              </DropdownToggle>
              <DropdownMenu>
                <DropdownItem><a className='dropdownContent' onClick={(e) => {this.homepageClick()}}>Home</a></DropdownItem>
                <DropdownItem divider />
                <DropdownItem><a className='dropdownContent' onClick={(e) => {this.portfolioClick()}}>Portfolio</a></DropdownItem>
              </DropdownMenu>
            </Dropdown>
          </div>
          );
    }
  }