import React, { Component } from 'react';
import './index.css'
import MenuBtnContent from './menuBtnContent'

export default class MenuBtn extends Component {
    constructor(props) {
        super(props)
        this.state = {
            isHidden: true
        }
    }

    dropDownClick() {
        console.log('click')
        this.setState({
            isHidden: !this.state.isHidden
          }, console.log(this.state))
    }

    render() {
        return(
            <div className='dropDown'>      
                <button  onClick={(e) => {this.dropDownClick()}}>                       
                    <div className='menuBtn'></div>
                    <div className='menuBtn'></div>
                    <div className='menuBtn'></div> 
                </button>

                {!this.state.isHidden && <MenuBtnContent chooseDisplay={this.props.chooseDisplay} />}
                
            </div>
        )
    }
  }