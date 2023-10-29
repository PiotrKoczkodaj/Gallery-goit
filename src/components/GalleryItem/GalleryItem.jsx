
 

export const GalleryItem=({ images,handleClick })=> {
    return (
      <>
        {images.map(image => (
          <li onClick={handleClick} key={image.id} className="gallery-item">
            <img src={image.webformatURL} alt={image.tags} />
          </li>
        ))}
      </>
    );
  }
  

