import React, { Fragment } from 'react'
// styled components
import { ImageStyled } from '../../styled-components/sigUp/ImagesForm';
// icons
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faIdBadge} from '@fortawesome/free-solid-svg-icons';
import { Button } from '../../styled-components/sigUp';

function ImageInput({ setState, state, signUpButton, text }) {
  // code to add an image.
  const addImage = e => {
    const reader = new FileReader();
    reader.readAsDataURL(e.target.files[0]);
    reader.onload = e => {
      e.preventDefault();
      setState(e.target.result)
    }
  }
  return (
    <Fragment>
      <ImageStyled state={state} status={signUpButton}  >
        <label htmlFor="file">
          { signUpButton ?
            <FontAwesomeIcon icon={faIdBadge} />
          : null}
          {text}
        </label>
        <input
          id="file"
          type="file"
          accept="image/*"
          onChange={ e => addImage(e)} />
        { signUpButton ?
          <Button>Sign Up</Button>
        : null}
      </ImageStyled>            
    </Fragment>
  )
}

export default ImageInput;