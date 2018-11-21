import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import {getTheme} from '../../../helper/Theme'

class Header extends Component {

  constructor(props) {
    super(props);
    this.state = {
    };
  }

  navigateToPortfolio() {
    // this.context.router.push('/portfolio');
  }

  render() {
    const styles = getTheme()
    return (
      <div style={{display:'inline', alignItems:'center',alignSelf:'start'}}>
        <Link style={{textDecoration:'none', color:'black'}} to='/portfolio'>
          <span onClick={() => this.navigateToPortfolio()} style={styles.DEFAULT_TEXT_COLOR}>PORTFOLIO</span>
        </Link>

        <img alt='timeIcon' className="dayNightIcon" src={require("../../../assets/image/sunrise.png")}></img>
      </div>
    );
  }
}

export default Header;
