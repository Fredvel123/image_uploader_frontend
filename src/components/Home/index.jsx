import React, { Fragment } from 'react';
// styled componentes
import { HomeStyled } from '../../styled-components/home';
// redux
import { useSelector } from 'react-redux';
// components
import Register from './Register';
import Profile from './Profile';


function Home({ state }) {
  const logIn = useSelector(state => state.logIn.value);
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
