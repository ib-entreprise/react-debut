import React, { useState } from 'react';
import Item from './Item';
 
export default function Liste() {
  const [listeImage, setListeImage] = useState([
    {
      id: 1,
      url: 'https://content.wepik.com/media/freepik-ai/grid/v2/surprise/8.png',
    },
    {
      id: 2,
      url: 'https://content.wepik.com/media/freepik-ai/grid/v2/surprise/2.png',
    },
    {
      id: 3,
      url: 'https://content.wepik.com/media/freepik-ai/grid/v2/surprise/9.png',
    },
  ]);

  return (
    <div className="container">
      <h2>Liste des images</h2>
      <div className="row">
      {listeImage.map((image) => {
          return (
               <div className='col-4' key={image.id}>
                    <Item image={image} key={image.id}/>
               </div>
          );
        })}
      </div>
    </div>
  );
}
