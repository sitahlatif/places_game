import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {
  faQuestionCircle,
  faLightbulb,
  faRedoAlt
} from "@fortawesome/free-solid-svg-icons";

class Game extends Component {
  state = {
    input: "",
    attempts: 4,
    messages: "",
    bgcolor: { backgroundColor: "" },
    color: { color: "white" },
    random: this.props.placesRandom,
    hint: "",
    guess: "",
    again: "disabled"
  };
  _refreshPage() {
    window.location.reload();
  }

  handleChange = event => {
    this.setState({ input: event.target.value });
  };
  reset = () => {
    this.setState({
      input: "",
      attempts: 3,
      messages: "",
      bgcolor: { backgroundColor: "black" },
      random: this.props.placesRandom + 1
    });
  };

  handleClick = () => {
    let name = this.props.placesRandom.name.toLowerCase();
    let input = this.state.input.toLowerCase();
    let newattem = this.state.attempts - 1;
    let newtt = newattem + 1;
    if (input !== "") {
      if (this.state.attempts > 0) {
        if (input === name) {
          this.setState({
            messages:
              "CONGRATULATIONS!!! YOU GUESSED IT RIGHT THE ANSWER IS " + name,
            bgcolor: { backgroundColor: "lightgreen" },
            color: { color: "green" },
            hint: "disabled",
            guess: "disabled",
            again: false
          });
        } else {
          this.setState({
            attempts: newattem,
            messages:
              "(X) No not correct, you have " + newtt + " more attempts",
            bgcolor: { backgroundColor: "darkred" },
            color: { color: "white" }
          });
        }
      } else {
        this.setState({
          messages:
            "you lose ,you have finished 4 attempts the answer is " + name,
          hint: "disabled",
          guess: "disabled",
          again: false
        });
      }
    } else {
      this.setState({
        messages: "! You didnt write anything",
        color: { color: "red" },
        bgcolor: { backgroundColor: "lightyellow" }
      });
    }
  };
  hint = () => {
    let letters = this.props.placesRandom.letters;
    this.setState({
      messages: letters,
      color: { color: "darkornage" },
      bgcolor: { backgroundColor: "" }
    });
  };
  place = this.props.places;
  render() {
    return (
      <div>
        <img src={this.props.placesRandom.image} />
        <br />
        <input
          id="inputn"
          placeholder={this.props.placesRandom.location}
          type="text"
          value={this.state.input}
          onChange={this.handleChange}
        />
        <br />
        <div className="message" style={this.state.bgcolor}>
          <h4 style={this.state.color}>{this.state.messages}</h4>
        </div>
        <button
          className="btn btn-success m-3 btn-lg "
          disabled={this.state.guess}
          onClick={this.handleClick}
        >
          Guess
          <FontAwesomeIcon
            icon={faQuestionCircle}
            className="fa-1x text-light  "
          />
        </button>
        <button
          className="btn  btn-warning  m-3 btn-lg"
          disabled={this.state.hint}
          onClick={this.hint}
        >
          Hint
          <FontAwesomeIcon icon={faLightbulb} className="fa-1x text-light  " />
        </button>
        <button
          className="btn btn-dark btn-light m-3 btn-lg "
          onClick={this._refreshPage}
          disabled={this.state.again}
        >
          PLAY AGAIN
          <FontAwesomeIcon icon={faRedoAlt} className="fa-1x text-light  " />
        </button>
      </div>
    );
  }
}
export default Game;
