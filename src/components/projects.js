import React, { Component } from 'react'
import GitHub from 'react-icons/lib/fa/github'
import View from 'react-icons/lib/fa/laptop'


class Projects extends Component {
  render() {
    return (
          <div id="projects" className="section-projects">
            <div className="row container-fluid">
              <div className="col-md-3 col-sm-12 col-xs-12 projects-left">
                <h3>RECENT PROJECTS</h3>
              </div>
              <div className="col-md-7 col-sm-12 col-xs-12 projects-image-one">
                <div className="projects-one"></div>
              </div>
              <div className="col-md-2 col-sm-12 col-xs-12 projects-text">
                <h4>Readable</h4>
                    <p>Readable is a content sharing web app built with React/ Redux.
                    <br/> It is the final project for Udacity’s React Nanodegree. <br/>The app incorporates state management using Redux,
                    <br/> CRUD functionality using REST principles and React Router for link navigation. </p>
                    <a href="https://github.com/j-schuster/readable" target="blank"  rel="noopener noreferrer"><GitHub  className="icon-gh"/></a>
                    <a><View className="icon-gh"/></a>
              </div>
          </div>
          <div className="row container-fluid">
            <div className="col-md-3 col-sm-12 col-xs-12 projects-left">
          </div>
          <div className="col-md-7 col-sm-12 col-xs-12 projects-image-one">
            <div className="projects-two"></div>
          </div>
            <div className="col-md-2 col-sm-12 col-xs-12 projects-text">
               <h4>My Reads</h4>
                    <p>My Reads is book reading tracking application.
                    <br/> The user is able to search for books from a database and categorize them into shelves, <br/>
                     either Read, Currently reading or Want To Read.</p>
                     <a href="https://github.com/j-schuster/my-reads-bookshelf-app" rel="noopener noreferrer" target="_blank"><GitHub  className="icon-gh"/></a>
                     <a><View className="icon-gh"/></a>
            </div>
            </div>
            <div className="row container-fluid">
               <div className="col-md-3 projects-left">
            </div>
            <div className="col-md-7 projects-image-one">
                <div className="projects-three"></div>
            </div>
               <div className="col-md-2 projects-text">
                  <h4>Personal Website V2</h4>
                    <p>Second iteration of my personal website.
                     <br/>  Designed and developed with a conscious effort to maintain a balance between simplicity, 
                     <br/> sophistication and elegance.  </p>
                     <a href="https://github.com/j-schuster/portfolio-site" target="_blank"  rel="noopener noreferrer"><GitHub  className="icon-gh"/></a>
                     <a><View className="icon-gh"/></a>
                  </div>
              </div>
           </div>
     );
   }
}

export default Projects;