import React, { Component, useState, createRef, useEffect } from "react";

import "./ChatContent.css";
import Avatar from "../chatList/Avatar";
import ChatItem from "./ChatItem";
import Popup from "./Popup";


export default class ChatContent extends Component {
  messagesEndRef = createRef(null);
  
  constructor(props) {
    super(props);
    this.state = {
       //our chat we pass on as varible
      msg: "",
      popup : false
    };
  }

  scrollToBottom = () => {
    this.messagesEndRef.current.scrollIntoView({ behavior: "smooth" });
  };


  lastKey() {
    var keys = Object.keys(this.props.state.chatItms[this.props.state.user_chat]);
    var last = keys[keys.length - 1];
    console.log(last);
    return last + 1;
  }

  componentDidMount() {
    window.addEventListener("keydown", (e) => {
      if (e.keyCode == 13) {
        var date = new Date()
        if (this.state.msg != "") {
          this.props.state.chatItms[this.props.state.user_chat].push({
            key: this.lastKey(),
            type: "",
            msg: this.state.msg,
            image:
              this.props.state.user.image, 
            fileType: "text",
            time: String(date.getHours())+":"+String(date.getMinutes()).padStart(2,"0")
          });
          //this.setState({ chat: [...this.props.state.chat[0]] });
          this.props.addToChat(this.props.state.chatItms);
          this.scrollToBottom();
          this.setState({ msg: "" });
        }
      }
    });
    this.scrollToBottom();
  }

  printButton() {
    var date = new Date()
    console.log("msg is: " + this.state.msg);
    if (this.state.msg != "") {
      this.props.state.chatItms[this.props.state.user_chat].push({
        key: this.lastKey(),
        type: "",
        msg: this.state.msg,
        image:
          this.props.state.user.image, 
        fileType: "text",
        time: String(date.getHours())+":"+String(date.getMinutes()).padStart(2,"0")

      });
      //this.setState({ chat: [...this.props.state.chat[0]] });
      this.props.addToChat(this.props.state.chatItms);
      this.scrollToBottom();
      this.setState({ msg: "" });
    }
  }
  addImage = (e) => {

    if (e.target.files && e.target.files[0]) {
      let reader = new FileReader()
      reader.onload = () => {
        if(reader.readyState === 2){
          this.setState({msg: reader.result})
        }
      }
      reader.readAsDataURL(e.target.files[0]);
      if(this.state.msg != "") {
        this.props.state.chatItms[this.props.state.user_chat].push({
          key: this.lastKey(),
          type: "",
          msg: this.state.msg,
          image:
            this.props.state.user.image, 
          fileType: "image"
        });
        //this.setState({ chat: [...this.props.state.chat[0]] });
        this.props.addToChat(this.props.state.chatItms);
        this.scrollToBottom();
        this.setState({ msg: "" });
      }
    }
  }


  onStateChange = (e) => {
    this.setState({msg: e.target.value });
  };

  closeBtnPopup = () => {
    this.setState({popup : false})
  }

  onSubmit = (e) =>{
    console.log(e.target.files, "$$$$");
  }

  render() {

    return ( 
      
      <div className="main__chatcontent">
      <Popup trigger = {this.state.popup} close={this.closeBtnPopup} submit = {this.addImage}></Popup>
        <div className="content__header">
          <div className="blocks">
            <div className="current-chatting-user">
              <Avatar
                isOnline="active"
                image={this.props.state.chat_users[this.props.state.user_chat].image}
              />
              <p>{this.props.state.chat_users[this.props.state.user_chat].name}</p>
            </div>
          </div>

          <div className="blocks">

            <div className="settings">
            
              <button className="btn-nobg">
              </button>
            </div>
          </div>
        </div>
        <div className="content__body">
          <div className="chat__items">
            {this.props.state.chatItms[this.props.state.user_chat].map((itm, index) => {
              if(itm.type == "") {
                return (
                  <ChatItem
                    animationDelay={index + 2}
                    key={itm.key}
                    user={itm.type ? itm.type : "me"}
                    msg={itm.msg}
                    image={"https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSM6p4C6imkewkCDW-9QrpV-MMAhOC7GnJcIQ&usqp=CAU"}
                    fileType = {itm.fileType} //need to cahnge it here to having my picture
                    time = {itm.time}
                  />
                );
              } else {
              return (
                  <ChatItem
                    animationDelay={index + 2}
                    key={itm.key}
                    user={itm.type ? itm.type : "me"}
                    msg={itm.msg}
                    image={this.props.state.chat_users[this.props.state.user_chat].image}
                    fileType = {itm.fileType}
                    time = {itm.time}
                  />
              );
              }
            })}
            <div ref={this.messagesEndRef} />
          </div>
        </div>

        <div className="content__footer">
          <div className="sendNewMessage">
          
            <button className="addFiles" onClick={() => this.setState({popup: true})}>
            </button>

            <input
              type="text"
              placeholder="Type a message here"
              onChange={this.onStateChange}
              value={this.state.msg}
            />
            <button className="btnSendMsg" id="sendMsgBtn" onClick={() => this.printButton()}>
            </button>
          </div>
        </div>
      </div>
    );
  }
}