import React, { Component } from 'react';
import './styles.css'
import { searchbarHelper, getSearchCategory } from '../../../helper/SearchbarHelper'
import { withRouter } from 'react-router'
import {getTheme} from '../../../helper/Theme'


class SearchBar extends Component {

  constructor(props) {
    super(props)
    this.onSearchClicked = this.onSearchClicked.bind(this);
    this.state = {
      keyword: '',
      changed: false,
    };

  }

  onSearchClicked() {
    let input = this.state.keyword
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
    const styles = getTheme()
    let index = Math.floor(Math.random() * this.props.placeholder.length)
    return (
      <div style={styles.SEARCHBAR_CONTAINER}>
        <input placeholder={this.props.placeholder[index]}
          style={styles.inputText}
          value={this.state.changed ? this.state.keyword : this.props.text}
          onChange={(event) => this.onChangeText(event.target.value)}
          onKeyPress={this.handleKeyPress} />
        <div onClick={this.onSearchClicked} style={{ display: 'flex', position: 'absolute', border: '1px solid #DBDBDB', width: 40, height: 40, borderRadius: 20, float: 'right', marginTop: 2, right: 16, background: '#fff', boxShadow: '0px 2px #c4c4c4' }}>
          <img alt='arrow-right' className="arrowRightIcon" src={require("../../../assets/image/arrow-right.svg")}></img>
        </div>
        {/* <input style={{h}}/> */}
      </div>
    );
  }
}

export default withRouter(SearchBar);