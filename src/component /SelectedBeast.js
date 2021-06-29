import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';


class SelectedBeast extends React.Component {
    // constructor(props) 
    // {
    //     super(props);
    //     this.state = 
    //     {
    //         endShow:false
    //     }
    // }
    // endShowHornedBeasts=()=>{
        
    //     this.setState({
    //         endShow: true
            
    //     })
    // }
   
render() {
    return (
        <>
        <Modal show={this.props.showPea} onHide={this.props.endShow}>
        <Modal.Header closeButton>
          <Modal.Title>{this.props.hornedObj.title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>{this.props.hornedObj.description}
            <img src={this.props.hornedObj.image_url} alt={this.props.hornedObj.title}/></Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={this.props.endShow}>
            Close
          </Button>
          <Button variant="primary" onClick={this.props.endShow}>
            close
          </Button>
        </Modal.Footer>
      </Modal>
        </>
    )
}

}
export default SelectedBeast;