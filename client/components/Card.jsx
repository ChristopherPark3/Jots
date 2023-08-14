import React, { Component } from 'react';

const Card = props => {
    return (
        <div className="card-container">
            <div key={props.key}className="card">
                <h3>{props.entry}</h3>
            </div>
        </div>
    )
}

export default Card;