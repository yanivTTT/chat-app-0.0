import React, {useState} from 'react'
import {useNavigate, Link} from 'react-router-dom';
import allChatUsers from './allChatUsers';
import users from './users';

function Register({error, setUser, loogedInUser, setLoogedInUser}) {
  var nav = useNavigate();
  const [details, setDetails] = useState({name: "", password: "", confirmPassword: ""});

  const submitHandler = e => { 
    e.preventDefault();
    Login(details);

  }
  const Login = details => {
      if(valid(details)) {
        
        allChatUsers.push(    {
            image:
              "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTA78Na63ws7B7EAWYgTr9BxhX_Z8oLa1nvOA&usqp=CAU",
            id: 0,
            name: details.name,
            active: true,
            password : details.password
          })
          console.log(allChatUsers)
          nav("/chat");
      }


  }

  const valid = details => {
    console.log("chek if valid")
    return true
  }

  
  return (
    <form onSubmit={submitHandler}>
        <div className='form-inner'>
            <h2>register</h2>
            {/* Error */}
            <div className='form-group'>
                <label htmlFor='name'>Name:</label>
                <input type="text" name ="name" id="name" onChange={e => setDetails({...details, name: e.target.value})} value={details.name}/>
            </div>
            <div className='form-group'>
                <label htmlFor='password'>Password:</label>
                <input type="password" name ="password" id="password"onChange={e => setDetails({...details, password: e.target.value})} value={details.password}/>
            </div>
            <div className='form-group'>
            <label htmlFor='password'>Password:</label>
            <input type="password" name ="confirm-password" id="confirm-password"onChange={e => setDetails({...details, confirmPassword: e.target.value})} value={details.confirmPassword}/>
        </div>
            <input type="submit" value="LOGIN"></input>
        </div>

    </form>
  )
}

export default Register