import React, { Fragment, useState } from 'react'
// styled components
import { Button, ButtonLeft, Form, Header, SignIn } from '../../styled-components/sigUp';
// icons 
import { faAngleLeft } from '@fortawesome/free-solid-svg-icons'
// components
import Forms from './Forms';
import ImageInput from './ImageInput';

function LogIn() {
  const [name, setName] = useState({isValid: null, value: ""});
  const [password, setPassword] = useState({isValid: null, value: ""});
  const [newPassword, setNewPassword] = useState({isValid: null, value: ""});
  const [email, setEmail] = useState({isValid: null, value: ""});
  const [avatar, setAvatar] = useState(null);
  // regular expressions
  const regularExpressions = {
    user: /^[a-zA-Z0-9]{4,16}$/, // Letras, numeros, guion y guion_bajo
    link:  /^(ftp|http|https):\/\/[^ "]+$/, // para validar links
    name: /^[a-zA-ZÀ-ÿ\s]{1,40}$/, // Letras y espacios, pueden llevar acentos.
    password: /^.{4,12}$/, // 4 a 12 digitos.
    email: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
    phone: /^\d{7,14}$/ // 7 a 14 numeros.
  }  
  const handlerSubmit = e => {
    e.preventDefault();
    validatePassword();
    console.log(name);
    console.log(email);
    console.log(avatar);
    console.log(password);
    console.log(newPassword);
  }

  // validate password.

  // to validate a password is SO, SO important do this steps,
  // cuz if you don't do it these steps, your validations will not valid
  const validatePassword = () => {
    if(password.value.length > 0) {
      if(password.value !== newPassword.value) {
        setNewPassword((prevState) => {  // <=== this code 
          return {...prevState, isValid: false} //  is very
        }) // important
      } else {
        setNewPassword((prevState) => {
          return {...prevState, isValid: true}
        })
      }
    }
  }  
  // validations password ends

  return (
    <Fragment>
      <SignIn>
        <Header>
          <ButtonLeft icon={faAngleLeft} />
          <h3>Sign Up</h3>
        </Header>
        <form action="" onSubmit={handlerSubmit}>
          <div>
            <Forms
              state={name}
              setState={setName}
              type="text"
              title="Name"
              placeholder="Alex Montreal"
              expression={regularExpressions.name} />
            <Forms
              state={email}
              setState={setEmail}
              type="email"
              title="Email"
              placeholder="AlexMontreal@gmail.com"
              expression={regularExpressions.email} />
            <Forms
              state={password}
              setState={setPassword}
              type="password"
              title="Password"
              placeholder="write your password"
              expression={regularExpressions.password} />
            <Forms
              state={newPassword}
              setState={setNewPassword}
              type="password"
              title="Repeate Password"
              callback={validatePassword}
              placeholder="write your password again" />
            <ImageInput
              state={avatar}
              setState={setAvatar} />
          </div>
          {/* <Button>send</Button> */}
        </form>
      </SignIn>
    </Fragment>
  )
}

export default LogIn;
