import React, { Component } from 'react';
import { ParallaxProvider } from 'react-scroll-parallax';
import { Title } from '../../components';
import './App.scss';

class App extends Component {
  render() {
    return (
      <div className="App">
        <ParallaxProvider>
          <div className="App-section">
            <Title/>
            <p>
              A place to recognize some amazing women in my life.
            </p>
          </div>
          <div className="App-section">
            <h1>My Mother</h1>
            <p>From humble beginnings to the top of her class in motherhood</p>
          </div>
          <div className="App-section">
            <h1>Introducing Tyler</h1>
            <p>I make my appearance, starting the neverending motherhood journey for my mom.</p>
          </div>
          <div className="App-section">
            <h1>One wasn't enough</h1>
            <p>In comes Sydney. The second and last of children mothered by my mom.</p>
          </div>
          <div className="App-section">
            <h1>A mother to all</h1>
            <p>Mother to her children and our many pets. This mom just can't stop!</p>
            <h5>pics of Justice, Libby, Zeus, and of course Luna</h5>
          </div>
          <div className="App-section">
            <h1>Honorable Motherhood Mentions</h1>
            <p>My Grandma: The mother of all mothers</p>
            <p>My Aunt: My mom away from mom</p>
            <p>My Girlfriends Mom: A mother not unlike my own.</p>
          </div>
          <div className="App-section">
            <h1>Gone but not forgotten</h1>
            <p>Libberty Lugger a mother to 7</p>
          </div>
          <div className="App-section">
            <h1>Great Mom, expecting Grandmother?</h1>
            <p>NO</p>
          </div>
        </ParallaxProvider>
      </div>
    );
  }
}

export default App;
