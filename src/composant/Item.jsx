import React from 'react';

export default function Item({image}) {
  return (
      <img src={image.url} alt={image.url}  height="300"/>
  );
}
