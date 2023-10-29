import React, { Component } from 'react';
 

export class GalleryItem extends Component {
  render() {
    const { images,handleClick } = this.props;
    
    
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
  
}

