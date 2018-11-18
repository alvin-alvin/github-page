import React, { Component } from 'react';
import styles from './styles.js';
import SearchBar from '../../presentational/searchbar/SearchBar'
import SearchCard from '../../presentational/searchCard'
import Header from '../../presentational/header/Header'
import { withRouter } from 'react-router';
import { getSearchCategory } from '../../../helper/SearchbarHelper'

class SearchResult extends Component {

    constructor(props) {
        super(props);
        this.state = {
            category: '',
            search: '',
        };
    }

    componentDidUpdate(prevProps) {
        if (this.props.location !== prevProps.location) {
            this.onRouteChanged();
        }
    }

    componentDidMount() {
        const search = this.props.location.pathname.replace('/search/', '')
        this.setState({ search })
        if (getSearchCategory(search)) {
            this.setState({ category: getSearchCategory(search).toLowerCase() })
        } else {
            this.setState({ category: '' })
        }
    }

    onRouteChanged() {
        const search = this.props.location.pathname.replace('/search/', '')
        this.setState({ search })
        if (getSearchCategory(search)) {
            this.setState({ category: getSearchCategory(search).toLowerCase() })
        } else {
            this.setState({ category: '' })
        }

    }

    renderResult() {
        if (this.state.category) {
            return (
                <SearchCard title={this.state.category} />
            )
        } else if (this.state.search && !this.state.category) {
            return (
                <div style={{ marginTop: 16, padding: 32, border: '1px dotted #606060' }}>
                    <span style={{fontSize:14}}>Penelusuran Anda - </span>
                    <span style={{fontSize:14, fontWeight:'bold'}}>{this.state.search}</span>
                    <span style={{fontSize:14}}> - tidak cocok dengan dokumen apa pun.</span>
                    <br />
                    <br />
                    <span style={{fontSize:14}}>Saran : </span>
                    <br />
                    <span style={{fontSize:14}}>   - Pastikan semua kata dieja dengan benar.</span>
                    <br />
                    <span style={{fontSize:14}}>   - Coba kata kunci yang lain.</span>
                    <br />
                    <span style={{fontSize:14}}>   - Coba kata kunci yang lebih umum.</span>
                </div>
            )
        } else {
            return null
        }
    }


    render() {
        return (
            <div style={{ display: 'flex', flex: 1, flexDirection: 'column' }}>
                <div style={{ alignSelf: 'flex-end' }}>
                    <Header />
                </div>

                <div style={{ marginBottom: 16 }}>
                    <h1 style={{ fontSize: 34, margin: 0 }}>Alvin</h1>
                    <h1 style={{ fontSize: 34, margin: 0 }}>Tanurwijaya</h1>
                </div>

                <SearchBar text={this.state.search} placeholder={''} />

                {this.renderResult()}


            </div>
        );
    }
}

export default withRouter(SearchResult)
