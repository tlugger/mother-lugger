import React, { Component } from 'react';
import { ParallaxProvider } from 'react-scroll-parallax';
import { AllTheKids,
         ImageBar,
         Libby,
         Mentions,
         Overview,
         Title, 
         Kids,
         Pets} from '../../components';
import './App.scss';

class App extends Component {
  state = {
    show: false,
  };
  onClick = () => {
    this.setState({show: !this.state.show})
  }
  render() {
    return (
      <div className="App">
        <ParallaxProvider>
          <div className="App-section">
            <Title/>
            <ImageBar/>
            <p className="App-par">
              A small project to recognize the amazing women in my life.
            </p>
          </div>
          <div className="App-section">
            <AllTheKids/>
          </div>
          <div className="App-section">
            <Overview/>
          </div>
          <div className="App-section">
            <Kids/>
          </div>
          <div className="App-section">
            <Pets/>
          </div>
          <div className="App-section">
            <Mentions/>
          </div>
          <div className="App-section">
            <Libby/>
            <p className="App-par">Libby Lugger, mother of seven</p>
          </div>
          <div className="App-section">
            <p className="App-title">Is my mom an expecting grandmother?</p>
            <button onClick={this.onClick}>
              <h2 className="App-button">Click Here to See</h2>
            </button>
            <p className="App-par" hidden={!this.state.show}>NO</p>
          </div>
        </ParallaxProvider>
      </div>
    );
  }
}

export default App;
