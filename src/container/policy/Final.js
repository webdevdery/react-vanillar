import React, { useState, useEffect } from 'react'
import { useHistory, Link } from "react-router-dom";
import { PropTypes } from 'prop-types';
import { useDispatch, useSelector } from "react-redux";
import {  init_current , load_results_module } from '../../actions'

import {
    CircularProgressbar,
    buildStyles
}  from 'react-circular-progressbar'
import 'react-circular-progressbar/dist/styles.css'
import vector from '../../assets/img/Vector.png'
import CircleProgressBar from '../../components/common/CircleProgressBar'

const Final = (props) => {
    let history = useHistory();
    const dispatch = useDispatch();
    const personal_info = useSelector(state => state.basic_detail)
    const auth = useSelector(state => state.auth)
    const results = useSelector(state => state.final)
    useEffect(() => {
        if(!auth) {
            dispatch(init_current())
            history.push('/');
        }
        dispatch(load_results_module())
    });
    const style = {
        width: 200, 
        height: 200,
        zIndex: 1
    }
    return (
        <div className="last_step first">
            <form onSubmit={e => e.preventDefault()}>
                <div className="col-12 col-sm-12 col-md-4 fixedBox">
                    <div className="row d-flex justify-content-center bgblue">
                        <div className="col-md-12">
                            <div className="bg-img">
                                <div style={style}>
                                    <CircularProgressbar
                                        value={Number(results.module2.adequacy_score).toFixed(0)}
                                        text={`${Number(results.module3.ci_leading_to_loss_emp).toFixed(0)}%`}
                                        strokeWidth={5}
                                        background={true}
                                        styles={buildStyles({
                                            // Whether to use rounded or flat corners on the ends - can use 'butt' or 'round'
                                            // Colors
                                            pathColor: '#e83e8c',
                                            trailColor: 'none',
                                            backgroundColor: '#ffffff',
                                            background: {
                                                fill: '#ffffff',
                                            },
                                        })}
                                    />
                                </div>
                            </div>

                            <h4 className="text-center w-100 overall">Overall Score</h4>
                            <div className="resultText">
                                <p className="mb-0"><span>Overall Score</span> (taking the score appearing
                                    maximum)</p>
                                <h1>{results.module3.ci_not_leading_to_loss_emp}</h1>
                            </div>
                            <div className="resultText">
                                <p className="mb-0"><span>Overall Score</span> (weighted average approach)</p>
                                <h1>{results.module3.ti_adequacy_rating_assigned}</h1>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="col-12 col-sm-12 col-md-8 offset-md-4">
                    <div className="width90">

                        <div className="formInsights">
                            <h4>Form <br />Insights</h4>
                            <div className="nameAge">
                                <p>
                                    <span>Name:</span>
                                    <span>{ personal_info.proposer_name }</span>
                                </p>
                                <p>
                                    <span>Age:</span>
                                    <span>{ personal_info.proposer_age }</span>
                                </p>
                            </div>
                        </div>

                        <div className="coverage1 d-flex align-items-center justify-content-center flex-wrap">

                            <CircleProgressBar
                                width={80}
                                height={80}
                                title="Hello"
                                pathColor="green"
                                rate={results.module3.ci_adequacy_rating}
                                percentage={Number(results.module3.ci_adequacy_score).toFixed(0)}
                                />
                            <CircleProgressBar
                                width={80}
                                height={80}
                                title="Hello"
                                rate={results.module3.pd_adequacy_rating}
                                percentage={Number(results.module3.pd_adequacy_score).toFixed(0)}
                                />
                            <CircleProgressBar
                                width={80}
                                height={80}
                                title="Hello"
                                rate={results.module3.ti_efficiency_score}
                                percentage={Number(results.module3.ti_adequacy_score).toFixed(0)}
                                />
                            <div className="openModal">
                                <Link to="/">
                                    <img src={ vector } alt="Vector" />
                                </Link>
                            </div>
                        </div>

                        <div className="coverage2 d-flex align-items-center justify-content-center flex-wrap">
                            <CircleProgressBar
                                width={80}
                                height={80}
                                title="Hello"
                                pathColor="green"
                                rate={results.module4.efficiency_score}
                                percentage={Number(results.module4.adequacy_score).toFixed(0)}
                                />
                            <CircleProgressBar
                                width={80}
                                height={80}
                                title="Hello"
                                rate={results.module5.prop_adequacy_rating}
                                percentage={Number(results.module5.prop_adequacy_score).toFixed(0)}
                                />
                            <CircleProgressBar
                                width={80}
                                height={80}
                                title="Hello"
                                rate={results.module5.prop_efficieny}
                                percentage={Number(results.module5.prop_content_adequacy_score).toFixed(0)}
                                />
                            <div className="openModal">
                                <Link to="/">
                                    <img src={ vector } alt="Vector" />
                                </Link>
                            </div>
                        </div>

                        <div className="coverage3 d-flex align-items-center justify-content-center flex-wrap">
                            <CircleProgressBar
                                width={80}
                                height={80}
                                title="Hello"
                                pathColor="green"
                                rate={results.module6.efficiency_score}
                                percentage={Number(results.module6.adequacy_score).toFixed(0)}
                                />
                            <CircleProgressBar
                                width={80}
                                height={80}
                                title="Hello"
                                rate={results.module1.efficiency_score}
                                percentage={Number(results.module1.adequacy_score).toFixed(0)}
                                />
                            <CircleProgressBar
                                width={80}
                                height={80}
                                title="Hello"
                                rate="BB"
                                percentage="30"
                                />
                            <div className="openModal">
                                <Link to="/">
                                    <img src={ vector } alt="Vector" />
                                </Link>
                            </div>
                        </div>

                    </div>
                </div>
            </form>
        </div>
    )
}

Final.propTypes = {
  name: PropTypes.string,
  nextPage: PropTypes.string,
  prevPage: PropTypes.string
};

export default Final;