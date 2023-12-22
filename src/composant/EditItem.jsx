import { useState } from "react";

export default function EditItem({ image , handleEditSubmit}) {
  const [url, setUrl] = useState(image.url); 

  const handleInputChange = (event) => {
    setUrl(event.target.value); 
  };
 

  return (
    <>
      <form className="col-12" onSubmit={ (e)=> {
               e.preventDefault();
               handleEditSubmit(url);
               console.log("Nouvelle URL :", url);
      } }>
        <div className="form-group">
          <label>Modifier url  </label>
          <input
            type="text"
            value={url}
            onChange={handleInputChange}
            className="form-control col-12"
          />
        </div>
        <div className="form-group">
          <input type="submit" value="Modifier" className="btn btn-success" />
        </div>
      </form>
    </>
  );
}
