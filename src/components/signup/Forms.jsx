import React, { Fragment } from 'react'

function Forms({title, state, setState, placeholder, expression, type}) {
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
  }
  return (
    <Fragment>
      <div>
       <label htmlFor="">{title}</label>
       <input 
        type={type}
        value={state.value}
        placeholder={placeholder}
        onChange={handlerChange}
        onKeyUp={validations}
        onBlur={validations}
        required />
      </div>
    </Fragment>
  )
}

export default Forms
