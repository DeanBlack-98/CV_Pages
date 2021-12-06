import React, {Component} from 'react'
import {NavLink} from 'react-router-dom';

export default class Experince extends Component{
    render(){
        return(
            <div>
                <div className = "card">
                    <div className = "card-content">
                        <h6>
                            <strong>Employment History</strong>
                        </h6>
                        <div className = "row">
                            <div className = "col s12 m4 l4 xl4">
                                <p className = "teal year-exp white-text">
                                    Nov
                                    <strong> 2014</strong> - Jan 
                                    <strong> 2021</strong>
                                </p>
                            </div>
                            <div className = "col s12 m8 l8 xl8">
                                <blockquote className = "no-pad">
                                    <h6 className = "no-pad mt-bottom">
                                        <strong>Farm Assistant</strong>
                                    </h6>
                                    <p>
                                        <strong>Deon Swart, Moedwill , North-West </strong>
                                        <p>
                                            Since childhood, I have helped my father providing hunting expeditions and hospitality services to both local and foreign hunters. 
                                            I also worked on the family farm as a farm hand to support my father during the
                                            OVID-19 crisis. These responsibilities included supervision over the other farm hands.
                                        </p>
                                    </p>
                                </blockquote>
                            </div>
                            <div className = "col s12 m4 l4 xl4">
                                <p className = "teal year-exp white-text">
                                    Nov
                                    <strong> 2014</strong> - Dec 
                                    <strong> 2015</strong>
                                </p>
                            </div>
                            <div className = "col s12 m8 l8 xl8">
                                <blockquote className = "no-pad">
                                    <h6 className = "no-pad mt-bottom">
                                        <strong>Cashier</strong>
                                    </h6>
                                    <p>
                                        <strong>Sonja Swart, Rustenburg, North-West</strong>
                                        <p>
                                            I worked at a local supermarket as a cashier.
                                            My responsibility was to insure that all the money collected from the daily sales was accounted for.
                                        </p>
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