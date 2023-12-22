import React, { useState } from 'react';
import Liste from './composant/Liste';

function App() {
  const [showImage, setShowImage] = useState(false);
 
  return (

    <>
    <div className="container mt-5 text-center">
      <Liste />
      <div className="">
        <button className="btn btn-primary m-2" onClick={()=>{setShowImage(true)}}>Afficher</button>
        <button className="btn btn-secondary m-2" onClick={() => {setShowImage(false)} } >Disparaître</button>
      </div>
      {showImage && 
        <img src="https://picsum.photos/200" alt="Image" className="mt-3"/>
      }
    </div>
    </>
  );
} 

export default App;