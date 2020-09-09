import React from 'react'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import { Home, Main } from './components'
import ScrollToTop from './components/layout/ScrollToTop'
import RecipeLogin from './components/pages/subPages/RecipeLogin'

const App = () => {
    return (
        <Router>
          <ScrollToTop />
          <Switch>
            <Route path={['/portfolio', '/about', '/contact', '/motion', '/inthekitchen']} >
                <Main />
            </Route>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/example">
              <RecipeLogin />
            </Route>
          </Switch>
        </Router>
    );
}

export default App