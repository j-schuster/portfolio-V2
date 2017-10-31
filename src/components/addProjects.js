import React from 'react'
import GitHub from 'react-icons/lib/fa/github'
import View from 'react-icons/lib/fa/laptop'

function AddProjects() {
	return(
		    <div className="section-additional-projects">
            <div className="container">
                <div className="other-projects-header col-md-6">
                    <h3>OTHER PROJECTS</h3>
                </div>
                <div className="other-projects-info col-md-6">
                    <h3>React Recipe App</h3>
                
                    <a href="https://codepen.io/j-schuster/full/qPOMmO/" target="_blank"><View className="icon-ap"/></a>
                    <p>This is a simple recipe application built with React and SASS.
                     A user can add recipes and store/ edit/ delete them as needed.
                      I strived to make clear distinctions between Container and UI 
                      Components and made use of local storage to store each recipe, 
                      and finished it up with a simple clean, easy to use design. 
                     </p>
                     <li className="technology">html</li>
                     <li className="technology">css/sass</li>
                     <li className="technology">react.js</li>
                </div>




                  <div className="other-projects-header col-md-6">
                </div>
                <div className="other-projects-info col-md-6">
                    <h3>Simon Game</h3>
                    <a href="https://github.com/j-schuster/javascript-simon-game" target="_blank"><GitHub className="icon-ap"/></a>
                    <a href="https://js-simone-game.herokuapp.com/" target="_blank"><View className="icon-ap"/></a>
                    <p>Part of the advanced front-end projects for the Freecodecamp curriculum.
                     This is a digital replica of the famous 80’s memory game called Simon. 
                     The game sets a sequence that the user must follow, as the game progresses the sequence becomes harder and harder.
                      Unless the user fails within 13 rounds, he/ she wins. I chose to write it using Vanilla JavaScript specifically 
                      to avoid using an external library like jQuery and made use of the Module Design Pattern to structure the application.
                     </p>
                     <li className="technology">html</li>
                     <li className="technology">css</li>
                     <li className="technology">javascript</li>
                </div>


                  <div className="other-projects-header col-md-6">
                   
                </div>
                <div className="other-projects-info col-md-6">
                    <h3>Pomodoro Clock</h3>
                    <a href="https://github.com/j-schuster/pomodoro-clock" target="_blank"><GitHub className="icon-ap"/></a>
                    <a href="https://js-pomodoro-clock.herokuapp.com/" target="_blank"><View className="icon-ap"/></a>
                    <p>Part of the advanced front-end projects for the Freecodecamp curriculum.
                     The pomodoro clock is a useful tool to manage work and rest intervals.
                      The application allows the user to set a time period for a work sesion and the same for a break session, 
                      the app will then run until the user stops it. Once again I used Vanilla JavaScript to build in the functionality. 
                      The app makes use of encapsulation, I explored with Immediately Invoked Functions and using the this keyword, 
                      call and apply to bind functions. 
                     </p>
                     <li className="technology">html</li>
                     <li className="technology">css</li>
                     <li className="technology">javascript</li>
                </div>

                  <div className="other-projects-header col-md-6">
             
                </div>
                <div className="other-projects-info col-md-6">
                    <h3>Tic Tac Toe</h3>
                    <a href="https://github.com/j-schuster/js-tic-tac" target="_blank"><GitHub className="icon-ap"/></a>
                    <a href="https://codepen.io/j-schuster/pen/brvGRg" target="_blank"><View className="icon-ap"/></a>
                    <p>A version of the popular game with one extra feature.
                     I incorporated the famous MiniMax algorithm to make the game unbeatable. 
                     The user can at most tie against the computer. 
                     The algorithm allows the computer to see all possible configurations of the the future state of the game
                     , each configuration returns a score and the computer plays the next move according to the highest score. 
                     I used Vanilla JavaScript to build this game. 
                     </p>
                     <li className="technology">html</li>
                     <li className="technology">css</li>
                     <li className="technology">jQuery</li>
                     <li className="technology">javascript</li>
                </div>

                  <div className="other-projects-header col-md-6">
                    
                </div>
                <div className="other-projects-info col-md-6">
                    <h3>JAVASCRIPT CALCULATOR</h3>
                    <a href="https://github.com/j-schuster/js-calculator" target="_blank"><GitHub className="icon-ap"/></a>
                    <a href="https://js-claculator.herokuapp.com/" target="_blank"><View className="icon-ap"/></a>
                    <p>Another one of the advanced front-end projects for Freecodecamp. 
                    It is a simple calculator that I built using Vanilla JavaScript.
                     The application has all the functionality of a simple calculator 
                     and returns the correct evaluations of any sequence of mathematical tasks. 
                     The app makes use of two kinds of memories to make this possible, current and stored.
                      When the user inputs a sequence, it gets stored in the stored memory,
                       this way a string of calculations can be accurately determined.
                     </p>
                     <li className="technology">html</li>
                     <li className="technology">css</li>
                     <li className="technology">javascript</li>
                </div>
            </div>
        </div>
		);
}

export default AddProjects;