import React from "react";
import "./Meme.css";
class Generator extends React.Component {
  constructor() {
    super();
    this.state = {
      topText: "",
      bottomText: "",
      imgURL: "http://i.imgflip.com/1bij.jpg",
      allMemeImage: [],
      age: "",
    };
    this.Action = this.Action.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  componentDidMount() {
    fetch("https://api.imgflip.com/get_memes")
      .then((response) => response.json())
      .then((response) => {
        const { memes } = response.data;
        this.setState({
          allMemeImage: memes,
        });
      });
  }

  Action(event) {
    const { name, value } = event.target;
    this.setState({
      [name]: value,
    });
  }
  handleSubmit(event) {
    event.preventDefault();
    const randomNum = Math.floor(
      Math.random() * this.state.allMemeImage.length
    );
    const ranMemeImg = this.state.allMemeImage[randomNum].url;
    this.setState({
      imgURL: ranMemeImg,
    });
  }
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <div class="bottom-right">
          <input
            type="text"
            placeholder="Enter top text"
            name="topText"
            value={this.state.topText}
            onChange={this.Action}
          />
        </div>

        <div class="top-right">
          <input
            type="text"
            placeholder="Enter bottom text"
            name="bottomText"
            value={this.state.bottomText}
            onChange={this.Action}
          />
        </div>
        <div class="button">
          <button>Submit</button>
        </div>
        <div class="centered">
          <img src={this.state.imgURL} alt="HTML5" width="350" height="300" />
        </div>
        <div class="top">
          <h1>{this.state.topText}</h1>
        </div>
        <div class="bottom">
          <h1>{this.state.bottomText}</h1>
        </div>
      </form>
    );
  }
}

export default Generator;
