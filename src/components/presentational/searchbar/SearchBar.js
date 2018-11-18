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
    const styles = DarkTheme
    let index = Math.floor(Math.random() * this.props.placeholder.length)
    return (
      <div style={{display:'flex',flexDirection:'row',justifyContent:'flex-between'}}>
      {/* <div style={{display:'flex'}} className="SearchBar"> */}
        <input placeholder={this.props.placeholder[index]}
        style={{display:'flex',flex:1,paddingTop:16,paddingBottom:16,paddingLeft:8,paddingRight:8,border:'1px solid #606060'}}
          value={this.state.changed ? this.state.keyword : this.props.text}
          onChange={(event) => this.onChangeText(event.target.value)}
          onKeyPress={this.handleKeyPress} />
        <div onClick={this.onSearchClicked} style={{display:'flex',position:'absolute',border:'1px solid #DBDBDB',width:40,height:40,borderRadius:20,float:'right',marginTop:2,right:16,background:'#fff',boxShadow:'0px 2px #c4c4c4'}}>
          <img alt='arrow-right' className="arrowRightIcon" src={require("../../../assets/image/arrow-right.svg")}></img>
        </div>
      </div>
    );
  }
}

export default withRouter(SearchBar);

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