import React from 'react';
import './Card.css';

const Card = (props) => {
    
    let allclass = 'card ' + props.className;
    return <div className={allclass}>{props.children}</div>

}

export default Card;