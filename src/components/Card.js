import React from 'react';

export function Card(props) {
  return (
    <div>
      <button><img src={props.src} alt='card'></img></button>
    </div>
  )
}