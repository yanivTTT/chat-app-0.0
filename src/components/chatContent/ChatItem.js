import React, { Component } from "react";
import Avatar from "../chatList/Avatar";

export default class ChatItem extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    if(this.props.fileType == "text") {
      return (
        <div
          style={{ animationDelay: `0.8s` }}
          className={`chat__item ${this.props.user ? this.props.user : ""}`}
        >
          <div className="chat__item__content">
            <div className="chat__msg">{this.props.msg}</div>
            <div className="chat__meta">
              <span>{this.props.time}</span>
            </div>
          </div>
          <Avatar isOnline="active" image={this.props.image} />
        </div>
      );
    }

    if(this.props.fileType == "image") {
      return(
        <div className={`chat__item ${this.props.user ? this.props.user : ""}`}>
          <div className = "imagePart">
            <img className="uploadImage" src={this.props.msg}/>
          </div>
        <Avatar isOnline="active" image={this.props.image} />
        </div>
      )
    }
    if(this.props.fileType == "video") {
      return(
        <div className={`chat__item ${this.props.user ? this.props.user : ""}`}>
        <div className="videoPart">
            <video className="uploadVideo" controls >
              <source src={this.props.msg} type="video/mp4"/>
            </video>
        </div>
        <Avatar isOnline="active" image={this.props.image} />
        </div>
      )
    }

    if(this.props.fileType == "audio") {
      return(
        <div className={`chat__item ${this.props.user ? this.props.user : ""}`}>
        <div className="audioPart">
            <audio className="uploadAudio" controls>
              <source src={this.props.msg} type="audio/mpeg"/>
            </audio>
        </div>
        <Avatar isOnline="active" image={this.props.image} />
        </div>
      )
    }
  }
}