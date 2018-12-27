import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import { getTheme } from '../../../helper/Theme'

class Header extends Component {

  constructor(props) {
    super(props);
    this.state = {
      isModalVisible: false
    };
  }

  navigateToPortfolio() {
    // this.context.router.push('/portfolio');
  }

  showMoreMenu() {
    this.setState((prevState) => ({
      isModalVisible: !prevState.isModalVisible
    }))
  }

  render() {
    const styles = getTheme()
    return (
      <div style={{ display: 'flex', alignItems: 'center', alignSelf: 'start' }}>
        {/* <img onClick={() => this.showMoreMenu()} alt='timeIcon' style={{ marginRight: 16 }} src={require("../../../assets/image/sunrise.png")}></img> */}
        {/* <Link style={{ textDecoration: 'none', color: 'black' }} to='/portfolio'>
          <span onClick={() => this.navigateToPortfolio()} style={styles.DEFAULT_TEXT_COLOR}>PORTFOLIO</span>
        </Link> */}

        {/* <img alt='timeIcon' className="dayNightIcon" src={require("../../../assets/image/sunrise.png")}></img> */}

        {this.state.isModalVisible &&
        <div style={{display:'flex',background:'white',flex:1}}>
        <div style={{ display: 'flex', position: 'absolute', top: 56, right: 0, height: 'auto', width: 'auto', maxWidth: 300, background: 'white', flexWrap: 'wrap',boxShadow:'0px 2px #c4c4c4' }}>

        </div>
        </div>
        }
      </div>
    );
  }
}

export default Header;
