import React from 'react';
class HornedBeasts extends React.Component {
    render() {
        return (
            <div>
                <h2> {this.props.title}</h2>
                <img  src= {this.props.url} alt={this .props.alt}/>
                   <p>
                       {this.props.description}
                       </p>

    </div>
                )
    }
}
export default HornedBeasts;



