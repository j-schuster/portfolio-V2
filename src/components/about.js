import React from 'react'

function About() {
  return(
        <div id="about" className="section-about container-fluid">
          <div className="background">
            <div className="row background-text">
              <div className="col-md-4">
                 <h3>BACKGROUND</h3>
                  </div> 
              <div className="col-md-6">
                <p>For the the past 6 six years I’ve been performing with symphony orchestras across South Africa, USA and Europe. 
                   Outside of work I developed an obsession with technology, and got hooked on the idea of using technology to address problems.
                   After I found my first startup in Chicago, I eagerly started learning web development 
                   and within a rather short period of time after discovering JavaScript, I was in love.</p>
              
                <p>As a frontend developer, I use my keen eye for style and simplicity combined with technical understanding of the latest programming concepts to create web applications. I strive to create scalable, highly performant apps while providing an engaging, pixel perfect user experience. </p>
               
                <p>In my spare time I like learning about A.I, what startups around the world are doing and planning my next startup, software that will help psychologists in South Africa. Other than that you can find me hiking, traveling or playing with my cat Sutton.</p>

               </div>
              </div>  
           </div>
           <hr/>
          <div id="skills" className="skills container-fluid">
            <div className="row skills-text">
            <div className="col-md-4">
            <h3 className="skills-h3">SKILLS</h3>
            </div>
            
            <div className="row col-md-2 col-sm-6 col-xsm-6 technologies">
              <h3>LANGUAGES</h3>
              <li>JavaScript (es6)</li>
              <li>HTML5</li>
              <li>CSS3/SASS</li>
            </div>  

             <div className="row col-md-2 col-sm-6 col-xsm-6 technologies">
              <h3>FRAMEWORKS</h3>
              <li>React</li>
              <li>Redux</li>
              <li>Express</li>
              <li>jQuery</li>
            </div>

             <div className="row col-md-2 col-sm-6 col-xsm-6 technologies">
              <h3>TOOLS</h3>
              <li>Node</li>
              <li>Bash</li>
              <li>Git/ Github</li>
              <li>Chrome DevTools</li>
              <li>MongoDB</li>
            </div>  

             <div className="row col-md-2 col-sm-6 col-xsm-6 technologies">
              <h3>DESIGN</h3>
              <li>Sketch</li>
              <li>Prototyping</li>
              <li>User Testing</li>
              <li>Typography</li>
            </div>  
          </div>  
          </div>
        </div>
    );
}

export default About;