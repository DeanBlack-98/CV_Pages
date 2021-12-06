
import React, {Component} from 'react'
import {NavLink} from 'react-router-dom';

export default class Skills extends Component{
    render(){
        return(
            <div>
                <div className = "card">
                    <div className = "card-content">
                        <h6>
                            <strong>Overview of Skills</strong>
                        </h6>
                        <div classname = "row mt-top">
                            <div className = "col s6">
                                <p>Java</p>
                                <div class="progress red">
                                    <div class="determinate blue" style={{width: "70%"}}></div>
                                </div>
                            </div>
                            <div className = "col s6">
                                <p>C++</p>
                                <div class="progress red">
                                    <div class="determinate blue" style={{width: "70%"}}></div>
                                </div>
                            </div>
                            <div className = "col s6">
                                <p>C#</p>
                                <div class="progress red">
                                    <div class="determinate blue" style={{width: "80%"}}></div>
                                </div>
                            </div>
                            <div className = "col s6">
                                <p>Python</p>
                                <div class="progress red">
                                    <div class="determinate blue" style={{width: "60%"}}></div>
                                </div>
                            </div>
                            <div className = "col s6">
                                <p>React</p>
                                <div class="progress red">
                                    <div class="determinate blue" style={{width: "50%"}}></div>
                                </div>
                            </div>
                            <div className = "col s6">
                                <p>SQL</p>
                                <div class="progress red">
                                    <div class="determinate blue" style={{width: "70%"}}></div>
                                </div>
                            </div>
                        </div>
                        <p className = "white-text"> Hello World </p>
                        <div>
                            <NavLink to = "/">
                                <i>Home</i>
                            </NavLink>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}