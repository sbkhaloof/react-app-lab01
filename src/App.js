import React from 'react';
import Header from './component /Header';
import Main from './component /Main';
import Footer from './component /Footer';
import SelectedBeast from './component /SelectedBeast';
import HornedB from './component /HornedB.json';
class App extends React.Component {

  constructor(props) {
    super(props);
    this.state =
    {
dataArray:HornedB,
      showPea: false,
      hornedObj: {},

    }

  }
  findItem = (title) => {
    let Obj =HornedB.find(element => element.title === title);
    this.setState({
      showPea: true,
      hornedObj:Obj
    
    })
    
     {console.log(this.state.hornedObj)}
  }
  endShow = () => {
    this.setState({
      showPea: false,

    })
  }

updateAnimalArray =(dataArray)=>{
  this.setState({
    dataArray
  });
}


  render() {
    return (
      <div>
        <h1>
          welcome to first react
        </h1>
        <Header />
        <Main findItem={this.findItem} dataArray={this.state.dataArray} displayFiltered={this.updateAnimalArray}/>
        <SelectedBeast show={this.state.showPea}  findhorn={this.state.hornedObj} endShow={this.endShow} />

        <Footer />
      </div>
    )
  }
}
export default App;