import React from 'react';
import HornedBeasts from './HornedBeasts';
import 'bootstrap/dist/css/bootstrap.min.css';
// import FilterForm from './FilterForm.js';
import  Form from 'react-bootstrap/Form'

import HornedB from './HornedB.json'
class Main extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
           newHorned: HornedB
        }
    }
    submitForm = (event) => {
        
        let yourHorned =parseInt(event.target.value);
        let filteredAnimal=HornedB;
        if (yourHorned){
            filteredAnimal=HornedB.filter(value => value.horns===yourHorned)
        }
this.props.displayFiltered(filteredAnimal);

    };


    render() {
        return (
            <div className="main">
                <Form>
                    <Form.Label>Filter By Number OF Horns</Form.Label>
                    <Form.Control as='select' onChange={this.submitForm} >
                        <option value="0" >ALL</option>
                        <option value="1">one</option>
                        <option value="2">two</option>
                        <option value="3">three</option>
                        <option value="100">Wow...</option>
                    </Form.Control>
                   
                </Form>
                {this.props.dataArray.map((item, index) => {
                    // return (<HornedBeasts findItem={this.findItem} title={item.title} description={item.description}
                    //     image_url={item.image_url} key={index} index={index} />)
                    return (
                        <HornedBeasts
                            key={index} title={item.title} description={item.description}
                            image_url={item.image_url} findFunc={this.props.findItem} />)
                })}

            </div>

        );
    }
}

export default Main;
