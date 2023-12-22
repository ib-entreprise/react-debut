export default function Item({image,handleClick}) {
  
  return (
      <img src={image.url} alt={image.id}  height="300" onClick={() => handleClick(image)}/ >
  );
}
