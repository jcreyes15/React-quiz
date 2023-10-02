import React from 'react';

function Card ({title, content, counter}) {
    return (
      <div className="card">
        <h2>{title}</h2>
        <p>{content}</p>
        {counter}
      </div>
    );
};

export default Card;