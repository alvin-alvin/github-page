import React, { Component } from 'react';
import './styles.css'
import { searchbarHelper, getSearchCategory } from '../../../helper/SearchbarHelper'
import { withRouter } from 'react-router';


class SearchBar extends Component {

  constructor(props) {
    super(props)
    this.onSearchClicked = this.onSearchClicked.bind(this);
    this.state = {
      keyword: '',
      changed:false,
    };

  }

  onSearchClicked() {
    let input = this.state.keyword
    // this.context.router.push('/search');
    this.props.history.push('/search/' + input)

  }

  onChangeText(text) {
    this.setState({
      changed: true,
      keyword: text
    })
  }

  handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      this.onSearchClicked()
    }
  }


  render() {
    let index = Math.floor(Math.random() * this.props.placeholder.length)
    return (
      <div className="SearchBar">
        <input placeholder={this.props.placeholder[index]}
          value={this.state.changed?this.state.keyword:this.props.text}
          onChange={(event) => this.onChangeText(event.target.value)}
          onKeyPress={this.handleKeyPress} />
        <div onClick={this.onSearchClicked} className="arrowRight">
          <img alt='arrow-right' className="arrowRightIcon" src={require("../../../assets/image/arrow-right.svg")}></img>
        </div>
      </div>
    );
  }
}

export default withRouter(SearchBar);
