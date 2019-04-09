import React, { Component } from "react";
import Navbar from "./components/Navbar";
import Jumbotron from "./components/Jumbotron";
import FriendCard from "./components/FriendCard";
import Footer from "./components/Footer";
import Wrapper from "./components/Wrapper";
import synth from "./synths.json";
import $ from "jquery";
import "./App.css";

class App extends Component {
  state = {
    synth,
    clickedsynth: [],
    score: 0
  };

  imageClick = event => {
    var currentsynth = event.target.alt;
    var synthAlreadyClicked =
      this.state.clickedsynth.indexOf(currentsynth) > -1;
      $(".itemCenter").text("Click an image to begin!");

    if (synthAlreadyClicked) {
      this.setState({
        synth: this.state.synth.sort(function(a, b) {
          return 0.5 - Math.random();
        }),
        clickedsynth: [],
        score: 0
      });
      $(".itemCenter").text("You lose! Click a tile to play again!");
    } else {
      this.setState(
        {
          synth: this.state.synth.sort(function(a, b) {
            return 0.5 - Math.random();
          }),
          clickedsynth: this.state.clickedsynth.concat(
            currentsynth
          ),
          score: this.state.score + 1
        },     
        () => {
          if (this.state.score === 12) {
            $(".itemCenter").text("You Win!");
            this.setState({
              synth: this.state.synth.sort(function(a, b) {
                return 0.5 - Math.random();
              }),
              clickedsynth: [],
              score: 0
            });
          }
        }
      );
    }
  };
  render() {
    return (
      <div>
        <Navbar 
          score={this.state.score}
        />
        <Jumbotron />
        <Wrapper>
          {this.state.synth.map(synth => (
            <FriendCard
              imageClick={this.imageClick}
              id={synth.id}
              image={synth.image}
            />
          ))}
        </Wrapper>
        <Footer />
      </div>
    );
  }
}
export default App;