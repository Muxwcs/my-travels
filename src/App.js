import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Travel from './Travel.jsx';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Travel
          destination="Tolmin"
          country="Slovenia"
          photo="https://scontent.flux1-1.fna.fbcdn.net/v/t1.0-9/39245723_10216159836766581_9175025007342911488_o.jpg?_nc_cat=109&_nc_ht=scontent.flux1-1.fna&oh=d9811cd63ccff30d8b1a43d32380a918&oe=5D47859B"
          distance="1600 km"
        />
        <Travel
          destination="Vitoria-Gasteiz"
          country="Bask country"
          photo="https://scontent.flux1-1.fna.fbcdn.net/v/t1.0-9/48420247_1939727842763264_3233250457010831360_o.jpg?_nc_cat=104&_nc_ht=scontent.flux1-1.fna&oh=a1b9836148b7a6b6ffd89be8cf47849e&oe=5D4D4915"
          distance="150 km"
        />
      </div>
    );
  }
}

export default App;
