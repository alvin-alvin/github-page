import React, { Component } from 'react';
import Media from "react-media";
import './styles.css';

import Header from '../../presentational/header/Header'
import SearchBar from '../../presentational/searchbar/SearchBar'
import BaseComponent from '../../presentational/BaseComponent';

class Home extends BaseComponent {

  constructor(props) {
    super(props);
    this.state = {
      width: 0,
      height: 0,
      placeholder: []
    };
  }

  componentDidMount() {
    let temp = ["What are you doing on weekend", "Whats your latest project?", "How old are you?"]
    this.setState({ placeholder: temp })
  }


  render() {
    const styles = DarkTheme
    return (
      <div style={styles.CONTAINER}>

        <div style={{ alignSelf: 'flex-end' }}>
          <Header />
        </div>

        <div style={{ marginBottom: 16, marginTop: 64 }}>
          <h1 style={styles.nameText}>Alvin</h1>
          <h1 style={styles.nameText}>Tanurwijaya</h1>
        </div>

        <SearchBar placeholder={this.state.placeholder} />
        <span className="itsNestedIf">it’s not an AI, it’s a hypernested if else *wink*</span>
      </div>
    );
  }
}

export default Home;

export const DarkTheme={
  CONTAINER:{
    display:'flex',
    flex:1,
    flexDirection:'column',
  },
  nameText:{
    fontSize: 34,
    margin: 0,
    color: '#FFF'
  }
}

export const LightTheme={
  CONTAINER:{
    display:'flex',
    flex:1,
    flexDirection:'column',
  },
  nameText:{
    fontSize: 34,
    margin: 0,
    color: '#000'
  }
}
