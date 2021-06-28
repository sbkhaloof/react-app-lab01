import React from 'react';
import Header from './component /Header';
import Main from './component /Main';
import Footer from './component /Footer';

class App extends React.Component{
  render(){
    return (
      <div>
<h1>
  welcome to first react
</h1>
<Header/>
<Main/>
<Footer/>
      </div>
    )
  }
} 
export default App;