import React from 'react'
import {
    CircularProgressbar,
    buildStyles
}  from 'react-circular-progressbar'
import 'react-circular-progressbar/dist/styles.css'

function CircleProgressBar(props) {
  const style = {
    width: props.width,
    height: props.height
  }
  return (
  <div className="col-12 col-sm-6 col-md-4">
    <div className="coverage1-1 d-flex">
      <div style={style}>
          <CircularProgressbar
              value={props.percentage}
              text={`${props.percentage}%`}
              strokeWidth={5}
              styles={buildStyles({
              //   // Rotation of path and trail, in number of turns (0-1)
              //   rotation:`${props.rotation? props.rotation: '0.25'}`,
              //   // Whether to use rounded or flat corners on the ends - can use 'butt' or 'round'
              //   strokeLinecap: 'butt',
              //   // Text size
              //   textSize:  `${props.textSize? props.textSize: '16'}px`,
              //   // How long animation takes to go from one percentage to another, in seconds
              //   pathTransitionDuration: 0.5,
              //   // Can specify path transition in more detail, or remove it entirely
              //   // Colors
                pathColor: `${props.pathColor? props.pathColor: '#20c997'}`,
              //   textColor: `${props.textColor? props.textColor: '#f88'}`,
              //   trailColor:  `${props.textColor? props.textColor: '#d6d6d6'}`,
              //   backgroundColor: `${props.textColor? props.textColor: '#3e98c7'}`,
              })}
          />
      </div>
      <div className="coverageText">
          <p>{props.title} Value <br />Coverage</p>
          <p>
              <span>Rating</span>
              <span>{ props.rate }</span>
          </p>
      </div>
    </div>
   </div>
  )
}

export default CircleProgressBar;