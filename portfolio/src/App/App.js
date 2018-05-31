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
  }

  displayHomepage() {
    this.setState({
      showHomepage: true,
      showPortfolio: false,
      showContact: false
    })
    console.log(this.state, 'displayHomepage')
  }

  displayPortfolio() {
    this.setState({
      showHomepage: false,
      showPortfolio: true,
      showContact: false
    })
    console.log(this.state, 'displayPortfolio')
  }

  displayContact() {
    this.setState({
      showHomepage: false,
      showPortfolio: false,
      showContact: true
    })
    console.log(this.state, 'displayContact')
  }

  // currentDisplay() {
  //   let currentComponent
  //   switch(this.showHomepage && this.showPortfolio && this.showContact){
  //     case true && false && false:
  //         currentComponent = <Homepage />
  //       break;
  //     case false && true && false:
  //         currentComponent = <Portfolio />
  //       break;
  //     case false && false && true:
  //         currentComponent = <Contact />
  //       break;
  //     default:
  //       currentComponent = <Homepage />
  //   }
  //   return currentComponent
  // }

  render() {

    return (
      <div className="App">

        <Navbar displayHomepage={this.displayHomepage}
         displayPortfolio={this.displayPortfolio}
         displayContact={this.displayContact}
        />

      </div>
    );
  }
}

export default App;
