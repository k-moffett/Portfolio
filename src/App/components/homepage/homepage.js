import React, { Component } from 'react';
import Main from  './main'
import DisplayProjects from './displayProjects'
import './index.css'


export default class Homepage extends Component {

    render() {
        return(
            <div>
                <h1>Kurtis Moffett</h1>
                <Main />
                <DisplayProjects />
            </div>
        )
    }
}