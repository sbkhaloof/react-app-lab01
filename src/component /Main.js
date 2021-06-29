import React from 'react';
import HornedBeasts from './HornedBeasts';
import HornedB from './HornedB.json';
import SelectedBeast from './SelectedBeast';
class Main extends React.Component {
    constructor(props) {
        super(props);
        this.state =
        {
            showPea: false,
            hornedObj:{}
        }
    }
       
    findItem = (title) => {
       let result= HornedB.find(element =>{ 
      if(element.title===title)
      {return element;}
       }) 
    this.setState({
        showPea:true,
        hornedObj:result
    })
    endShow = ()=>{
        this.setState({
            showPea:false,
            hornedObj:{}
        })
    }
}

    render() {
        return (
            <div className="main">
                {HornedB.map((item, index) => {
                    return (<HornedBeasts findItem={this.findItem}   title={item.title} description={item.description} 
                        image_url={item.image_url} key={index} index={index} />)
                })}
                <SelectedBeast findIteme={this.findItem} clickHornedBeasts={this.state.result} endShow={this.endShow}/>
            </div>
        );
    }
}
export default Main;
