import React, { useState } from 'react';
import { Searchbar } from './Searchbar/Searchbar';
import { ImageGallery } from './ImageGallery/ImageGallery';
import { GalleryItem } from './GalleryItem/GalleryItem';
import { Loader } from './Loader/Loader';
import { Button } from './Button/Button';
import { api } from 'api';
import * as basicLightbox from 'basiclightbox';

export const App = () => {
  
  const [inputValue, setInputValue] = useState('')
  const [galleryItems, setGalleryItems] = useState([])
  const [loader, setLoader] = useState(false)
  const [pageNumber, setPageNumber] = useState(1)
  const [quantity, setQuantity] = useState(12)

 const handleChange = e => {
    setInputValue(e.target.value)
  };

 const submitFnc = e => {
    e.preventDefault();
    
    let data = api(
      inputValue,
      pageNumber,
      quantity
    );
    try {
      setTimeout(() => {
        data.then(resp => {
          setGalleryItems(resp.data.hits)
          setLoader(false)
        });
      }, 150);
    } catch (error) {
      console.log(error.message);
    } finally {
      setLoader(true)
    }
  };

  const loadMoreFnc = () => {
   
    setPageNumber(pageNumber+1)
   setQuantity(quantity+12)
    try {
      setTimeout(() => {
        
        api(
          inputValue,
          pageNumber,
          quantity
        ).then(resp => {
          setGalleryItems(resp.data.hits)
        });
       setLoader(false)
      }, 150);
    } catch (err) {
      console.log(err);
    } finally {
      setLoader(true)
    }
  };

 const handleClick = (e) => {

    const instance = basicLightbox.create(`<div class="overlay">
  <div class="modal">
    <img src="${e.target.src}" alt="${e.target.alt}" />
  </div>
</div>`);
  

    instance.show()
  }
  

    return (
      <div
        style={{
          height: '100vh',
          justifyContent: 'center',
          alignItems: 'center',
          fontSize: 40,
          color: '#010101',
        }}
      >
        <Searchbar
          changeFnc={handleChange}
          handleSubmit={submitFnc}
        />
        <ImageGallery>
          <GalleryItem images={galleryItems} handleClick={handleClick} />
        </ImageGallery>
        {loader ? <Loader /> : null}
        {galleryItems.length === 0 ? null : (
          <Button loadMoreFnc={loadMoreFnc} />
        )}
        
      </div>
    );
  }

