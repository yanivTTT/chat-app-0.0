//this showes the list of chat in our app
import React, { Component } from 'react'
import "./chatList.css"
import ChatListItems from './ChatListItems';

export default class ChatList extends Component {
  //it wil be smart to add also  a chat to each one that getting passed of in ChatContent

  constructor(props) {
    super(props);
    this.state = {
      allChats: this.props.allChatUsers,
    };
  }

  userAdd() {
    this.setState({allChats: this.props.addToUsers()})
  }


  render() {
    return (
    <div className='main__chatlist'>
        <button className='btn' onClick={() => this.userAdd()}>
        <span>New Conv</span>
        </button>
        <div className='chatlist_heading'>
            <h2>{this.props.state.user.name}</h2>
            <button className='btn-nobg'>
            </button>
        </div>
        <div className='chatlist_items'>
            {
            
              this.state.allChats.map((item, index) => {
              if(item.active == true) {
              return (
              <ChatListItems
                name={item.name}
                key={item.id}
                animationDelay={index + 1}
                active={item.active ? "active" : ""}
                image={item.image}
                changeChat = {this.props.changeChat.bind(this)}
              />
            );
            }})}
        </div>

    </div>
    )
  }
}
