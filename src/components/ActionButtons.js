import React from 'react'
import leftBtn from '../assets/img/left.png'
import rightBtn from '../assets/img/right.png'

function ActionButtons (props) {
  return (
    <div className="actionButtons">
        <button type="button" onClick={() => props.onPreview()} name="previous" className="previous previous_li action-button-previous">
            <img src={ leftBtn } alt="Previous" /> <span>Previous Step</span>
        </button>
        <button type="button" onClick={() => props.onNext()} name="next" className="next action-button">
            <span>Next Step</span> <img src={ rightBtn } alt="Next" />
        </button>
    </div>
  )
}
export default ActionButtons;
