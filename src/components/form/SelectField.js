import React, { useState } from 'react'
import { PropTypes } from 'prop-types';

function SelectField(props) {
  const [selected, setSelected] = useState('')

  const optionlist = props.options.map(option => 
    <option value={option.value} key={option.label}>{option.label}</option>
  )
  return (
    <>
      <label>{ props.label }</label>
      <select className={ props.class } name={ props.name } value={selected} onChange={e => setSelected(e.target.value) } onBlur={props.onChange} aria-required="true" required={props.required}>
          <option value="">{props.placeholder? props.placeholder: 'Select from the list'}</option>
          {optionlist}
      </select>
    </>
  )
}
SelectField.propTypes = {
  class: PropTypes.string,
  name: PropTypes.string,
  placeholder: PropTypes.string,
  label: PropTypes.string,
  onChange: PropTypes.func
};
export default SelectField;