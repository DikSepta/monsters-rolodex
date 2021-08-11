import React from 'react'
import './card.styles.css'

export const Card = ({monster}) => (
    <div className="card-container ">
        <img src={`https://robohash.org/${monster.id}`}/>
        <h2>{monster.name}</h2>
        <p>{monster.email}</p>
    </div>
)