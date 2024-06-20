import React from "react";
import '../css/card.css';
import { Link } from "react-router-dom";

function Card(props) {
    return (
        <div className="card lg:flex lg:flex-row md:flex md:flex-col">
            <div className="imgg">
               <img src={props.img} alt="img"/>
            </div>
            <div className="imgtext relative">
               <h2 className="font-bold p-3 relative">{props.title}</h2>
               <p className="mr-3 relative">{props.description}</p>
            <Link to={props.link} className="lg:absolute lg:bottom-3 md:relative sm:relative ">Learn More-{'>'}</Link>
            </div>
        </div>
    )
}

export default Card;