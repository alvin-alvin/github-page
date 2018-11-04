import React, { Component } from 'react';
import './styles.css';

import Header from '../../presentational/header/Header'
import SearchBar from '../../presentational/searchbar/SearchBar'

class Home extends Component {

  constructor(props) {
    super(props);
    this.state = {
      width: 0,
      height: 0,
      placeholder: []
    };
  }

  componentDidMount() {
    window.addEventListener('resize', this.updateWindowDimensions);
    let temp = ["What are you doing on weekend", "Whats your latest project?", "How old are you?"]
    this.setState({ placeholder: temp })
  }


  render() {
    return (
      <div className="Home">
        <h1 className="textLarge" style={{ marginTop: 80 }}>Alvin</h1>
        <h1 className="textLarge" style={{ marginBottom: 30 }}>Tanurwijaya</h1>
        <SearchBar placeholder={this.state.placeholder} />
        <span className="itsNestedIf">it’s not an AI, it’s a hypernested if else *wink*</span>
      </div >
    );
  }
}

export default Home;
