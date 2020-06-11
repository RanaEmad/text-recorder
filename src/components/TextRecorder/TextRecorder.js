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
  constructor() {
    super();
    this.state = {
      history: {},
      text: "",
      record: false,
    };
  }

  handleRecord = () => {
    let history = {};
    history[new Date().getTime()] = this.state.text;
    this.setState({
      history,
      record: true,
    });
  };

  handleKeyUp = () => {
    if (this.state.record) {
      let history = this.state.history;
      history[new Date().getTime()] = this.state.text;
      this.setState({
        history,
      });
    }
  };

  handleTextChange = (e) => {
    this.setState({
      text: e.target.value,
    });
  };

  handleStopRecording = () => {
    this.setState({
      record: false,
    });
  };

  handlePlay = () => {
    this.setState({
      text: "",
    });
    let keys = Object.keys(this.state.history);
    let prevTimestamp = keys.shift();
    let time = 0;
    keys.forEach((timestamp) => {
      time += timestamp - prevTimestamp;
      setTimeout(() => {
        this.setState({ text: this.state.history[timestamp] });
      }, time);
      prevTimestamp = timestamp;
    });
  };

  handleReset = () => {
    this.setState({
      history: {},
      text: "",
      record: false,
    });
  };

  render() {
    return (
      <div className="text-recorder">
        <h1 className="header">Text Recorder</h1>
        <textarea
          className="text"
          rows="10"
          placeholder="Press Record and start typing..."
          onKeyUp={this.handleKeyUp}
          onChange={this.handleTextChange}
          value={this.state.text}
        ></textarea>
        <div className="controls">
          <button className="btn" onClick={this.handleRecord}>
            <FontAwesomeIcon icon={faRecordVinyl} color="#c51818" /> Record
          </button>
          <button className="btn" onClick={this.handleStopRecording}>
            <FontAwesomeIcon icon={faStop} color="#c51818" /> Stop Recording
          </button>
          <button className="btn" onClick={this.handlePlay}>
            <FontAwesomeIcon icon={faPlay} color="#c51818" /> Play
          </button>
          <button className="btn" onClick={this.handleReset}>
            <FontAwesomeIcon icon={faRedo} color="#c51818" /> Reset
          </button>
        </div>
      </div>
    );
  }
}

export default TextRecorder;
