import React, { Component } from 'react'

export default class Sidebar extends Component {
  render() {
    return (
      <div>
        <div>
          <nav href="#navbar" className="js-colorlib-nav-toggle colorlib-nav-toggle" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar"><i /></nav>
          <aside id="colorlib-aside" className="border js-fullheight">
            <div className="text-center">
              <div className="author-img" style={{ backgroundImage: 'url(images/about.jpg)' }} />
              <h1 id="colorlib-logo"><a href="index.html">Aung Kyaw Khaing</a></h1>
              <span className="position">
                <a href="#position">Dev </a>
                in myanmar
              </span>
              {/* <span className="email"><i className="icon-mail"></i> @gmail.com</span> */}
            </div>

            <div id="colorlib-main-menu" role="navigation" className="navbar">
              <div id="navbar" className="collapse">
                  <ul>
                  <li className="active"><a href="#home" data-nav-section="home">Introduction</a></li>
                  <li><a href="#about" data-nav-section="about">About</a></li>
                  <li><a href="#services" data-nav-section="services">Services</a></li>
                  <li><a href="#skills" data-nav-section="skills">Skills</a></li>
                  <li><a href="#education" data-nav-section="education">Education</a></li>
                  <li><a href="#experience" data-nav-section="experience">Experience</a></li>
                  <li><a href="#contact" data-nav-section="contact">Contact</a></li>
                  </ul>
              </div>
            </div>
            
            
            
            {/* <nav id="colorlib-main-menu">
              <ul>
                <li><a href="#position" target="_blank" rel="noopener noreferrer"><i className="icon-facebook2" /></a></li>
                <li><a href="#position" target="_blank" rel="noopener noreferrer"><i className="icon-twitter2" /></a></li>
                <li><a href="#position" target="_blank" rel="noopener noreferrer"><i className="icon-instagram" /></a></li>
                <li><a href="#position" target="_blank" rel="noopener noreferrer"><i className="icon-linkedin2" /></a></li>
                <li><a href="#position" target="_blank" rel="noopener noreferrer"><i className="icon-github"></i></a></li>
                <li><a href="#position" target="_blank" rel="noopener noreferrer"><i className="icon-blogger2"></i></a></li>
              </ul>
            </nav> */}

            <div className="colorlib-footer">
              <p>
              <small>
                Copyright {(new Date().getFullYear())}&nbsp;AK //
                 All rights reserved // <br></br>
                  Made with <i className="icon-heart" aria-hidden="true" /> and <i className="icon-coffee" aria-hidden="true"></i>
                  <br></br>
                  Thank <a href="https://colorlib.com" target="_blank" rel="noopener noreferrer">Colorlib</a> for inspiration
              </small>
              </p>
            </div>

          </aside>
        </div>
      </div>
    )
  }
}
