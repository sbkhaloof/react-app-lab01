import React from 'react';
import { Form,Button} from 'react-bootstrap'
// import { option } from 'react-bootstrap';

class FilterForm extends React.Component {
    constructor(props){
        super(props)
    }

    render() {
        return (
            <>
                <Form>
                    <Form.Label>Filter By Number OF Horns</Form.Label>
                    <Form.Control as='select' onChange={this.props.submitForm} >
                        <option value="0" >ALL</option>
                        <option value="1">one</option>
                        <option value="2">two</option>
                        <option value="3">three</option>
                        <option value="100">Wow...</option>
                    </Form.Control>
                   
                </Form>
            </>
        )
    }
}
export default FilterForm;