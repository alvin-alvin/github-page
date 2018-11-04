import React, { Component } from 'react';
import styles from './styles.js';
import SearchBar from '../../presentational/searchbar/SearchBar'
import SearchCard from '../../presentational/searchCard'
import { withRouter } from 'react-router';
import { getSearchCategory } from '../../../helper/SearchbarHelper'

class SearchResult extends Component {

    constructor(props) {
        super(props);
        this.state = {
            category: '',
            search:'',
        };
    }

    componentDidUpdate(prevProps) {
        if (this.props.location !== prevProps.location) {
            this.onRouteChanged();
        }
    }

    componentDidMount() {
        const search = this.props.location.pathname.replace('/search/', '')
        this.setState({search})
        if (getSearchCategory(search)) {
            this.setState({ category: getSearchCategory(search).toLowerCase() })
        } else {
            this.setState({ category: '' })
        }
    }

    onRouteChanged() {
        const search = this.props.location.pathname.replace('/search/', '')
        this.setState({search})
        if (getSearchCategory(search)) {
            this.setState({ category: getSearchCategory(search).toLowerCase() })
        } else {
            this.setState({ category: '' })
        }

    }

    renderResult(){
        if(this.state.category){
            return(
                <SearchCard title={this.state.category} />
            )
        }else if(this.state.search && !this.state.category){
            return(
                <div style={{marginTop:16, padding:32, border:'1px dotted #606060'}}>
                        <span>Penelusuran Anda - </span>
                        <span style={{fontWeight:'bold'}}>{this.state.search}</span>
                        <span> - tidak cocok dengan dokumen apa pun.</span>
                        <br/>
                        <br/>
                        <span>Saran : </span>
                        <br/>
                        <span>   - Pastikan semua kata dieja dengan benar.</span>
                        <br/>
                        <span>   - Coba kata kunci yang lain.</span>
                        <br/>
                        <span>   - Coba kata kunci yang lebih umum.</span>
                    </div>
            )
        }else{
            return null
        }
    }


    render() {
        return (
            <div style={styles.wrapper}>
                <span style={styles.topLeftName}>Alvin</span>
                <br />
                <span style={styles.topLeftName}>Tanurwijaya</span>
                <br />
                <br />
                <br />
                <div style={styles.searchBarWrapper}>
                    <SearchBar text={this.state.search} placeholder={'placeholder'} />
                </div >

                {this.renderResult()}


            </div>
        );
    }
}

export default withRouter(SearchResult)
