import React, { Fragment } from 'react';
// redux
import { useSelector, useDispatch } from 'react-redux';
import { setAuth } from './redux-toolkit/slices/auth';
// components
import LogIn from './components/login';
import SingUp from './components/signup';
import Home from './components/Home';
// styled components
import { Div } from './styled-components/app';

function App() {
  const auth = useSelector(state => state.auth.value);
  const dispatch = useDispatch();
  
  const goToHome = () => {  // function to go to home section from SigIn or Log in button "left"
    dispatch(setAuth({
      logIn: false,
      signUp: false,
      home: true
    }))
  }
  const goToLogIn = () => {  // function to go to home section from SigIn or Log in button "left"
    dispatch(setAuth({
      logIn: true,
      signUp: false,
      home: false
    }))
  }
  return (
    <Fragment>
      {/* <button onClick={() => dispatch(setAuth({
        logIn: true,
        signUp: false,
        home: false
      } )) } >log in</button>
      <button onClick={() => dispatch(setAuth({
        logIn: false,
        signUp: true,
        home: false
      } )) } >sign up</button>
      <button onClick={() => dispatch(setAuth({
        logIn: false,
        signUp: false,
        home: true
      } )) } >home</button> */}
        <Div>
          <Home state={auth.home} />
          <LogIn state={auth.logIn} goToHome={goToHome} /> 
          <SingUp state={auth.signUp} goToHome={goToHome} goToLogIn={goToLogIn} />
        </Div>
    </Fragment>
  )
}

export default App;
