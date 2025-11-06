import React from 'react'
import './card.css'

function card(props) {
  return (
    <div id='adi'>
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTtdJMZMN5xrEP0QbcXrpqPsXE1Y_ciPVBMA0YPQ--cXWZTTJEbqa_YP5k&s" alt=""/>
        <h2>{props.name}</h2>
        <h3>{props.edu}</h3>
    </div>
  )
}

export default card