import React from 'react'
import { Link } from 'react-router-dom'
import GitHub from 'react-icons/lib/fa/github'
import View from 'react-icons/lib/fa/laptop'
import readable from '../photo/mac5.png'
import myReads from '../photo/mac.png'
import portfolio from '../photo/mac9.png'


function Projects() {

  const projects = [
    {
      id: 0,
      title: 'RECENT PROJECTS',
      name: 'Readable',
      image: portfolio,
      view: 'https://github.com/j-schuster/readable',
      code: 'https://github.com/j-schuster/readable',
      notes: 'Readable is a content sharing web app built with React/ Redux. It is the final project for Udacity’s React Nanodegree. The app incorporates state management using Redux, CRUD functionality using REST principles and React Router for link navigation.', 
    },
       {
      id: 1,
      title: '\u200B',
      name: 'My Reads',
      image: portfolio,
      view: 'https://github.com/j-schuster/my-reads-bookshelf-app',
      code: 'https://github.com/j-schuster/my-reads-bookshelf-app',
      notes: 'My Reads is book reading tracking application. The user is able to search for books from a database and categorize them into shelves, either Read, Currently reading or Want To Read.', 
    },
     {
      id: 2,
      title: '\u200B',
      name: 'Personal Website V2',
      image: portfolio,
      view: 'www.jschuster.me',
      code: 'https://github.com/j-schuster/portfolio-site',
      notes: 'Designed and developed with a conscious effort to maintain a balance between simplicity, sophistication and elegance.',
    },
  ]

  
    return (
          <div id="projects" className="section-projects">
            <div className="row container-fluid">      
                {projects.map((project) => (
                  <li key={project.id}>
                    <div className="col-md-3 col-sm-12 col-xs-12 projects-left"><h3>{project.title}</h3></div>
                      <div className="col-md-7 col-sm-12 col-xs-12 projects-image-one">
                        <div className="projects-one" 
                         style={{ 
                                  height: '30em',
                                  backgroundImage: `url(${project.image})`,
                                  backgroundSize: 'contain',
                                  backgroundRepeat: 'no-repeat',
                                  margin: '0 auto'
                               }}></div>
                         </div>
                      <div className="col-md-2 col-sm-12 col-xs-12 projects-text">
                        <h4>{project.name}</h4>
                           <p>{project.notes}</p>  
                            <Link to={project.code} target="_blank"><GitHub  className="icon-gh"/></Link>
                          <Link to={project.view} target="_blank"><View className="icon-gh"/></Link>
                      </div>
                  </li>
                  ))}
             </div>
          </div>
     );
   
}

export default Projects;


/*
 <div className="col-md-3 col-sm-12 col-xs-12 projects-left">
                <h3>RECENT PROJECTS</h3>
               </div>




                <div className="row container-fluid">
             
            <div className="col-md-3 col-sm-12 col-xs-12 projects-left row"></div>

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
           <div className="col-md-3 col-sm-12 col-xs-12 projects-left row"></div>
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
             <div className="col-md-3 col-sm-12 col-xs-12 projects-left row"></div>
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
*/