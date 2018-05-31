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
    }
    this.displayHomepage = this.displayHomepage.bind(this)
    this.displayPortfolio = this.displayPortfolio.bind(this)
    this.displayContact = this.displayContact.bind(this)
    this.currentDisplay = this.currentDisplay.bind(this)
  }

  displayHomepage() {
    this.setState({showHomepage: true})
    this.setState({showPortfolio: false})
    this.setState({showContact: false})
  }

  displayPortfolio() {
    this.setState({showHomepage: false})
    this.setState({showPortfolio: true})
    this.setState({showContact: false})
  }

  displayContact() {
    this.setState({showHomepage: false})
    this.setState({showPortfolio: false})
    this.setState({showContact: true})
  }

  currentDisplay() {
    let Component
    if (this.state.showHomepage === true) {
      return Component = <Homepage />
    } else 
    if (this.state.showPortfolio === true) {
      return Component = <Portfolio />
    } else {
      return Component = <Contact />
    }
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
