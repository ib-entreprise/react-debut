export default function Item({image,handleClick}) {
  return (
      <img src={image.url} alt={image.url}  height="300" onClick={() => handleClick(image)}/ >
  );
}
