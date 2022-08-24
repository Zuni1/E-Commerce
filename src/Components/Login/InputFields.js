import React from 'react'
import { Field, ErrorMessage } from "formik";

const InputFields = ({name, label, type, placeholder}) => {

  const style = {
    text: {
      width: '100%', 
      height: '30px',
      color: 'green',
      borderRadius: 5,
      border: 0,
      paddingLeft: 5
    }
  }

  return (
    <>
      <Field 
        style={style.text}
        name={name}
        label={label}
        placeholder={placeholder}
        type={type}
      /><br/>
      <span style={{color: 'red'}}> {<ErrorMessage name={name} />} </span><br/>
    </>
  )
}

export default InputFields