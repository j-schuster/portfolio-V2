import React, { Component } from 'react';
import { Route } from 'react-router-dom'
import './App.css'
import Hero from './components/hero'
import About from './components/about'
import Projects from './components/projects'
import AddProjects from './components/addProjects'
import Contact from './Contact'
import Footer from './Footer'


class App extends Component {
  render() {
    return (
        <Route path="/" render={() => (
            <div>
              <Hero/>
              <About/>
              <Projects/>
              <AddProjects/>
              <Contact/>
              <Footer/>
            </div>
        )}/>
    );
  }
}

export default App;
