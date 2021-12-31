import React, { Fragment, useEffect, useState } from 'react'
// redux
import { useDispatch, useSelector } from 'react-redux';
import isLogged, {setIsLogged} from '../../redux-toolkit/slices/isLogged';
// styled components
import { Title, ProfileStyled, LogOut, ErrorMessage, AddImage, WindowToAddImg, CloseWindow, CardsImages } from '../../styled-components/home/profile';
// icons
import userUnknow from './user.png';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
// components
import ImageInput from '../signup/ImageInput';



function Profile() {
  const [profile, setprofile] = useState([]);
  const [images, setimages] = useState([]);
  const [window, setwindow] = useState(false);
  // redux
  const logIn = useSelector(state => state.logIn.value);  
  const dispatch = useDispatch();
  const [addImg, setAddImg] = useState(null)
  useEffect(() => {
    getUserData( logIn.token );
    getImages( logIn.token );
    testToken();
  }, [])
  const getUserData = async ( _token) => {
    const URL = await fetch('https://image-uploader-freddy.herokuapp.com/api/users/profile', {
      headers: {
        "access-token": _token
      }
    });
    const RES_DATA = await URL.json();
    setprofile(RES_DATA);
    closeWindow();
  }
  const testToken = () => {
    if (profile.isLogged === false ) {
      dispatch(setIsLogged(profile));
    }
  }
  const logOut = () => {
    dispatch(setIsLogged({
      isLogged: false,
      token: ""
    }));
  }
  // code to get images
  const getImages = async _token => {
    const URL = await fetch('https://image-uploader-freddy.herokuapp.com/api/images', {
      headers: {
        "access-token": _token
      }
    })
    const DATA = await URL.json();
    setimages(DATA);
    console.log(images);
  }
  // close window 
  const closeWindow = () => {
    setAddImg(false)
    setwindow(!window)
  }
  // code to connect with data base and upload image
  const uploadImage = async ( _token, _image, _author ) => {
    const URL = await fetch('https://image-uploader-freddy.herokuapp.com/api/images/add', {
      method: 'POST',
      headers: {
        "Content-Type": "application/json",
        "access-token": _token
      },
      body: JSON.stringify({
        "image": _image,
        "author": _author
      })
    })
    const RES_DATA =  await URL.json();
    console.log(RES_DATA);
    getImages( logIn.token );
  }
  return (
    <Fragment>
      <Title>Image Uploader</Title>
      { profile ? 
        <ProfileStyled>
          <img src={ profile.avatar ? profile.avatar : userUnknow } alt="" width="320px" /> 
          <h3>{profile.name}</h3>
          <h4>{profile.email}</h4>
        </ProfileStyled>
      : null}
      { images.length > 0 ?   
        <CardsImages>
          {images.map(item => <img src={item.image} alt="" /> )}
        </CardsImages>
      : <ErrorMessage>You still don't have added images, you can add it in the button below</ErrorMessage> }
      
      <LogOut onClick={logOut} >Log Out</LogOut>
      <AddImage onClick={closeWindow} >Add Img </AddImage>

      <WindowToAddImg state={window} >
        <CloseWindow onClick={closeWindow}  icon={faTimes} state={window} />
        {addImg ?
          <img src={addImg} alt=""  /> 
        : <ImageInput state={addImg} setState={setAddImg} text="Add Img" signUpButton={false}  />}
        <button onClick={() => uploadImage( logIn.token, addImg, profile._id ) } >Upload Image</button>
      </WindowToAddImg>
      {/* <button onClick={() => getUserData( logIn.token ) } >data</button> */}
    </Fragment>
  )
}

export default Profile
