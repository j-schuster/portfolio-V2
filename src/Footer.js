import React from 'react'
import Medium from 'react-icons/lib/fa/medium'
import GitHub from 'react-icons/lib/fa/github'
import Insta from 'react-icons/lib/fa/instagram'
import LinkedIn from 'react-icons/lib/fa/linkedin'

import "./index.css"

function Footer() {

	return(

	 <div className="footer-holder">
		  <div className="footer">
		    <div className="container-fluid">
		    <div className="row">
		    	  <div className="si-footer">
              		 <div className="si-footer-icon"><a href="https://www.linkedin.com/in/johann-schuster-769528b2/" target="_blank" rel="noopener noreferrer"><LinkedIn/></a></div>
             		 <div className="si-footer-icon"><a href="https://github.com/j-schuster" target="_blank" rel="noopener noreferrer"><GitHub/></a></div>
             		 <div className="si-footer-icon"><a href="https://www.instagram.com/schussbass/" target="_blank" rel="noopener noreferrer"><Insta/></a></div>
             		 <div className="si-footer-icon"><a href="https://medium.com/@schuster.bass" target="_blank" rel="noopener noreferrer"><Medium/></a></div>
             	   </div>	 
		    </div>
		      <div className="row">
		        <div className="info">
		          <ul>
		             <li><a href="#home"><h4>Home</h4></a></li>
		             <li><a href="#about"><h4>About</h4></a></li>
		             <li><a href="#projects"><h4>Projects</h4></a></li>
		             <li><a href="#contact"><h4>Contact</h4></a></li>
		          </ul>
		         </div>            		   
		          </div>

		          
		     
		    </div>
		    <p>Johann Schuster 2017 | All Rights Reserved</p>
		  </div>
		  </div>
	
		);
}

export default Footer;