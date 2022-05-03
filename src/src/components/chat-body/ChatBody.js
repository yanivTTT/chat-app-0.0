import React, {Component, useState} from "react";
import ChatContent from "../chatContent/ChatContent";
import ChatList from "../chatList/ChatList";
import "./chatBody.css"
export default class chatBody extends Component {

    constructor() {
      
        super()
        this.endCode = this.endCode.bind(this);
        this.state = {
            user_chat : localStorage.getItem("logUser"), 
            chat_users : "",
            chatItms : "",
            user : 
            {
              name: "Name",
            image: "https://pbs.twimg.com/profile_images/1116431270697766912/-NfnQHvh_400x400.jpg"
            }
        }
    }
    changeChat(chatId) {
        for(let i = 0; i < this.state.chat_users.length; i++){
          if(this.state.chat_users[i].active) {
              if(chatId == 0){
                this.setState({user_chat : i});
              }
            chatId -= 1;
          }
        }
        
        console.log(this.state.user_chat);
    }

    addToChat(chat) {
        this.setState(
            {chatItms : chat}
            )
    }

    addToUsers() {
      console.log("need to add user: ");
        let newUserChat
        var nameOfUser = window.prompt("what user you want to add?");
        for(let i = 0; i< this.state.chat_users.length; i++) {
          if(this.state.chat_users[i].name == nameOfUser) {
            console.log("got here")
            newUserChat = this.state.chat_users
            newUserChat[i].active = true;
          }
        }
        this.setState({chat_users: newUserChat})
        return(this.state.chat_users);
    }
    

    endCode() {
      this.props.Logout(this.state);
    }

    render() {
      console.log(this.props.user)
        this.state.user.name = this.props.user.name
        this.state.chat_users = this.props.user.info.chat_users
        this.state.chatItms = this.props.user.info.chatItms
        //this.state.user.
        return (
            <div className="main__chatbody">
              <ChatList 
                allChatUsers = {this.state.chat_users}
                changeChat = {this.changeChat.bind(this)}
                state = {this.state}
                addToUsers = {this.addToUsers.bind(this)}
              />
             chat:
              <ChatContent
                state = {this.state}
                addToChat = {this.addToChat.bind(this)}
                        
              /> 
              <button className="logout-btn" onClick={this.endCode}>Logout</button>
            </div>
        )
    }
}