import React, { Fragment } from 'react';
//styled components
import { DivInput, Input, Label } from '../../styled-components/logIn/form'

function Forms({ setState, placeholder, type, title }) {
  const handlerChange = e => {
    setState(e.target.value)
  }
  return (
    <Fragment>
      <Label htmlFor="">{title}</Label>
      <DivInput>
        <Input
          type={type}
          placeholder={placeholder}
          required
          onChange={handlerChange}  />
       </DivInput>
    </Fragment>
  )
}

export default Forms
