import React, { Component } from 'react';

export class GalleryItem extends Component {
  render() {
    const { images } = this.props;

    return (
      <>
        {images.map(image => (
          <li key={image.id} className="gallery-item">
            <img src={image.webformatURL} alt={image.tags} />
          </li>
        ))}
      </>
    );
  }
}
