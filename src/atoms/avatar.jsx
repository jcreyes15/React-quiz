import React from 'react';

function Avatar ({imageSrc, description}) {
    return (
      <img src={imageSrc} alt={description} />
    );
}

export default Avatar;