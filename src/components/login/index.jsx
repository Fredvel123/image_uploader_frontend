import React, { Fragment, useState } from 'react'
// styled components
import { ButtonLeft, Header, LogInStyled } from '../../styled-components/logIn';
// components
import Forms from './Forms';
// icons
import { faAngleLeft } from '@fortawesome/free-solid-svg-icons';

function LogIn() {
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState({message: "", isLogged: null});

  // let's connect to my data base, through REST APIs
  const logInUser = async ( _email, _password) => {
    const URL = await fetch('https://image-uploader-freddy.herokuapp.com/api/users/login', {
      // mode: 'no-cors',
      method: 'POST',
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        "email": _email,
        "password": _password
      })
    });
    const DATA_RES = await URL.json();
    setMessage(DATA_RES);
    console.log(message);
  }

  const handlerSubmit = e => {
    e.preventDefault();
    logInUser( email, password );
  }

  return (
    <Fragment>
      <LogInStyled>
        <Header>
          <ButtonLeft icon={faAngleLeft} />
          <h3>Log In</h3>
        </Header>
        <form action="" onSubmit={handlerSubmit}>
          <Forms
            state={email}
            setState={setEmail}
            type="email"
            title="Email"
            placeholder="AlexMontreal@gmail.com" />
          <Forms
            state={password}
            setState={setPassword}
            type="password"
            title="Password"
            placeholder="write your password" />
          <button>Log In</button>
          { !message.isLogged ?
            <h4>{message.message}</h4> 
          : <h4>the user was logged successfully</h4> }
        </form>
      </LogInStyled>
      <button onClick={() => console.log(message) } >mssage</button>
    </Fragment>
  )
}

export default LogIn;
