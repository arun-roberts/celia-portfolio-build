import React from 'react'
import { Switch, Route } from "react-router-dom"
import { Header, Nav, Footer, Portfolio, About, Contact, Motion, InTheKitchen } from '../index'
import '../../styling/Main.css'

const Main = () => {
    return (
        <div className='site'>
            <Header />
            <Nav />
            <div className="site-container">
                <Switch>
                    <Route path="/portfolio" children={<Portfolio />} />
                    <Route path="/motion" children={<Motion />} />
                    <Route path="/inthekitchen" children={<InTheKitchen />} />
                    <Route path="/about" children={<About />} />
                    <Route path="/contact" children={<Contact />} />
                </Switch>
            </div>    
            <Footer />
        </div>
    );
}

export default Main