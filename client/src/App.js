import React, { Component } from 'react';
import { Header } from './components/Header';
import { ImageBox } from './components/ImageBox';
class App extends Component {
  render() {
    return (
      <div className="App">
        <Header/>
        <ImageBox/>
      </div>
    );
  }
}

export default App;
