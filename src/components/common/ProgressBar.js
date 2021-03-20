import React, { useState, useEffect } from 'react'
import { useSelector } from 'react-redux'
import PropTypes from 'prop-types'
import $ from 'jquery'   
function setProgressBar(curStep)
	{
		var i = 3.03;
		if (curStep >0 && curStep <= 11)
		{
			$(".progress-bar").css("width", i * curStep +"%");
			$(".stepsName ul li:nth-child(2)").removeClass('live');
			$(".stepsName ul li:nth-child(3)").removeClass('live');
		}
		else if (curStep > 11 && curStep <= 14)
		{
			var j = i * 11;
			var k = 11.11;
			var counter = curStep - 11;
			$(".progress-bar").css("width", j + (k * counter) + "%");
			$(".stepsName ul li:nth-child(2)").addClass('live');
			$(".stepsName ul li:nth-child(3)").removeClass('live');
		}
		else if (curStep > 14)
		{
			var m = i * 22;
			var l = 1.75;
			var counter1 = curStep - 14;
			$(".progress-bar").css("width", m + (l * counter1) + "%");
			$(".stepsName ul li:nth-child(3)").addClass('live');
		}
	};
function ProgressBar() {
	const count = useSelector(state => state.count);
	useEffect(() => {
    // Update the document title using the browser API
    setProgressBar(count);
  }, [count]);
  return (
    <>
      <div className="progress">
          <div className="progress-bar progress-bar-animated" role="progressbar" aria-valuenow={ count } aria-valuemin="0" aria-valuemax="100"></div>
      </div>
      <div className="stepsName">
          <ul>
              <li className="live"><span className="circle"></span><span className="textli">Basic Details</span></li>
              <li><span className="circle"></span><span className="textli">Asset & Liability Details</span></li>
              <li><span className="circle"></span><span className="textli">Policy Details</span></li>
              <li><span className="circle"></span><span className="textli">Finish</span></li>
          </ul>
      </div>
    </>
  )
}
ProgressBar.propTypes = {
  current_value: PropTypes.number,
};
export default ProgressBar;