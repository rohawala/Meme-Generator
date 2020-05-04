import React from "react";
import Header from "./Header";
import Generator from "./Generator";
class Meme extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <Generator />
      </div>
    );
  }
}

export default Meme;
