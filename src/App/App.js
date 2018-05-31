import React, { Component } from 'react';
import './App.css';
import   {Contact, Homepage, Navbar, Portfolio} from './components/index'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      component: 'home'
    }
    this.displayHomepage = this.displayHomepage.bind(this)
    this.displayPortfolio = this.displayPortfolio.bind(this)
    this.displayContact = this.displayContact.bind(this)
    this.currentDisplay = this.currentDisplay.bind(this)
  }

  displayHomepage() {
    this.setState({component: 'home'})
  }

  displayPortfolio() {
    this.setState({component: 'portfolio'})
  }

  displayContact() {
    this.setState({component: 'contact'})
  }

  currentDisplay() {
    let Component
    switch(this.state.component){
      case 'home':
        Component = <Homepage />
          break;
      case 'portfolio':
        Component = <Portfolio />
          break;
      case 'contact':
        Component = <Contact />
          break;
      default:
        Component = <Homepage />
    }
    return Component
  }

  render() {

    return (
      <div className="App">

        <Navbar displayHomepage={this.displayHomepage} displayPortfolio={this.displayPortfolio} displayContact={this.displayContact} />
        <this.currentDisplay />

      </div>
    );
  }
}

export default App;
