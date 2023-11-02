import React, { useState } from 'react';

const ShowHideText = () => {
 const [isShown, setIsShown] = useState(false);
 const [buttonText, setButtonText] = useState('Show');

 const handleClick = () => {
    setIsShown(!isShown);
    setButtonText(isShown ? 'Show' : 'Hide');
 };

 return (
    <div>
      <button onClick={handleClick}>{buttonText}</button>
      {isShown && <p>Some hidden text goes here...</p>}
    </div>
 );
};

export default ShowHideText;

