import React from 'react'


function Hero() {
  return(
        <div id="home" className="section-hero">
            
           <nav className="navbar navbar-default">
  <div className="container-fluid">
    <div className="navbar-header">
      <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="myNavbar">
        <span className="icon-bar"></span>
        <span className="icon-bar"></span>
        <span className="icon-bar"></span>                        
      </button>
      <a className="navbar-brand" href="#">Johann Schuster</a>
    </div>
    <div className="collapse navbar-collapse" id="myNavbar">
      <ul className="nav navbar-nav navbar-right">
        <li><a href="#"><span></span> About</a></li>
        <li><a href="#"><span></span> Projects</a></li>
        <li><a href="#"><span></span> Contact</a></li>
      </ul>
    </div>
  </div>
</nav>  


          <div className="headshot"></div>
            <h3 className="header">Front End Web Developer</h3>
            <div className="container">
            <span className="header-text">I'm a design oriented front end developer that brings life to great ideas with high-performant JavaScript code that creates unique user experiences.
            </span>
             </div>
            <div className="action-buttons">
              <button className="action-button" ><a href="#projects" >Projects</a></button>
              <button className="action-button" ><a href="#skills" >Skills</a></button>
              <button className="action-button" ><a href="https://medium.com/@schuster.bass" target="_blank">Articles</a></button>
            </div>
            <div className="social-icons">
              <div className="social-icon"></div>
              <div className="social-icon"></div>
              <div className="social-icon"></div>
            </div>
        </div>
    );
}

export default Hero;