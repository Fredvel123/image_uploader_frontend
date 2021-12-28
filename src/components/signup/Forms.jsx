import React, { Fragment } from 'react';
// icons
import { faCheckCircle, faTimesCircle } from '@fortawesome/free-solid-svg-icons'
// styled components
import { DivInput, Icon, Input, Label } from '../../styled-components/sigUp/forms';


function Forms({title, state, setState, placeholder, expression, type, callback}) {
  const handlerChange = e => {
    setState({...state, value: e.target.value})
  }  
  const validations = () => {
    if(expression) {
      if (expression.test(state.value)) {
        setState({...state, isValid: true})
      } else {
        setState({...state, isValid: false})
      }
    }
    if(callback) {
      callback();
    }
  }
  return (
    <Fragment>
      <div>
        <Label htmlFor="">{title} :</Label>
        <DivInput>
          <Input
            type={type}
            value={state.value}
            placeholder={placeholder}
            onChange={handlerChange}
            onKeyUp={validations}
            onBlur={validations}
            required
            state={state.isValid} />
          <Icon icon={state.isValid ? faCheckCircle : faTimesCircle} state={state.isValid} />
        </DivInput>
      </div>
    </Fragment>
  )
}

export default Forms
