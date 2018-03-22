import React, { Component } from 'react';
import Coverflow from 'react-coverflow';
import './App.css';
import 'tachyons';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      active: 3,
      showComponent: false,
      selectedMovie: {}
    };
  }

  getMovieDetails(e) {
    console.log(`I selected ${e.target.id}`);
    //this.setState({selectedMovieID:e.target.id});
    console.log(`SWAPI Call: https://swapi.co/api/films/${e.target.id}`);
    const data = fetch(`https://swapi.co/api/films/${e.target.id}`)
    .then(result=>result.json())
    .then(items=>this.setState({items}))
    console.log(data);
  }

  render() {
    return (
      <div className="App">
        <header className="App-header tc">
          <h1 className="App-title">STAR WARS</h1>
        </header>
        <Coverflow
          width={960}
          height={480}
          displayQuantityOfSide={2}
          navigation={true}
          enableScroll={true}
          enableHeading={false}
          clickable={true}
          active={this.state.active}
        >
          <div role="menuitem" tabIndex="0">
            <img id="4" src={require('../images/phantom_menace.jpeg')} alt='Episode I: The Phantom Menace' style={{ display: 'block', width: '100%' }} onClick={this.getMovieDetails}/>
          </div>
          <img id="5" src={require('../images/attack_of_the_clones.jpg')} alt='Episode II: Attack of the Clones' onClick={this.getMovieDetails}/>
          <img id="6" src={require('../images/revenge-of-the-sith.jpg')} alt='Episode III: Revenge of the Sith' onClick={this.getMovieDetails}/>
          <img id="1" src={require('../images/a_new_hope.jpg')} alt='Episode IV: A New Hope' onClick={this.getMovieDetails}/>
          <img id="2" src={require('../images/empire_strikes_back.jpg')} alt='Episode V: The Empire Strikes Back' onClick={this.getMovieDetails}/>
          <img id="3" src={require('../images/return-of-the-jedi.jpg')} alt='Episode VI: Return of the Jedi' onClick={this.getMovieDetails}/>
          <img id="7" src={require('../images/force_awakens.jpeg')} alt='Episode VII: The Force Awakens' onClick={this.getMovieDetails}/>
        </Coverflow>
      </div>
    );
  }
}