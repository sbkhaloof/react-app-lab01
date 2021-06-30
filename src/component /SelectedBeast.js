import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';


class SelectedBeast extends React.Component {
   
   
render() {
    return (
        <>
        {console.log(this.props.findhorn)}
          <Modal show={this.props.show} onHide={this.props.endShow}>
        <Modal.Header closeButton>
          <Modal.Title>{this.props.findhorn.title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>{this.props.findhorn.description}
        <img src={this.props.findhorn.image_url} width="200"/></Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={this.props.endShow}>
            Close
          </Button>
          <Button variant="primary" onClick={this.props.endShow}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
        </>
    )
}


}
export default SelectedBeast;