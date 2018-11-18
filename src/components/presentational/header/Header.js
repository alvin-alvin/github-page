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
      <div style={{display:'inline', alignItems:'center',alignSelf:'start'}}>
        <Link style={{textDecoration:'none', color:'black'}} to='/portfolio'>
          <span className="portfolioText" onClick={() => this.navigateToPortfolio()} style={{marginRight:4}}>PORTFOLIO</span>
        </Link>

        <img alt='timeIcon' className="dayNightIcon" src={require("../../../assets/image/sunrise.png")}></img>
      </div>
    );
  }
}

export default Header;
