import React, { Component } from 'react';
import './App.css';
import   {Homepage, Navbar, Portfolio} from './components/index'
import MenuBts from './components/navbar/components/menuBtns'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      component: 'home'
    }
    this.currentDisplay = this.currentDisplay.bind(this)
    this.chooseDisplay = this.chooseDisplay.bind(this)
  }

  chooseDisplay(display) {
    this.setState({component: display})
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
      default:
        Component = <Homepage />
    }
    return Component
  }

  render() {

    return (
      <div className="App">

        <Navbar chooseDisplay={this.chooseDisplay} />
        <this.currentDisplay />

      </div>
    );
  }
}

export default App;
