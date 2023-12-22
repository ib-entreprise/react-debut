export default function EditItem({image}) {
     return (
          <>
               <form className="col-12">
                    <div className="form-group ">
                    <label>Modifier image {image.id} </label>
                         <input type="text" value={image.url}   className="form-control  col-12"/>
                    </div>
                    <div className="form-group">
                         <input type="submit" value="Modifier" className="btn btn-success " />
                    </div>
               </form>
          </>
     );
}