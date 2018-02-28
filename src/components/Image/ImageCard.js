import React, { Component } from 'react';
import { Card, Icon } from 'semantic-ui-react'

class ImageCard extends Component {
  render() {
    return (
      <div style={{position: 'relative'}}>
        <div className="image-card" style={{position: 'absolute'}}>
          <Card centered fluid>
            <Card.Content>
              <Card.Header>The End of the F World</Card.Header>
            </Card.Content>
            <div style={{overflow: 'hidden'}}>
              <div style={{maxHeight: '800px'}}>
                <img src={this.props.src} />
              </div>
            </div>
            <Card.Content>
              <Card.Meta>28 February 2018</Card.Meta>
              <Card.Description>A show from Netflix</Card.Description>
            </Card.Content>
            <Card.Content extra>
              <a>
                <Icon name='user' />
                10 Friends
              </a>
            </Card.Content>
          </Card>
        </div>
      </div>
    )
  }
}

export default ImageCard;
