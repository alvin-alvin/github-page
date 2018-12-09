import React, { Component } from 'react';
import Project from '../../presentational/project/Project'
import './styles.css';

class Portfolio extends Component {

  constructor(props) {
    super(props);
    this.portfolios = [{
      title: 'Mobile1',
      desc: 'Desc mobile1. Desc mobile1. Desc mobile1. Desc mobile1. Desc mobile1. Desc mobile1. Desc mobile1. Desc mobile1.',
      category: ['Android']
    }, {
      title: 'Mobile2',
      desc: 'Desc mobile2',
      category: ['iOS']
    }, {
      title: 'Web1',
      desc: 'Desc website 1 dibikin panjang buat tes overlap spannya.',
      category: ['Design']
    }
    ]
      this.category = ["All", "Android", "iOS", "Design"]
      this.state = {
        selectedCategory: '',
        filteredPortfolios: this.portfolios
      };
  }

  componentDidMount() {


  }

  navigateToPortfolio() {

  }

  categoryClicked(item) {
    if (item === "All") {
      this.setState({ selectedCategory: item, filteredPortfolios: this.portfolios })
    } else {
      const temp = []
      this.portfolios.map((portfolio, index) => {
        if (portfolio.category.includes(item)) {
          temp.push(portfolio)
        }
      }
      );
      this.setState({ selectedCategory: item, filteredPortfolios: temp })
    }


  }

  render() {
    const tagNormalStyle = { backgroundColor: '#DBDBDB', paddingTop: 4, paddingBottom: 2, paddingLeft: 16, paddingRight: 16, display: 'inline', border: '1px solid "#DBDBDB"', borderRadius: 16, marginRight: 8 }
    const tagSelectedStyle = { backgroundColor: '#000', paddingTop: 4, paddingBottom: 2, paddingLeft: 16, paddingRight: 16, display: 'inline', border: '1px solid "#DBDBDB"', borderRadius: 16, marginRight: 8 }
    const portfolios = this.state.filteredPortfolios.map((item, index) =>
      <Project key={index} item={item} />
    );

    const categoryTags = this.category.map((item, index) =>
      <div onClick={() => this.categoryClicked(item)} key={index} style={this.state.selectedCategory === item ? tagSelectedStyle : tagNormalStyle}>
        <span style={{ fontSize: 16, color: 'white' }}>{item}</span>
      </div>
    );

    return (
      <div className="Portfolio">
        <h1 className="textLarge" style={{ marginLeft: 32, marginTop: 80, fontSize: 24 }}>ALVIN TANURWIJAYA</h1>
        <div className="categoryWrapper" style={{ marginLeft: 32, marginTop: 16 }}>
          {categoryTags}

        </div>

        <div className="carousel">
          {portfolios}
        </div>





      </div>
    );
  }
}

export default Portfolio;
