import React, { useState } from 'react';
import Item from './Item';
import EditItem from './EditItem';
 
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
  const [displayEditionForm, setDisplayEditionForm] = useState(false);
  const [currentImage , setCurrentImage] = useState(null);
  
  function handleImageClick (image) {
    setCurrentImage(image);
    setDisplayEditionForm(true); 
  }

  return (
    <div className="container bg-light">
      <h2>Liste des images</h2>
      <div className="row">
      {listeImage.map((image) => {
          return (
               <div className='col-12 col-md-4' key={image.id}>
                    <Item image={image} key={image.id}  handleClick={handleImageClick}   />
               </div>
          );
        })}
      </div>
      <div className="row mt-5 mx-4">
        {displayEditionForm && 
          <EditItem image={currentImage} />
        }
      </div>
    </div>
  );
}
