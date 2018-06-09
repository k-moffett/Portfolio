import React, { Component } from 'react';
import Main from  './main'
import './index.css'


export default class Homepage extends Component {

    render() {
        return(
            <div>
                <div id="name">
                    <p>Kurtis Moffett</p>
                </div>
                <div id='contact'>
                    <a href='mailto:moffkr91@gmail.com'>moffkr91@gmail.com</a>
                </div>
                <Main />
                
            </div>
        )
    }
}