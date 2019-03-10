import React, { Component } from "react";
import banner from "./images/banner.jpg";
import "./App.css";
import Game from "./Game";
import places from "./places";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlayCircle } from "@fortawesome/free-solid-svg-icons";

class App extends Component {
  state = {
    currentPlace: null,
    backgroundImage: banner
  };
  selectRandomPlace = place => {
    let chosenPlace = places[Math.floor(Math.random() * places.length)];
    this.setState({ currentPlace: chosenPlace });
  };

  render() {
    return (
      <div className="App">
        <div className="row">
          <div className="col-12">
            {this.state.currentPlace ? (
              <div className="Game container">
                <Game
                  placesRandom={this.state.currentPlace}
                  style={{ backgroundImage: this.state.backgroundImage }}
                />
              </div>
            ) : (
              <div>
                <br />
                <br />
                <br />
                <br />

                <FontAwesomeIcon
                  icon={faPlayCircle}
                  className="fa-3x text-dark "
                  onClick={() => this.selectRandomPlace(this.places)}
                />
              </div>
            )}
          </div>
        </div>
      </div>
    );
  }
}

export default App;
