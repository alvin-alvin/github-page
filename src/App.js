import React, { Component } from 'react';
import './App.css';

import Routes from './navigations/Routes'
import { getTheme } from './helper/Theme'
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { faIgloo } from '@fortawesome/free-solid-svg-icons'

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
    library.add(fab,faEnvelope)
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.updateWindowDimensions);
  }

  updateWindowDimensions() {
    this.setState({ width: window.innerWidth, height: window.innerHeight });
  }


  render() {
    // console.log(window.location.href.includes('/detail'))
    const styles = getTheme()
    if (this.state.width < 800) {
      return (

        <div style={styles.ROOT_WRAPPER}>
          <div style={{ padding: 32 }}>
            <Routes />
          </div>
          {new Date().getHours() > 20 &&
          <div style={{ bottom: 0, border: '1px solid white', borderRadius: 4, margin: 16, display: 'flex', flexDirection: 'column' }}>
            <div style={{ padding: 16, display:'flex',flexDirection:'column' }}>
              <span style={{ margin: 0, color: 'white', fontSize: 13 }}>Hey, I think you access my website on bed time</span>
              <span style={{ margin: 0, color: 'white', fontSize: 21, fontWeight: 'bold' }}>Here’s the night version of my website</span>
            </div>
          </div>
          }
          
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
