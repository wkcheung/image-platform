import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import { Button, Divider, Form, Grid, Header, Image, Input, Modal } from 'semantic-ui-react'


// temp
const collections = [
  { text: 'Animals', value: 'userName.Animals' },
  { text: 'Vehicles', value: 'userName.Vehicles' },
];

const UploadImageArea = props => {
	return (
		<form formAction={console.log('hi')}
		className="dropzone"
		id="my-awesome-dropzone"></form>
	);
}

const UploadImageForm = props => {
  return (
    <Form>
      <Grid columns={2} divided>
        <Grid.Row>
          <Grid.Column>
			
          </Grid.Column>
          <Grid.Column>
            <Form.Field>
              <label>Description</label>
              <input placeholder='Description' />
            </Form.Field>
            <Form.Field>
              <label>Tags</label>
              <Input
                icon='tags'
                iconPosition='left'
                placeholder='Enter tags'
              />
            </Form.Field>
            <Form.Field>
              <Form.Select fluid label='Collection' options={collections} placeholder='Collection' />
            </Form.Field>
          </Grid.Column>
        </Grid.Row>
        <Divider />
        <Grid.Row>
          <Grid.Column floated='right' width={4}>
            <Button color='teal' fluid type='submit'>Upload</Button>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </Form>
  );
}

const UploadImageModal = props => {
  return (
    <Modal trigger={<UploadButton />} closeIcon>
    <Modal.Header>Select a Photo</Modal.Header>
    <Modal.Content>
      <Modal.Description>
        <UploadImageForm {...props} />
      </Modal.Description>
    </Modal.Content>
  </Modal>
  );
}

const UploadButton = props => {
  return (
    <Button {...props} circular className="upload-button" size='big' color='teal' icon='plus' />
  );
}

class UploadImage extends Component {
  render() {
    return (
      <UploadImageModal />
    );
  }
}

export default UploadImage
