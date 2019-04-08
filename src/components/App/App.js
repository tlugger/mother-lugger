import React, { Component } from 'react';
import { ParallaxProvider } from 'react-scroll-parallax';
import { Title, Libby } from '../../components';
import './App.scss';

class App extends Component {
  render() {
    return (
      <div className="App">
        <ParallaxProvider>
          <div className="App-section">
            <Title/>
            <p className="App-par">
              A place to recognize the amazing women in my life.
            </p>
          </div>
          <div className="App-section">
            <h1>My Mother</h1>
            <p className="App-par">From humble beginnings to the top of her class in motherhood</p>
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
            <h1>Honorable Motherhood Mentions</h1>
            <p className="App-par">My Grandma: The mother of all mothers</p>
            <p className="App-par">My Aunt: My mom away from mom</p>
            <p className="App-par">My Girlfriends Mom: A mother not unlike my own.</p>
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
