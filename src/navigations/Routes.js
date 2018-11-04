import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Home from '../components/containers/home/Home'
import Portfolio from '../components/containers/portfolio/Portfolio'
import PortfolioDetail from '../components/containers/portfolioDetail'
import SearchResult from '../components/containers/searchResult'

// The Main component renders one of the three provided
// Routes (provided that one matches). Both the /roster
// and /schedule routes will match any pathname that starts
// with /roster or /schedule. The / route will only match
// when the pathname is exactly the string "/"
const Routes = () => (
  <main>
    <Switch>
      <Route exact path='/' component={Home}/>
      <Route path='/portfolio' component={Portfolio}/>
      <Route path='/detail' component={PortfolioDetail}/>
      <Route path='/search/:category' component={SearchResult}/>
      <Route path='*' component={Home}/>
    </Switch>
  </main>
)

export default Routes
