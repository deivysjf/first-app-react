import React from "react";

const Restaurante= (props) => {
    return (
        <div>
            <div className="card-columns">
                <div className="card-body">
                    <img className="card-img-top" src={props.image} alt="card image"></img>
                    <h3 className="card-title">{props.name}</h3>
                    <p className="card-text">{props.description}</p>
                    
                </div>
            </div>
        </div>
    )
}

export default Restaurante;