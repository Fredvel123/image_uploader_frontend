import React, { Fragment } from 'react';
// styled components
import { ButtonBox, RegisterStyled } from '../../styled-components/home/register';
// redux
import { useDispatch } from 'react-redux';
import { setAuth } from '../../redux-toolkit/slices/auth';

function Register() {
//   const auth = useSelector(state => state.auth.value);
  const dispatch = useDispatch();

  const goToLogIn = () => {
    dispatch(setAuth({
      logIn: true,
      signUp: false,
      home: false
    }))  
  }
  const goToSignUp = () => {
    dispatch(setAuth({
      logIn: false,
      signUp: true,
      home: false
    }))  
  }
  return (
    <Fragment>
      <RegisterStyled>
        <h2>Image Uploader</h2>
        <h3>
          You don't have access here, you can create a account or 
          if you already have a account, please make Log In in the button bellow
        </h3>
        <ButtonBox>
          <button onClick={goToSignUp} > Sign Up </button>
          <button onClick={goToLogIn} > Log In </button>
        </ButtonBox>
      </RegisterStyled>           
    </Fragment>
  )
}

export default Register
