import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faRecordVinyl,
  faStop,
  faPlay,
  faRedo,
} from "@fortawesome/free-solid-svg-icons";
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
          <button className="btn">
            <FontAwesomeIcon icon={faRecordVinyl} color="#c51818" /> Record
          </button>
          <button className="btn">
            <FontAwesomeIcon icon={faStop} color="#c51818" /> Stop Recording
          </button>
          <button className="btn">
            <FontAwesomeIcon icon={faPlay} color="#c51818" /> Play
          </button>
          <button className="btn">
            <FontAwesomeIcon icon={faRedo} color="#c51818" /> Reset
          </button>
        </div>
      </div>
    );
  }
}

export default TextRecorder;
