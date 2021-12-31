import React, { Fragment, useEffect } from 'react';
// styled componentes
import { HomeStyled } from '../../styled-components/home';
// redux
import { setIsLogged } from '../../redux-toolkit/slices/isLogged';
import { useSelector, useDispatch } from 'react-redux';
// components
import Register from './Register';
import Profile from './Profile';


function Home({ state }) {
  const logIn = useSelector(state => state.logIn.value);
  const dispatch = useDispatch();
  
  const testTokenValid = async _token => {
    const URL = await fetch('https://image-uploader-freddy.herokuapp.com/api/users/tokenvalid', {
      headers: {
        "access-token": _token
      }
    });
    const RES_DATA = await URL.json();
    dispatch(setIsLogged( RES_DATA ))
  }
  useEffect(() => {
    // testTokenValid(logIn.token);
  }, [])

  return (
    <Fragment>
      <HomeStyled state={state} >
        { logIn.isLogged ?
          <Profile />     
        : <Register /> }
      </HomeStyled>
    </Fragment>
  )
}

export default Home
