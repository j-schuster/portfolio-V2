import React from 'react'
import { DB_CONFIG } from './config/config';
import 'firebase/database';
import firebase from 'firebase/app';
import "./index.css"

class Contact extends React.Component {
constructor(){
	super();

	this.app = firebase.initializeApp(DB_CONFIG);
    this.database = this.app.database().ref().child('DATA')

	this.state = {
    	userName	: '',
		userEmail	: '',
		userWebsite	: '',
		userMessage	: ''
	}
}

handleChange = (e) => {
	this.setState({ [e.target.name]: e.target.value })
}

handleSubmit = (e) => {
	e.preventDefault()
	const user = this.state
	this.database.push().set({ DATA: user })

	this.setState({
		userName	: '',
		userEmail	: '',
		userWebsite	: '',
		userMessage	: ''
	})
	
}

render(){
		return(
		<div>
		<div id="contact" className="contact">
			<h1 className="contact-me">Get in touch!</h1>
		
		 	
			   <div className="form-contact">
			      <form onSubmit={this.handleSubmit}>
			        <div className="form-group">
			            <label>Name</label>
			            <input type="text" 
			            	   value={this.state.userName} 
			            	   name="userName"	
			            	   onChange={this.handleChange} className="form-control"
			            	   />
			        </div>
			        <div className="form-group">
			            <label>Email address</label>
			            <input type="email" className="form-control" 
			            	   value={this.state.userEmail} 	
			            	   name="userEmail"
			            	   onChange={this.handleChange}
			            	   />
			        </div>
			        <div className="form-group">
			            <label>Website</label>
			            <input type="text" className="form-control" 
			            	   name="userWebsite"
			            	   value={this.state.userWebsite} 
			            	   onChange={this.handleChange}
			            	   />
			        </div>  
			        <div className="form-group">
			            <label>Message</label>
			            <textarea className="form-control" name="userMessage"
			            		  onChange={this.handleChange}
			            		  value={this.state.userMessage} 
			            		  rows="3"></textarea>
			        </div>
			        <button type="submit" className="btn btn-primary">Submit </button>
			      </form>
			    </div>
			     </div>
			    </div>    
			);
		
		}
	}

export default Contact;