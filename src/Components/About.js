import React, {Component} from 'react'
import {NavLink} from 'react-router-dom';

export default class About extends Component{
    render(){
        return(
            <div>
                <div className = "card">
                    <div className = "card-content">
                        <h6 className = "mt-bottom">
                            <strong>ABOUT ME</strong>
                        </h6>
                        <p className ="grey-text">
                            I am a well-presented, well-spoken, and hard-working person. 
                            I am good natured and like to render assistance wherever needed.
                            Although I am a good team worker, I can also operate independently.
                            I would welcome the opportunity to find a position where I could further develop myself through hard work. 
                            I would like a chance to show a prospective employer that I can make a positive contribution to any company.
                        </p>
                    </div>
                    <div className = "card-action">
                        <h6><strong>PERSONAL INFO</strong></h6>
                        <div className = "row mt">
                            <div className = "col s12 m6 l6 xl6">
                                <p><strong>Address: </strong>Potchefstroom, Nort-West</p>
                                <p><strong>Contact Number: </strong>081 409 4850</p>
                                <p><strong>Email: </strong>dswart54@yahoo.com</p>
                            </div>
                            <div className = "s12 m6 l6 xl6">
                                <p><strong>Main Language: </strong>Afrikaans</p>
                                <p><strong>Second Language: </strong>English</p>
                            </div>
                        </div>

                    </div>
                    <div>
                        <NavLink to = "/">
                            <i>Home</i>
                        </NavLink>
                    </div>


                </div>
            </div>
        )
    }
}