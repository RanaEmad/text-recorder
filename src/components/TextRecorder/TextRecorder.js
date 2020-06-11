import React from "react";
import "./TextRecorder.css";

class TextRecorder extends React.Component {
  render() {
    return (
      <div className="text-recorder">
        <h1 className="header">Text Recorder</h1>
        <textarea
          className="text"
          rows="10"
          placeholder="Press Record and start typing..."
        ></textarea>
        <div className="controls">
          <button className="btn">Record</button>
          <button className="btn">Stop Recording</button>
          <button className="btn">Play</button>
          <button className="btn">Reset</button>
        </div>
      </div>
    );
  }
}

export default TextRecorder;
