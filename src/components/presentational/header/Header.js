import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import './styles.css'

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
    return (
      <div className="Header">
        <Link style={{textDecoration:'none', color:'black'}} to='/portfolio'>
          <span onClick={() => this.navigateToPortfolio()} className="portfolio">PORTFOLIO</span>
        </Link>

        <img alt='timeIcon' className="dayNightIcon" src={require("../../../assets/image/sunrise.png")}></img>
      </div>
    );
  }
}

export default Header;
