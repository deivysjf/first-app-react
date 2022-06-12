import React from "react";

const Comentarios= (props) => {
    return (
        <div>
            <div className="container">
                <div className="media">
                    <img src={props.image} className="align-self-start "></img>
                    <div className="media-body">
                        <p className="card-text">{props.comment}</p>
                        <p className="card-text">{props.date},{props.author}</p>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Comentarios;