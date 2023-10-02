import React from 'react';
import "../styles/counter.css"
import { useState } from 'react';

function Counter() {
 const [count, setCount] = useState(() => {
    return 0
 })

function decrementCount() {
    if (count >=1) {
        setCount(prevCount => prevCount - 1)
 }
}

function incrementCount() {
    setCount(prevCount => prevCount + 1)
 }

return (
    <div>
      <h3>Wanna go to the moon!!?: {count}</h3>
      <button className='increment' onClick={incrementCount}>Yes</button>
      <button className='decrement' onClick={decrementCount}>No</button>
    </div>
 );
};

export default Counter;

