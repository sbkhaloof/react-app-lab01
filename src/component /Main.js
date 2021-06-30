import React from 'react';
import HornedBeasts from './HornedBeasts';
import FilterForm from './FilterForm.js';
import HornedB from './HornedB.json'
class Main extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
           newHorned: HornedB
        }
    }
    submitForm = (event) => {
        let selectedHorned = event.target.yourHorned.value;
        let yourHorned = [];
        yourHorned = HornedB.filter((horned) => {
            if (horned.horns == selectedHorned) { return true; }
        })
        this.setState({
            newHorned: yourHorned
        })

    }


    render() {
        return (
            <div className="main">
                <FilterForm onSubmit={this.submitForm} />

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
