import React,{Component} from "react";
import { Searchbar } from "./Searchbar/Searchbar";
import { ImageGallery } from "./ImageGallery/ImageGallery";
import { GalleryItem } from "./GalleryItem/GalleryItem";
import { Loader } from "./Loader/Loader";
import { Button } from "./Button/Button";
import { Modal } from "./Modal/Modal";
import { api } from 'api';

export class App extends Component {
  state = {
    inputValue : '',
  }
  
  handleChange = (e) => {
     this.setState({inputValue:e.target.value})
  }
  
  SubmitFnc = (e) => {
    e.preventDefault();
    api(this.state.inputValue).then(resp=>{console.log(resp.data.hits)})
  }
  render() {
     return (
    <div
      style={{
        height: '100vh',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101'
      }}
    >
         <Searchbar changeFnc={this.handleChange } handleSubmit={this.SubmitFnc} />
         <ImageGallery>
          <GalleryItem />
         </ImageGallery>
        
         <Loader />
         <Button />
         <Modal/>
    </div>
  ); 


  }

};
