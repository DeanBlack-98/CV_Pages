import React, {Component} from 'react';
import ImgProfile from '../Images/Me.jpeg';
import {Link} from 'react-router-dom';

export default class Profile extends Component{
    render(){
        return(
            <div>
                <div className = "card">
                    <div className = "card-image">
                        <img className = "activator" src = {ImgProfile} alt = "Deon Swart"></img>
                        <i className = "fas">Deon Swart</i>
                    </div>
                    <p className = "fas">
                        IT Student
                    </p>
                    <p>
                    <a target="_blank" href="https://drive.google.com/file/d/1dpNzgnVE2vaP4iOPZs5FskqSbRz0-XZs/view?usp=sharing">Download CV</a>
                    </p>
                </div>
            </div>
        )
    }
}