import React from 'react';
import './App.css';
import Nav from './components/nav/Nav';
import ChatBody from './components/chat-body/ChatBody';

function App() {
  return (
    <div className="__main">
    <Nav></Nav>
    <ChatBody></ChatBody>
    </div>
  );
}

export default App;
