import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Avatar from './Simpson'
import Lamp from './Lamp'
const bart = {
  image: "https://www.stickees.com/files/cartoon/the-simpsons/2239-bart-simpson-.png",
  firstName: "Bart",
  lastName: "Simpson"
};
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      working: props.on
    };
  }
  handleClick = () => {
    console.log('Button clicked');
    this.setState({ working: !this.state.working });
  };
  render() {
    const work = this.state.working ? 'work' : 'sleep';
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className={work} alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>

          <button
            onClick={this.handleClick}

          >
            {work.toUpperCase()}
          </button>


        </header>
        <Lamp on />
        <Lamp />
        <Avatar image="https://www.punanaamio.fi/media/catalog/product/cache/5/image/9df78eab33525d08d6e5fb8d27136e95/s/m/sm144-homer-simpson-julkkisnaamari.jpg" firstName="Homer" lastName="Simpson" />
        <Avatar image="http://www.simpsonspark.com/images/persos/contributions/marge-simpson-24939.jpg" firstName="Marge" lastName="Simpson" />
        <Avatar image="https://previews.123rf.com/images/chutimakuanamon/chutimakuanamon1706/chutimakuanamon170600318/81156054-lisa-simpson-illustration-cartoon.jpg" firstName="Lisa" lastName="Simpson" />
        <Avatar {...bart} />
      </div>
    );
  }
}

export default App;
