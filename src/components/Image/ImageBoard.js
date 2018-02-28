import React, { Component } from 'react';
import ImageCard from './ImageCard'

class ImageBoard extends Component {
  render() {
    return(
      <div className="image-card-container">
        <ImageCard src={require('../../assets/images/the-end-of-the-f-world.jpg')} />
        <ImageCard src={require('../../assets/images/game-of-thrones.jpg')} />
        <ImageCard src={require('../../assets/images/the-end-of-the-f-world.jpg')} />
        <ImageCard src={require('../../assets/images/the-end-of-the-f-world.jpg')} />
        <ImageCard src={require('../../assets/images/the-end-of-the-f-world.jpg')} />
        <ImageCard src={require('../../assets/images/game-of-thrones.jpg')} />
        <ImageCard src={require('../../assets/images/the-end-of-the-f-world.jpg')} />
        <ImageCard src={require('../../assets/images/the-end-of-the-f-world.jpg')} />
      </div>
    );
  }
}

export default ImageBoard;
