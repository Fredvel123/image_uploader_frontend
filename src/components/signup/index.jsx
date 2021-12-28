import React, { Fragment, useState } from 'react'
// components
import Forms from './Forms';
import ImageInput from './ImageInput';

function LogIn() {
  const [name, setName] = useState({isValid: null, value: ""});
  const [password, setPassword] = useState({isValid: null, value: ""});
  const [newPassword, setNewPassword] = useState({isValid: null, value: ""});
  const [email, setEmail] = useState({isValid: null, value: ""});
  const [avatar, setAvatar] = useState({isValid: null, value: ""});
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
    console.log(name, email, password, avatar, newPassword);
  }
  // validate password.
  const validatePassword = () => {
    if(!password.value.lenght === 0) {
       if(password.value === newPassword.value) {
          setNewPassword({...newPassword, isValid: true})
       } else {
          setNewPassword({...newPassword, isValid: false})
       }
    } 
  }
  
  return (
    <Fragment>
      <div>
        <button>getout</button>
        <h2>Log In</h2>
      </div>
      <div>
        <form action="" onSubmit={handlerSubmit} >
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
            placeholder="write your password again"
            expression={regularExpressions.password} />
          <ImageInput 
            state={avatar}
            setState={setAvatar} />
          <button>send</button>
        </form>  
      </div>
    </Fragment>
  )
}

export default LogIn;
