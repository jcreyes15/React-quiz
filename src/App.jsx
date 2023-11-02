import React, { useState } from 'react';

const ClearableInput = () => {
 const [inputValue, setInputValue] = useState('');
 const [reversedText, setReversedText] = useState('');

 const handleInputChange = (e) => {
    setInputValue(e.target.value);
    setReversedText(e.target.value.split('').reverse().join(''));
 };

 const handleClearInput = () => {
    setInputValue('');
    setReversedText('');
 };

 return (
    <div>
      <input type="text" value={inputValue} onChange={handleInputChange} />
      <button onClick={handleClearInput}>Clear</button>
      <p>Reversed Text: {reversedText}</p>
    </div>
 );
};

export default ClearableInput;