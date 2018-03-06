import React, { Component } from 'react';
import { Card, Icon } from 'semantic-ui-react'

class ImageCard extends Component {
  render() {
    const imageUrl = require(`../../assets/images/${this.props.src}`);
    return (
      <div className="image-card" style={this.props.style}>
        <Card centered fluid>
          <Card.Content>
            <Card.Header>The End of the F World</Card.Header>
          </Card.Content>
          <div style={{overflow: 'hidden'}}>
            <div style={{maxHeight: '600px'}}>
              <img src={imageUrl} />
            </div>
          </div>
          <Card.Content>
            <Card.Meta>28 February 2018</Card.Meta>
            <Card.Description>A show on Netflix</Card.Description>
          </Card.Content>
          <Card.Content extra>
            <a>
              <Icon name='user' />
              10 Friends
            </a>
          </Card.Content>
        </Card>
      </div>
    )
  }
}

export default ImageCard;
