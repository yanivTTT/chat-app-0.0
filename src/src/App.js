import React, {useState} from 'react';
import './App.css';
import Nav from './components/nav/Nav';
import ChatBody from './components/chat-body/ChatBody';
import LoginForm from './LoginForm';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import {useNavigate, Link} from 'react-router-dom';
import allChatUsers from './allChatUsers';
import users from './users';
import Register from './register';


function App() {

  const [user, setUser] = useState({name:"", info: ""});
  const [error, setError] = useState("");
  const [loogedInUser, setLoogedInUser] = useState(0);
  if(localStorage.getItem("logUser") && loogedInUser != localStorage.getItem("logUser")) {
    setLoogedInUser(localStorage.getItem("logUser"));
  }
  


   const Logout = userInfo => {
    console.log(userInfo);
    setUser({name:"" , info: ""});
    users[loogedInUser].info = userInfo;
    console.log("Logout");
    console.log(users)
  }

  return (
  //   <div className='App'>
  //   {(user.name != "") ? (
  //     <div className="__main">
  //     <Nav></Nav>
  //     <ChatBody user = {user}
  //               Logout = {Logout}
  //               allUserUsers = {""}
  //     ></ChatBody>
  //     </div>
  //   ) : (
  //     <div>
  //       <LoginForm Login={Login} error={error}></LoginForm>
  //       <input type="submit" value="registe"></input>
  //     </div>
  //   )}
  // </div>
      <Router>
        <Routes>
          <Route path="/" element={
            <LoginForm error={error} setUser = {setUser} loogedInUser = {loogedInUser} setLoogedInUser = {setLoogedInUser}></LoginForm>}/>
            <Route path="/register" element={
              <Register error={error} setUser = {setUser} loogedInUser = {loogedInUser} setLoogedInUser = {setLoogedInUser}></Register>}/>
            <Route path="/chat" element={
            <div className="__main">
              <ChatBody user = {users[loogedInUser]}
                Logout = {Logout}
                allUserUsers = {""}
          ></ChatBody>
          </div>} />
        </Routes>
      </Router>
    
  );
}

export default App;
