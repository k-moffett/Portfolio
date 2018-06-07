import React, { Component } from 'react';
import Main from  './main'
import './index.css'


export default class Homepage extends Component {

    render() {
        return(
            <div>
                <div id="name">
                    <h1>Kurtis Moffett</h1>
                </div>
                <Main />
            </div>
        )
    }
}