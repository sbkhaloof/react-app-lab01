import React from 'react';
import HornedBeasts from './HornedBeasts';
import HornedB from './HornedB.json';
import SelectedBeast from './SelectedBeast';
class Main extends React.Component {


    render() {
        return (
            <div className="main">
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
