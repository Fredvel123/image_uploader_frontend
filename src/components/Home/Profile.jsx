import React, { Fragment, useEffect, useState } from 'react'
// redux
import { useDispatch, useSelector } from 'react-redux'
import {setIsLogged} from '../../redux-toolkit/slices/isLogged'

function Profile() {
  const [profile, setprofile] = useState([]);
  const logIn = useSelector(state => state.logIn.value);  
  const dispatch = useDispatch();

  useEffect(() => {
    getUserData( logIn.token );
  }, [])
  const getUserData = async ( _token) => {
    const URL = await fetch('https://image-uploader-freddy.herokuapp.com/api/users/profile', {
      headers: {
        "access-token": _token
      }
    });
    const RES_DATA = await URL.json();
    setprofile(RES_DATA);
  }

  const logOut = () => {
    dispatch(setIsLogged({
        isLogged: false,
        token: ""
    }));
  }
  return (
    <Fragment>
      { profile ? 
        <div>
          <h2>{profile.name}</h2>
          <img src={profile.avatar} alt="" width="320px" />
        </div>
      : null}
      <button onClick={logOut} >Log Out</button>
    </Fragment>
  )
}

export default Profile
