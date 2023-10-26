import React, { Component } from 'react';

export class ImageGallery extends Component {
  render() {
    const style = {
      display: 'flex',
      flexWrap: 'wrap'
    }
    const { children } = this.props;
    return <ul style={{
      ...style
    }} className="gallery">{children}</ul>;
  }
}
