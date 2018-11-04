import React, { Component } from 'react';
import './App.css';

import Routes from './navigations/Routes'
import Header from './components/presentational/header/Header'

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      width: 0,
      height: 0
    };
    this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
  }

  componentDidMount() {
    this.updateWindowDimensions();
    window.addEventListener('resize', this.updateWindowDimensions);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.updateWindowDimensions);
  }

  updateWindowDimensions() {
    this.setState({ width: window.innerWidth, height: window.innerHeight });
  }


  render() {
    // console.log(window.location.href.includes('/detail'))
    if (this.state.width < 800) {
      return (
        <div className="App">
          {window.location.href.includes('/detail') ?
            null
            :
            <Header />
          }

          <Routes />
        </div >
      );
    } else {
      return (
        <div>
          <div className="AppDesktopView">
            <b><span className="textSmallBold">Hey</span></b>
            <h1 className="textLarge">SORRY</h1>
            {/* <span className="textSmallBold">Currently you only can access this website through mobile screen</span> */}
            <span className="textSmallBold">The developer too lazy to build responsive layout</span>
            <span className="textSmaller">Please resize your browser width to access from desktop</span>
          </div>
        </div>
      )
    }

  }
}

export default App;
