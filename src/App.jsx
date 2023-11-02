import React, { useState } from 'react';

const ClearableInput = () => {
 const [inputValue, setInputValue] = useState('');

 const handleClear = () => {
    setInputValue('');
 };

 return (
    <div>
      <input type="text" value={inputValue} onChange={e => setInputValue(e.target.value)} />
      <button onClick={handleClear}>Clear</button>
    </div>
 );
};

export default ClearableInput;