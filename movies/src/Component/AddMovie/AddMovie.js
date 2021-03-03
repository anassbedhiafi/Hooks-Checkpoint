import React, {useState} from 'react'
import {Button,Modal, Form} from 'react-bootstrap'

const AddMovie = () => {
    const [show, setShow] = useState(false);
  
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
  
    return (
      <>
        <Button variant="primary" onClick={handleShow}>
          | [+] |
        </Button>
  
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Add Movie</Modal.Title>
          </Modal.Header>
          <Modal.Body>
          <Form>
  <Form.Group>
    <Form.Label>Name</Form.Label>
    <Form.Control type="text" placeholder="Enter title of the movie..." />
  </Form.Group>
  <Form.Group>
    <Form.Label>Type</Form.Label>
    <Form.Control type="text" placeholder="Enter the type of the movie..." />
  </Form.Group>
  <Form.Group>
  <Form.Label>Description</Form.Label>
    <Form.Control type="text" placeholder="Enter Description about the movie..." />
  </Form.Group>
  <Form.Group>
  <Form.Label>Rating</Form.Label>
    <Form.Control type="number" placeholder="Rate the movie..." min="1" max="5" />
  </Form.Group>
  </Form>
  </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
            <Button variant="primary" onClick={handleClose}>
              Save Changes
            </Button>
          </Modal.Footer>
        </Modal>
      </>
    );
  }
  
 export default AddMovie;