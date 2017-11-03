import React from 'react'
import { Link } from 'react-router-dom'
import GitHub from 'react-icons/lib/fa/github'
import View from 'react-icons/lib/fa/laptop'

function AddProjects() {

    const additional = [
        {
            id: 0,
            name: 'React Recipe App',
            notes: 'This is a simple recipe application built with React and SASS. A user can add recipes and store, edit, and delete them as needed.I strived to make clear distinctions between Container and UI Components and made use of local storage to store each recipe, and finished it up with a simple clean, easy to use design.', 
            technologies: ['html', 'css/sass', 'react'], 
            view: 'https://codepen.io/j-schuster/full/qPOMmO/',
            code: 'https://codepen.io/j-schuster/full/qPOMmO/',       
            tId: 'z'          
        },
         {
            id: 1,
            name: 'Simon Game',
            notes: 'Part of the advanced front-end projects for the Freecodecamp curriculum. This is a digital replica of the famous 80’s memory game called Simon. The game sets a sequence that the user must follow, as the game progresses the sequence becomes harder and harder. Unless the user fails within 13 rounds, he/ she wins. I chose to write it using Vanilla JavaScript specifically  to avoid using an external library like jQuery and made use of the Module Design Pattern to structure the application.',                     
            technologies: ['html', 'css', 'javascript'], 
            view: 'https://js-simone-game.herokuapp.com/',
            code: 'https://github.com/j-schuster/javascript-simon-game',       
            tId: 'a'          
        },
         {
            id: 2,
            name: 'Pomodoro Clock',
            notes: 'Part of the advanced front-end projects for the Freecodecamp curriculum.The pomodoro clock is a useful tool to manage work and rest intervals. The application allows the user to set a time period for a work sesion and the same for a break session, the app will then run until the user stops it. Once again I used Vanilla JavaScript to build in the functionality. The app makes use of encapsulation, I explored with Immediately Invoked Functions and using the this keyword.',                     
            technologies: ['html', 'css', 'javascript'], 
            view: 'https://js-pomodoro-clock.herokuapp.com/',
            code: 'https://github.com/j-schuster/pomodoro-clock',       
            tId: 'b'          
        },

         {
            id: 3,
            name: 'Tic Tac Toe',
            notes: 'A version of the popular game with one extra feature. I incorporated the famous MiniMax algorithm to make the game unbeatable.  The user can at most tie against the computer.  The algorithm allows the computer to see all possible configurations of the the future state of the game, each configuration returns a score and the computer plays the next move according to the highest score.  I used Vanilla JavaScript to build this game. ',                     
            technologies: ['html', 'css', 'javascript', 'jQuery'], 
            view: 'https://codepen.io/j-schuster/pen/brvGRg',
            code: 'https://github.com/j-schuster/js-tic-tac',       
            tId: 'c'          
        },

         {
            id: 4,
            name: 'JS Calculator',
            notes: 'Another one of the advanced front-end projects for Freecodecamp. It is a simple calculator that I built using Vanilla JavaScript. The application has all the functionality of a simple calculator  and returns the correct evaluations of any sequence of mathematical tasks. The app makes use of two kinds of memories to make this possible, current and stored. When the user inputs a sequence, it gets stored in the stored memory, this way a string of calculations can be accurately determined.',                     
            technologies: ['html', 'css', 'javascript'], 
            view: 'https://js-claculator.herokuapp.com/',
            code: 'https://github.com/j-schuster/js-calculator',       
            tId: 'd'          
        },

    ]

	return(
		    <div className="section-additional-projects">
            <div className="container">
                <div className="other-projects-header col-md-6">
                    <h3>OTHER PROJECTS</h3>
                </div>

                {additional.map((project) => (
                    <li key={project.id}> 
                         <div className="other-projects-info col-md-6">
                             <h3>{project.name}</h3>                
                                <Link to={project.view} target="_blank"><View className="icon-ap"/></Link>
                                <Link to={project.code} target="_blank"><GitHub className="icon-ap"/></Link> 
                           <p>{project.notes}</p>
                         {project.technologies.map((i) => (
                        <ul key={i}>
                         <li>{i}</li>
                         </ul>
                         ))}
                    </div>
                </li>
                ))}
            </div>
        </div>
		);
}

export default AddProjects;


