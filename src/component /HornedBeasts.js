import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from  'react-bootstrap/Card';
class HornedBeasts extends React.Component 
{
    constructor(props) 
    {
        super(props);
        this.state = 
        {
            numberOfPets: 0
        }
    }

    increaseNoOfPets = () =>{
        this.setState({
            numberOfPets: this.state.numberOfPets +1
        })
    }


render() 
{
    return (
        <>
<Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src={this.props.image_url} />
  <Card.Body>
    <Card.Title>{this.props.title}</Card.Title>
    <Card.Text>
    {this.props.description}
    </Card.Text>
    <Card.Text onClick={this.increaseNoOfPets}>👍{this.state.numberOfPets}
</Card.Text>
  </Card.Body>
</Card>

            {/* <h2> {this.props.title}</h2>
            <img src={this.props.image_url} alt={this.props.title} width="300" />
            <p>
                {this.props.description}
            </p >
            <p>👍{this.state.numOfPets}</p> */}

        </>
    )
}
}

export default HornedBeasts;



