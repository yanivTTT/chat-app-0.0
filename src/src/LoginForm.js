import React, {useState} from 'react'
import {useNavigate, Link} from 'react-router-dom';
import allChatUsers from './allChatUsers';
import users from './users';

function LoginForm({error, setUser, loogedInUser, setLoogedInUser}) {
  var nav = useNavigate();
  const [details, setDetails] = useState({name: "", password: ""});

  const submitHandler = e => { 
    e.preventDefault();
    Login(details);

  }
  const Login = details => {
    console.log("trying to log in")
    for(let i = 0; i < allChatUsers.length; i ++){
      //finding the user history
      if(details.name == allChatUsers[i].name && details.password == allChatUsers[i].password ) {
        for(let j = 0; j<users.length; j++){
            if(allChatUsers[i].name == users[j].name){
            allChatUsers[i].active = false;
            // setUser({name: users[j].name, info: users[j].info})
            localStorage.setItem("user", {name: users[j].name, info: users[j].info});
            console.log(localStorage.getItem("user"));
            setLoogedInUser(j);
            localStorage.setItem("logUser", j);
            nav("/chat");
            break;
          }
          else {
            //in case we wont a user that we didnt set
            for(let x = 0; x <allChatUsers.length; x++ ) {
              allChatUsers[x].active = false;
            }
            users.push({name: details.name,
              info: {user_chat : 0, 
              chat_users : allChatUsers,
              chatItms : [[{}],[{}],[{}],[{}],[{}]],
              user:  {
                name: "Name",
              image: allChatUsers[i].image
              }
            }})
            // setUser({name: users[j+1].name, info: users[j+1].info})
            localStorage.setItem("user", {name: users[j+1].name, info: users[j+1].info});
            setLoogedInUser(j+1);
            localStorage.setItem("logUser", j + 1);
            nav("/chat");
          }
        }
      }
    }
  }
  return (
    <form onSubmit={submitHandler}>
        <div className='form-inner'>
            <h2>Login</h2>
            {/* Error */}
            <div className='form-group'>
                <label htmlFor='name'>Name:</label>
                <input type="text" name ="name" id="name" onChange={e => setDetails({...details, name: e.target.value})} value={details.name}/>
            </div>
            <div className='form-group'>
                <label htmlFor='password'>Password:</label>
                <input type="password" name ="password" id="password"onChange={e => setDetails({...details, password: e.target.value})} value={details.password}/>
            </div>
            <input type="submit" value="LOGIN"></input>
            <u><Link to="/register">Click here</Link></u>
        </div>

    </form>
  )
}

export default LoginForm