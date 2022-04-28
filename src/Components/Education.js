import React, {Component} from 'react'
import {NavLink} from 'react-router-dom';

export default class Education extends Component{
    render(){
        return(
            <div>
                <div className = "card">
                    <div className = "card-content">
                        <h6>
                            <strong>Education</strong>
                        </h6>
                        <div className = "row">
                            <div className = "col s12 m4 l4 xl4">
                                <p className = "teal year-exp white-text">
                                    <strong>Jan 2018 to Dec 2021</strong>
                                </p>
                            </div>
                            <div className = "col s12 m8 l8 xl8">
                                <blockquote className = "no-pad">
                                    <h6 className = "no-pad mt-bottom">
                                        <strong>Bachelor of Science: Information Technology,</strong>
                                        <p>North-West University - North-West South Africa</p>
                                    </h6>
                                    <p>
                                        Final Year Marks:
                                        <p className = "white-text"> Strong</p>
                                        <p>Database: 61%,</p>
                                        <p>Decision Support Systems 1: 65%,</p>
                                        <p>Computer networks: 69%,</p>
                                        <p>Advance Databases: 63%,</p>
                                        <p>Operating Systems: 70%,</p>
                                        <p>Artificial Intelligence: 66%,</p>
                                        <p>Decision Support Systems 2: 63%</p>
                                        <p>IT Developments: 64%</p>
                                    </p>
                                </blockquote>
                            </div>
                        </div>
                        <div className = "row">
                            <div className = "col s12 m4 l4 xl4">
                                <p className = "teal year-exp white-text">
                                    <strong>2012 - 2016</strong>
                                </p>
                            </div>
                            <div className = "col s12 m8 l8 xl8">
                                <blockquote className = "no-pad">
                                    <h6 className = "no-pad mt-bottom">
                                        <strong>Matric Certificate</strong>
                                    </h6>
                                    <p>
                                        Results:
                                        <p className = "white-text"> Strong</p>
                                        <p>Afrikaan: 63%,</p>
                                        <p>English: 70%,</p>
                                        <p>Math: 72%,</p>
                                        <p>Science: 58%,</p>
                                        <p>Accounting: 79%,</p>
                                        <p>Life Orientation: 83%,</p>
                                        <p>Engeneur Graphic Design: 72%</p>
                                    </p>
                                </blockquote>
                            </div>
                        </div>
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