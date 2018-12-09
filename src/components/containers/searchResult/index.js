import React, { Component } from 'react';
import SearchBar from '../../presentational/searchbar/SearchBar'
import SearchCard from '../../presentational/searchCard'
import Header from '../../presentational/header/Header'
import { withRouter } from 'react-router';
import { getSearchCategory } from '../../../helper/SearchbarHelper'
import {getTheme} from '../../../helper/Theme'

class SearchResult extends Component {

    constructor(props) {
        super(props);
        this.style = null
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
        this.style = getTheme()
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
            let styles = getTheme()
            return (
                <div style={this.style.SEARCH_BORDER_NOT_FOUND}>
                    <span style={styles.SEARCH_TEXT_NOT_FOUND}>Penelusuran Anda - </span>
                    <span style={styles.SEARCH_TEXT_BOLD_NOT_FOUND}>{this.state.search}</span>
                    <span style={styles.SEARCH_TEXT_NOT_FOUND}> - tidak cocok dengan dokumen apa pun.</span>
                    <br />
                    <br />
                    <span style={styles.SEARCH_TEXT_NOT_FOUND}>Saran : </span>
                    <br />
                    <span style={styles.SEARCH_TEXT_NOT_FOUND}>   - Pastikan semua kata dieja dengan benar.</span>
                    <br />
                    <span style={styles.SEARCH_TEXT_NOT_FOUND}>   - Coba kata kunci yang lain.</span>
                    <br />
                    <span style={styles.SEARCH_TEXT_NOT_FOUND}>   - Coba kata kunci yang lebih umum.</span>
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
                    <h1 style={getTheme().nameText}>Alvin</h1>
                    <h1 style={getTheme().nameText}>Tanurwijaya</h1>
                </div>

                <SearchBar text={this.state.search} placeholder={''} />

                {this.renderResult()}


            </div>
        );
    }
}

export default withRouter(SearchResult)
