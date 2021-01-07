import React, { Component } from 'react';
import './App.css';
import Sidebar from './components/sidebar';
import Introduction from './components/introduction';
import About from './components/about';
import Services from './components/services';
import Skills from './components/skills';
//import Education from './components/education';
import Experience from './components/experience';
import Contact from './components/contact';
import Projects from './components/projects';

class App extends Component {
  render() {
    return (

      <div id="colorlib-page">

        <div id="container-wrap">

          <Sidebar></Sidebar>

          <div id="colorlib-main">

            <Introduction></Introduction>
            <About></About>
            <Services></Services>
            <Skills></Skills>
            {/* <Education></Education> */}
            <Experience></Experience>
            <Projects></Projects>
            <Contact></Contact>
          </div>

        </div>
        
      </div>

    );
  }
}

export default App;
