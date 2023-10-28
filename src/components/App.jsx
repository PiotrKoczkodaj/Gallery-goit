import React, { Component } from 'react';
import { Searchbar } from './Searchbar/Searchbar';
import { ImageGallery } from './ImageGallery/ImageGallery';
import { GalleryItem } from './GalleryItem/GalleryItem';
import { Loader } from './Loader/Loader';
import { Button } from './Button/Button';
import { Modal } from './Modal/Modal';
import { api } from 'api';




export class App extends Component {
  state = {
    inputValue: '',
    galleryItems: [],
    loader: false,
    pageNumber: 1,
    quantity:12 ,
  };


  handleChange = e => {
    this.setState({ inputValue: e.target.value });
  };

  SubmitFnc = e => {
    e.preventDefault();
    let data = api(this.state.inputValue,this.state.pageNumber,this.state.quantity);
    try {
      setTimeout(() => {
        data.then(resp => {
          this.setState({ galleryItems: resp.data.hits });
          this.setState({ loader: false });
        });
      }, 150);
    } catch (error) {
      console.log(error.message);
    } finally {
     this.setState({ loader: true }); 
    }
  }
  

  loadMoreFnc = () => {
    this.setState({ pageNumber: this.state.pageNumber += 1, quantity: this.state.quantity += 12 })
    
    try {
      setTimeout(() => {
        api(this.state.inputValue, this.state.pageNumber, this.state.quantity).then(resp => { this.setState({ galleryItems: resp.data.hits }) });
        this.setState({ loader: false });
      },150)
    } catch (err) {
      console.log(err)
    } finally {
      this.setState({ loader: true });
    }
    
    

  }

  render() {
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
          changeFnc={this.handleChange}
          handleSubmit={this.SubmitFnc}
        />
        <ImageGallery>
          <GalleryItem images={this.state.galleryItems} />
        </ImageGallery>
        {this.state.loader ? <Loader /> : null}
        {this.state.galleryItems.length === 0 ? null : <Button loadMoreFnc={this.loadMoreFnc } />}
        {<Modal/> }
      </div>
    );
  }
}
