import React from 'react'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import Home from './components/pages/Home'
import Main from './Main'
import ScrollToTop from './components/layout/ScrollToTop'

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
          </Switch>
        </Router>
    );
}

export default App