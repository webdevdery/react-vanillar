import React from 'react'
import PropTypes from 'prop-types'

function Step(className, step_id, label, svg) {
  return (
    <span class={ className }>
      <div className="d-flex flex-wrap align-items-center">
          <div className="spaceRight">
              { svg }
          </div>
          <div className="listName">
              <small>{ step_id }</small>
              <p className="mb-0">{ label }</p>
          </div>
      </div>
    </span>
  )
}
Step.propTypes = {
  step_id: PropTypes.string.isRequired,
  className: PropTypes.string,
  label: PropTypes.string.isRequired,
};
export default Step;
