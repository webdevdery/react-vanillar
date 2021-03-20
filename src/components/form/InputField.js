import React from 'react'
import { PropTypes } from 'prop-types';

function InputField(props) {
  return (
      <>
        <label>{ props.label }</label>
        <input 
          type={props.type} 
          className={ props.class } 
          name={ props.name } 
          placeholder={ props.placeholder } 
          value={ props.value } 
          pattern={ props.pattern } 
          onChange={ props.onChange } 
          disabled={ props.disabled } 
          required={ props.required } 
        />
        <div className="invalid-feedback">{ props.feedback }</div>

      </>
  )
}
InputField.propTypes = {
  type: PropTypes.string.isRequired,
  className: PropTypes.string,
  name: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  value: PropTypes.string,
  label: PropTypes.string,
  labelType: PropTypes.string,
  feedback: PropTypes.string,
  onChange: PropTypes.func
};
export default InputField;