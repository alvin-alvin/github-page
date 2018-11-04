import React, { Component } from 'react';

class PortfolioDetail extends Component {

  constructor(props) {
    super(props);
    this.state = {
      width: 0,
      height: 0
    };
    this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
  }

  componentDidMount() {


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

    return (
      <div className="PortfolioDetail">
        <img style={{ display:'absolute',width: 100, height: 100, background: '#000' }}></img>
        <img style={{ display:'absolute',margin: -16, background: '#FF8989', width: this.state.width, height: this.state.width }}></img>
      </div>
    );
  }
}

export default PortfolioDetail;
