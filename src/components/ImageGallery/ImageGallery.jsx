

export const ImageGallery=()=> {
    const style = {
      display: 'flex',
      flexWrap: 'wrap'
    }
    const { children } = this.props;
    return <ul style={{
      ...style
    }} className="gallery">{children}</ul>;
  }

