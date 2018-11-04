import React, { Component } from 'react';

class SmallCategoryTag extends Component {
  render() {

    return (
      <div style={{ backgroundColor: '#DBDBDB', paddingTop: 4, paddingBottom: 4, paddingLeft: 16, paddingRight: 16, display: 'inline', border: '1px solid "#DBDBDB"', borderRadius: 16, marginRight: 8 }} className="SmallCategoryTag">
        <span style={{ fontSize: 14, color: 'white' }}>{this.props.category}</span>
      </div>
    );
  }
}

export default SmallCategoryTag;
