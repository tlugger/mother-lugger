import React, { Component } from 'react';
import { ParallaxProvider } from 'react-scroll-parallax';
import { ImageBar,
         Libby,
         Mentions,
         Overview,
         Title } from '../../components';
import './App.scss';

class App extends Component {
  render() {
    return (
      <div className="App">
        <ParallaxProvider>
          <div className="App-section">
            <Title/>
            <ImageBar/>
            <p className="App-par">
              A place to recognize the amazing women in my life.
            </p>
          </div>
          <div className="App-section">
            <Overview/>
          </div>
          <div className="App-section">
            <h1>Introducing Tyler</h1>
            <p className="App-par">I make my appearance, starting the neverending motherhood journey for my mom.</p>
          </div>
          <div className="App-section">
            <h1>One wasn't enough</h1>
            <p className="App-par">In comes Sydney. The second and last of children mothered by my mom.</p>
          </div>
          <div className="App-section">
            <h1>A mother to all</h1>
            <p className="App-par">Mother to her children and our many pets. This mom just can't stop!</p>
            <h5>pics of Justice, Libby, Zeus, and of course Luna</h5>
          </div>
          <div className="App-section">
            <Mentions/>
          </div>
          <div className="App-section">
            <Libby/>
            <p className="App-par">Libby Lugger, mother of seven</p>
          </div>
          <div className="App-section">
            <h1>Great Mother, Expecting Grandmother?</h1>
            <p className="App-par">NO</p>
          </div>
        </ParallaxProvider>
      </div>
    );
  }
}

export default App;
