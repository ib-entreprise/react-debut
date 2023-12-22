import React, { useState } from 'react';
import Item from './Item';
import EditItem from './EditItem';
import {v4 as uuidv4} from 'uuid';

 
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


  function handleEditSubmit(updatedUrl) {
    const newListe = listeImage.map(image => {
      if (image.id === currentImage.id) {
        return { ...image, url: updatedUrl };
      }
      return image; 
    });
  
    setListeImage(newListe);
    setDisplayEditionForm(false);
    setCurrentImage(null);
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
          <EditItem image={currentImage} handleEditSubmit={handleEditSubmit} />
        }
      </div>
    </div>
  );
}
