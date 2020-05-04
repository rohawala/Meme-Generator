import React from "react";
import "./Meme.css";
function Header() {
  return (
    <div className="App-header">
      <p>
        <img
          src="http://www.pngall.com/wp-content/uploads/2016/05/Trollface.png"
          alt="HTML5"
          width="150"
          height="150"
        />
      </p>
      <div>
        <h1>Meme Generator</h1>
      </div>
    </div>
  );
}

export default Header;
