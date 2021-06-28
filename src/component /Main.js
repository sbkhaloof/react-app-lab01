import React from 'react';
import HornedBeasts from './HornedBeasts';
import HornedB from './HornedB.json';
class Main extends React.Component {
    render() {
        return (
            <div className="main">
                {HornedB.map((item, index) => {
                    return <HornedBeasts title={item.title} description={item.description} image_url={item.image_url} key={index} index={index} />
                })}
                     </div>
        );
    }
}
export default Main;
