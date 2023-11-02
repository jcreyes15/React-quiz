import React, { useState } from 'react';

const TextComponent = () => {
 const [fontSize, setFontSize] = useState(20);

 const handleIncreaseFontSize = () => {
    setFontSize(fontSize + 1);
 };

 const handleDecreaseFontSize = () => {
    if (fontSize > 10) {
      setFontSize(fontSize - 1);
    }
 };

 return (
    <div>
      <p style={{ fontSize: `${fontSize}px` }}>
        By clicking increase/decrease, you can change the text font size!!!
      </p>
      <button onClick={handleIncreaseFontSize}>Increase Font Size</button>
      <button onClick={handleDecreaseFontSize}>Decrease Font Size</button>
    </div>
 );
};

export default TextComponent;
.


