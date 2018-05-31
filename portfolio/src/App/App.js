import React, { Component } from 'react';
import './App.css';
import   {Contact, Homepage, Navbar, Portfolio} from './components/index'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      showHomepage: true,
      showPortfolio: false,
      showContact: false,
      currentComponent: ''
    }
    this.displayHomepage = this.displayHomepage.bind(this)
    this.displayPortfolio = this.displayPortfolio.bind(this)
    this.displayContact = this.displayContact.bind(this)
  }

  displayHomepage() {
    this.setState({
      showHomepage: true,
      showPortfolio: false,
      showContact: false
    })
  }

  displayPortfolio() {
    this.setState({
      showHomepage: false,
      showPortfolio: true,
      showContact: false
    })
  }

  displayContact() {
    this.setState({
      showHomepage: false,
      showPortfolio: false,
      showContact: true
    })
  }

  currentDisplay() {
    switch(this.state.showHomepage && this.state.showPortfolio && this.state.showContact){
      case true && false && false:
        this.setState({currentComponent: <Homepage />})
        break;
      case false && true && false:
        this.setState({currentComponent: <Portfolio />})
        break;
      case false && false && true:
        this.setState({currentComponent: <Contact />})
        break;
      default:
        this.setState({currentComponent: <Homepage />})
    }
  }

  render() {
    return (
      <div className="App">

        <Navbar
         displayHomepage={this.displayHomepage}
         displayPortfolio={this.displayPortfolio}
         displayContact={this.displayContact}
        />

        <Homepage />
        <Portfolio />
        <Contact />

      </div>
    );
  }
}

export default App;
