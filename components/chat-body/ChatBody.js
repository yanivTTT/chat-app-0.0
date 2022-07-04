import React, {Component, useState} from "react";
import ChatContent from "../chatContent/ChatContent";
import ChatList from "../chatList/ChatList";
import "./chatBody.css"
export default class chatBody extends Component {
    constructor() {
        super()
        this.state = {
            user_chat : 0, 
            chat_users : [
                {
                  image:
                    "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTA78Na63ws7B7EAWYgTr9BxhX_Z8oLa1nvOA&usqp=CAU",
                  id: 1,
                  name: "Tim Hoversx",
                  active: true,
                },
                {
                  image:
                    "https://pbs.twimg.com/profile_images/770394499/female.png",
                  id: 2,
                  name: "Hamaad Dejesus",
                  active: false,
                },
                {
                  image:
                    "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRZ6tM7Nj72bWjr_8IQ37Apr2lJup_pxX_uZA&usqp=CAU",
                  id: 3,
                  name: "Eleni Hobbs",
                  active: false,
                },
                {
                  image:
                    "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRJo1MiPQp3IIdp54vvRDXlhbqlhXW9v1v6kw&usqp=CAU",
                  id: 4,
                  name: "Elsa Black",
                  active: false,
                },
                {
                  image:
                    "https://huber.ghostpool.com/wp-content/uploads/avatars/3/596dfc2058143-bpfull.png",
                  id: 5,
                  name: "Kayley Mellor",
                  active: false,
                }
              ],
        chatItms : [
            [
            {
            key: 1,
            image:
                "https://pbs.twimg.com/profile_images/1116431270697766912/-NfnQHvh_400x400.jpg",
            type: "",
            msg: "Hi Tim, How are you?",
            },
            {
            key: 2,
            image:
                "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTA78Na63ws7B7EAWYgTr9BxhX_Z8oLa1nvOA&usqp=CAU",
            type: "other",
            msg: "I am fine.",
            },
            {
            key: 3,
            image:
                "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTA78Na63ws7B7EAWYgTr9BxhX_Z8oLa1nvOA&usqp=CAU",
            type: "other",
            msg: "What about you?",
            },
            {
            key: 4,
            image:
                "https://pbs.twimg.com/profile_images/1116431270697766912/-NfnQHvh_400x400.jpg",
            type: "",
            msg: "Awesome these days.",
            },
            {
            key: 5,
            image:
                "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTA78Na63ws7B7EAWYgTr9BxhX_Z8oLa1nvOA&usqp=CAU",
            type: "other",
            msg: "Finally. What's the plan?",
            },
            {
            key: 6,
            image:
                "https://pbs.twimg.com/profile_images/1116431270697766912/-NfnQHvh_400x400.jpg",
            type: "",
            msg: "what plan mate?",
            },
            {
            key: 7,
            image:
                "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTA78Na63ws7B7EAWYgTr9BxhX_Z8oLa1nvOA&usqp=CAU",
            type: "other",
            msg: "I'm taliking about the tutorial",
            },
        ],
        [
            {
            key: 1,
            image:
                "https://pbs.twimg.com/profile_images/1116431270697766912/-NfnQHvh_400x400.jpg",
            type: "",
            msg: "Hi Tomer, How are you?",
            },
            {
            key: 2,
            image:
                "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTA78Na63ws7B7EAWYgTr9BxhX_Z8oLa1nvOA&usqp=CAU",
            type: "other",
            msg: "I am fine.",
            }
        ],
        [],
        [],
        []
        
    
    ],
        user : {name: "Name",
                image: "https://pbs.twimg.com/profile_images/1116431270697766912/-NfnQHvh_400x400.jpg"}
        }
    }
    changeChat(chatId) {
        this.setState({user_chat : chatId});
        console.log(this.state.user_chat);
    }

    addToChat(chat) {
        this.setState(
            {chatItms : chat}
            )
    }

    render() {
        return (
            <div className="main__chatbody">
            <ChatList 
            allChatUsers = {this.state.chat_users}
            changeChat = {this.changeChat.bind(this)}
            state = {this.state}
            />
             chat:
            <ChatContent
                        state = {this.state}
                        addToChat = {this.addToChat.bind(this)}
                         
                        /> 
            </div>
        )
    }
}