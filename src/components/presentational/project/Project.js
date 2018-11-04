

import React, { Component } from 'react';
import './styles.css'
import SmallCategoryTag from '../SmallCategoryTag'

class Project extends Component {

  constructor(props){
    super(props)
    this.state={
      componentWidth: 0
    }
    this.myInput = React.createRef()
  }

  componentDidMount () {
    this.setState({componentWidth:this.myInput.current.offsetWidth})
  }

  handleClick(title) {
    alert(title)
  }

  render() {
    return (

      <div onClick={this.handleClick.bind(this,this.props.item.title)} className="carouselWrapper">
        <img ref={this.myInput} alt='' className="imageCarousel"></img>
        <span className="projectTitle">{this.props.item.title}</span>
        {/* <p className="projectDesc" style={{maxWidth:this.state.componentWidth}}>{this.props.item.desc}</p> */}
        <p className="projectDesc" >{this.props.item.desc}</p>
        <SmallCategoryTag category={'a'}/>
      <SmallCategoryTag category={'a'}/>
      </div>
    
    );
  }
}

export default Project;
