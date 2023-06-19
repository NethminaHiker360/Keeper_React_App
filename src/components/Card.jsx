import React from 'react';

function Card(props) {
  return (
    <div>
      <h2>{props.name}</h2>
      <img src={props.src} alt="Avatar" />
      <p>{props.number}</p>
      <p>{props.site}</p>
    </div>
  );
}

export default Card;
