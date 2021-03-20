import React, { useState, useEffect } from 'react'
import { useHistory } from "react-router-dom";
import { PropTypes } from 'prop-types';
import $ from 'jquery'
import { useDispatch, useSelector } from "react-redux";

import InputField from '../../components/form/InputField'
import SelectField from '../../components/form/SelectField'
import ActionButtons from '../../components/ActionButtons'

import increment, { decrement, init_current  } from '../../actions'
import { setProposer } from '../../actions/basic'

import brand from '../../assets/img/Page 5 1.png'
import thunbsup from '../../assets/img/thunbsup.png'


const Proposer = (props) => {
  let history = useHistory();
  const dispatch = useDispatch();
  const auth = useSelector(state => state.auth)
    useEffect(() => {
        if(!auth) {
            dispatch(init_current());
            history.push('/');
        }
    });
  const userName = useSelector(state => state.basic_detail.proposer_name)
  const proposer_occupation_nature = useSelector(state => state.basic_detail.proposer_occupation_nature)
  const proposer_annual_income = useSelector(state => state.basic_detail.proposer_annual_income)
  const proposer_expected_increase_annual_income = useSelector(state => state.basic_detail.proposer_expected_increase_annual_income)
  const proposer_annual_expense = useSelector(state => state.basic_detail.proposer_annual_expense)

  const [occupation, setOccupation] = useState(proposer_occupation_nature)
  const [annual_income, setAnnualIncome] = useState(proposer_annual_income)
  const [expected_increase, setExpectedIncrease] = useState(proposer_expected_increase_annual_income)
  const [annual_expense, setAnnualExpense] = useState(proposer_annual_expense)

  const handleNextButton = () => {
    if(occupation === '' || occupation === null || occupation === undefined) {
      $('form').addClass('was-validated');
      return false;
    }
    if(annual_income === '' || annual_income === null || annual_income === undefined) {
      $('form').addClass('was-validated');
      return false;
    }
    dispatch(setProposer({
        occupation: occupation,
        annual_income: annual_income,
        expected_increase: expected_increase,
        annual_expense: annual_expense
    }))
    dispatch(increment());
    history.push('/proposer-detail');
  };
  const handlePrevButton = () => {
    dispatch(decrement());
    history.push('/bio');
  };
    return (
      <>
      <ul className="progressbar">
        <li className="steps_li_1">
            <span className="active">
                <div className="d-flex flex-wrap align-items-center">
                    <div className="spaceRight">
                        <svg width="16" height="18" viewBox="0 0 16 18" fill="#E6252C" xmlns="http://www.w3.org/2000/svg">
                            <path d="M7.99979 13.1667C11.0515 13.1667 13.7206 14.4792 15.1723 16.4375L13.6373 17.1634C12.4556 15.7634 10.3723 14.8334 7.99979 14.8334C5.62729 14.8334 3.54396 15.7634 2.36229 17.1634L0.828125 16.4367C2.27979 14.4784 4.94812 13.1667 7.99979 13.1667ZM7.99979 0.666687C9.10486 0.666687 10.1647 1.10567 10.9461 1.88708C11.7275 2.66848 12.1665 3.72828 12.1665 4.83335V7.33335C12.1665 8.43842 11.7275 9.49823 10.9461 10.2796C10.1647 11.061 9.10486 11.5 7.99979 11.5C6.89472 11.5 5.83491 11.061 5.05351 10.2796C4.27211 9.49823 3.83312 8.43842 3.83312 7.33335V4.83335C3.83312 3.72828 4.27211 2.66848 5.05351 1.88708C5.83491 1.10567 6.89472 0.666687 7.99979 0.666687Z"/>
                        </svg>
                    </div>
                    <div className="listName">
                        <small>Step 1 of 5</small>
                        <p className="mb-0">Proposer Details</p>
                    </div>
                </div>
            </span>
            <span>
                <div className="d-flex flex-wrap align-items-center">
                    <div className="spaceRight">
                        <svg width="20" height="18" viewBox="0 0 20 18" fill="#606060" xmlns="http://www.w3.org/2000/svg">
                            <path d="M6.68281 16.119C3.99371 15.9669 1.85256 13.7312 1.85256 11.0044C1.85256 8.1795 4.15063 5.88124 6.97531 5.88124C8.23862 5.88124 9.4517 6.34479 10.3911 7.18648C11.476 8.15687 12.0984 9.54858 12.0984 11.0044C12.0984 12.2252 11.6605 13.4009 10.8791 14.3211C11.4333 14.6802 12.0695 14.8947 12.7326 14.9436C13.5306 13.782 13.951 12.4265 13.951 11.0044C13.951 9.48079 13.4687 8.03364 12.5562 6.8194C11.8311 5.8542 10.8662 5.09011 9.76552 4.6096C9.15549 4.34278 8.51764 4.16727 7.86064 4.08447C9.18862 3.10689 9.69644 2.28755 9.69644 1.57292C9.69644 0.715372 9.00127 0.0202026 8.14372 0.0202026C7.67774 0.0202026 7.26006 0.225721 6.97546 0.550723C6.69086 0.225721 6.27314 0.0202026 5.80721 0.0202026C4.94965 0.0202026 4.25448 0.715372 4.25448 1.57292C4.25448 2.28767 4.76246 3.10713 6.09091 4.0849C2.66077 4.52087 0 7.45776 0 11.0044C0 14.8506 3.12909 17.9797 6.97531 17.9797C7.50708 17.9797 8.02912 17.9207 8.53733 17.8044C7.83907 17.3427 7.21197 16.7743 6.68281 16.119Z"/>
                            <path d="M13.0245 4.02917C12.4927 4.02917 11.9707 4.08817 11.4625 4.20445C12.1607 4.6662 12.7878 5.23455 13.317 5.88982C16.0061 6.04197 18.1473 8.27771 18.1473 11.0044C18.1473 13.8293 15.8493 16.1276 13.0246 16.1276C11.7613 16.1276 10.5482 15.664 9.60873 14.8223C8.52381 13.8519 7.9014 12.4602 7.9014 11.0044C7.9014 9.78354 8.33935 8.60787 9.12076 7.68764C8.56656 7.32857 7.93031 7.11407 7.26722 7.06515C6.46917 8.22684 6.04883 9.58228 6.04883 11.0044C6.04883 12.528 6.53113 13.9751 7.44366 15.1894C8.16869 16.1546 9.13365 16.9187 10.2343 17.3992C11.1152 17.7844 12.0538 17.9797 13.0246 17.9797C16.8708 17.9797 19.9999 14.8506 19.9999 11.0044C19.9998 7.15826 16.8707 4.02917 13.0245 4.02917Z"/>
                        </svg>
                    </div>
                    <div className="listName">
                        <small>Step 2 of 5</small>
                        <p className="mb-0">Spouse Details</p>
                    </div>
                </div>
            </span>
            <span>
                <div className="d-flex flex-wrap align-items-center">
                    <div className="spaceRight">
                        <svg width="20" height="20" viewBox="0 0 20 20" fill="#606060" xmlns="http://www.w3.org/2000/svg">
                            <path d="M16.9341 12.757C18.6553 12.607 19.9998 11.4278 19.9998 9.99992C19.9998 8.572 18.6553 7.39279 16.9341 7.24276C16.2668 5.56617 15.0047 4.17915 13.3964 3.35568C13.3534 1.52042 11.8577 0 9.99992 0C8.14357 0 6.64643 1.51874 6.6035 3.35572C4.99516 4.17919 3.73302 5.56625 3.06576 7.24279C1.34452 7.39279 0 8.572 0 9.99992C0 11.428 1.34472 12.6072 3.06611 12.7571C3.62107 14.1481 4.59723 15.3528 5.83765 16.1911C4.8307 16.9829 4.08173 18.0362 3.69005 19.2315C3.58927 19.5389 3.75689 19.8699 4.06438 19.9707C4.37188 20.0714 4.70285 19.9038 4.80363 19.5964C5.17348 18.4678 5.93777 17.4916 6.97073 16.8194C8.96587 17.7087 11.2246 17.6556 13.1365 16.7702C14.209 17.4432 15.0007 18.4368 15.3805 19.5963C15.4813 19.9039 15.8122 20.0714 16.1198 19.9707C16.4273 19.8699 16.5949 19.539 16.4942 19.2315C16.0905 17.9994 15.3116 16.9228 14.2615 16.1248C15.4205 15.318 16.3775 14.1591 16.9341 12.757ZM18.828 9.99992C18.828 10.6844 18.1828 11.2848 17.3079 11.5084C17.5116 10.5177 17.512 9.48426 17.3079 8.4915C18.1828 8.71501 18.828 9.31544 18.828 9.99992ZM9.99992 1.17187C11.1278 1.17187 12.0624 2.02948 12.207 3.13751C10.8058 3.25794 9.64496 4.22629 9.24778 5.53461C8.37939 5.22578 7.77338 4.39926 7.77338 3.43743C7.77338 2.18823 8.7722 1.17187 9.99992 1.17187ZM1.17187 9.99992C1.17187 9.31544 1.81706 8.71501 2.69193 8.49146C2.48826 9.48215 2.48783 10.5156 2.69193 11.5083C1.81706 11.2848 1.17187 10.6844 1.17187 9.99992ZM12.8935 15.5853C9.52246 17.3362 5.32742 15.7357 4.03399 11.9946C3.09439 9.18364 4.24891 6.09605 6.79995 4.58535C7.2276 5.78382 8.30771 6.67651 9.64078 6.81682C9.96352 6.85077 10.2521 6.61593 10.285 6.29366C10.4071 5.09898 11.4509 4.21208 12.6683 4.30399C15.5322 5.64753 16.9849 8.94563 15.9658 11.9946C15.3994 13.6368 14.2623 14.8748 12.8935 15.5853Z"/>
                        </svg>
                    </div>
                    <div className="listName">
                        <small>Step 3 of 5</small>
                        <p className="mb-0">Child Details</p>
                    </div>
                </div>
            </span>
            <span>
                <div className="d-flex flex-wrap align-items-center">
                    <div className="spaceRight">
                        <svg width="17" height="19" viewBox="0 0 17 19" fill="#606060" xmlns="http://www.w3.org/2000/svg">
                            <path d="M8.66634 11.8766V13.6183C7.91211 13.3517 7.1049 13.2699 6.31251 13.3798C5.52012 13.4897 4.76567 13.7882 4.11253 14.2502C3.45939 14.7121 2.92663 15.324 2.55898 16.0345C2.19132 16.745 1.99952 17.5333 1.99967 18.3333L0.333008 18.3325C0.332749 17.3149 0.565442 16.3107 1.01326 15.397C1.46107 14.4832 2.11212 13.6841 2.91652 13.0608C3.72092 12.4376 4.65732 12.0068 5.65397 11.8014C6.65062 11.5959 7.68106 11.6214 8.66634 11.8758V11.8766ZM6.99967 10.8333C4.23717 10.8333 1.99967 8.59581 1.99967 5.83331C1.99967 3.07081 4.23717 0.833313 6.99967 0.833313C9.76217 0.833313 11.9997 3.07081 11.9997 5.83331C11.9997 8.59581 9.76217 10.8333 6.99967 10.8333ZM6.99967 9.16665C8.84134 9.16665 10.333 7.67498 10.333 5.83331C10.333 3.99165 8.84134 2.49998 6.99967 2.49998C5.15801 2.49998 3.66634 3.99165 3.66634 5.83331C3.66634 7.67498 5.15801 9.16665 6.99967 9.16665ZM11.9997 14.1666V11.6666H13.6663V14.1666H16.1663V15.8333H13.6663V18.3333H11.9997V15.8333H9.49967V14.1666H11.9997Z"/>
                        </svg>
                    </div>
                    <div className="listName">
                        <small>Step 4 of 5</small>
                        <p className="mb-0">Add Member</p>
                    </div>
                </div>
            </span>
            <span>
                <div className="d-flex flex-wrap align-items-center">
                    <div className="spaceRight">
                        <svg width="20" height="16" viewBox="0 0 20 16" fill="#606060" xmlns="http://www.w3.org/2000/svg">
                            <path d="M17.4072 4.97504C17.9233 4.44664 18.2422 3.72489 18.2422 2.92969C18.2422 1.31426 16.9279 0 15.3125 0C13.6971 0 12.3828 1.31426 12.3828 2.92969C12.3828 3.72043 12.6982 4.43852 13.2093 4.96614C12.6342 5.18954 12.1125 5.54047 11.688 5.99379C10.7635 5.03278 9.23551 5.03383 8.31195 5.99379C7.88754 5.54051 7.36578 5.18958 6.79074 4.96618C7.30172 4.43856 7.61719 3.72047 7.61719 2.92969C7.61719 1.31426 6.30293 0 4.6875 0C3.07207 0 1.75781 1.31426 1.75781 2.92969C1.75781 3.72489 2.07672 4.44664 2.59277 4.97504C1.07555 5.57739 0 7.05997 0 8.78907V14.6485C0 14.972 0.262344 15.2344 0.585938 15.2344H19.4141C19.7377 15.2344 20 14.972 20 14.6485V8.78907C20 7.05997 18.9245 5.57739 17.4072 4.97504ZM15.3125 1.17188C16.2818 1.17188 17.0703 1.96043 17.0703 2.92969C17.0703 3.89895 16.2818 4.6875 15.3125 4.6875C14.3432 4.6875 13.5547 3.89895 13.5547 2.92969C13.5547 1.96043 14.3432 1.17188 15.3125 1.17188ZM10 6.44532C10.6462 6.44532 11.1719 6.97102 11.1719 7.6172C11.1719 8.26337 10.6462 8.78907 10 8.78907C9.35383 8.78907 8.82812 8.26337 8.82812 7.6172C8.82812 6.97102 9.35383 6.44532 10 6.44532ZM4.6875 1.17188C5.65676 1.17188 6.44531 1.96043 6.44531 2.92969C6.44531 3.89895 5.65676 4.6875 4.6875 4.6875C3.71824 4.6875 2.92969 3.89895 2.92969 2.92969C2.92969 1.96043 3.71824 1.17188 4.6875 1.17188ZM1.17188 8.78907C1.17188 7.17364 2.48613 5.85938 4.10156 5.85938H5.3125C6.26715 5.85938 7.16707 6.33317 7.71238 7.10895C7.5584 7.80235 7.725 8.51763 8.16309 9.07024C7.17176 9.5404 6.48438 10.5507 6.48438 11.7188V14.0625H1.17188V8.78907ZM7.65625 14.0625V11.7188C7.65625 10.7495 8.44481 9.96095 9.41406 9.96095H10.5859C11.5552 9.96095 12.3438 10.7495 12.3438 11.7188V14.0625H7.65625ZM18.8281 14.0625H13.5156V11.7188C13.5156 10.5506 12.8282 9.5404 11.8369 9.07024C12.2746 8.51813 12.4417 7.80302 12.2876 7.10899C12.8329 6.33313 13.7327 5.85938 14.6875 5.85938H15.8984C17.5139 5.85938 18.8281 7.17364 18.8281 8.78907V14.0625Z"/>
                        </svg>
                    </div>
                    <div className="listName">
                        <small>Step 5 of 5</small>
                        <p className="mb-0">Family Details</p>
                    </div>
                </div>
            </span>
        </li>
      </ul>
      <div className="first d-block">
      <form className="" noValidate onSubmit={e => e.preventDefault()}>
        <div className="form-card">
          <div className="row">
              <div className="col-12 col-sm-12 col-md-4 formImg">
                  <img className="w-100" src={ brand } alt="Brand" />
              </div>
              <div className="col-12 col-sm-12 col-md-8 offset-md-4">
                  <div className="formField">
                      <div className="col-12">
                          <div className="grText">
                              <span>
                                  <img src={ thunbsup } alt="Thunbsup" /> Great
                              </span>
                          </div>
                          <h4 className="text-left mb-2">Brilliant { userName },</h4>
                          <p className="pcolor mb-5">You have completed 2 steps, let’s understand about your work.</p>
                      </div>
                      <div className="col-md-10 p-0 d-flex flex-wrap">
                          <div className="col-12 col-sm-6 mb-4">
                            <SelectField 
                              class="form-control padd5"
                              name="occupation"
                              value={ occupation }
                              label="Occupation"
                              onChange={e => setOccupation(e.target.value)}
                              options={[
                                {value: '10', label: '10'},
                                {value: '20', label: '20'},
                                {value: '30', label: '30'},
                              ]}
                              required="required"
                              feedback="Please select a valid Occupation"
                            />
                          </div>
                          <div className="col-12 col-sm-6 mb-4">
                            <InputField 
                              type="text"
                              class="form-control padd5"
                              name="annual_income"
                              value={ annual_income }
                              label="Annual Income"
                              placeholder="Your annual income"
                              onChange={e => setAnnualIncome(e.target.value)}
                              required="required"
                              feedback="Please provide a valid Annual Income"
                            />
                          </div>
                          <div className="col-12 col-sm-6 mb-4">
                            <InputField 
                              type="text"
                              class="form-control padd5"
                              name="expected_increase"
                              value={ expected_increase }
                              value="8.00"
                              label="Expected Increase (%)"
                              placeholder="Your annual income"
                              onChange={e => setExpectedIncrease(e.target.value)}
                              required="required"
                              feedback="Please provide a valid Annual Income"
                            />
                          </div>
                          <div className="col-12 col-sm-6 mb-4">
                            <InputField 
                              type="text"
                              class="form-control padd5"
                              name="annual_expense"
                              value={ annual_expense }
                              value="8.00"
                              label="Annual Expence"
                              placeholder="Your annual expense"
                              onChange={e => setAnnualExpense(e.target.value)}
                              required="required"
                              feedback="Please provide a valid Annual expense"
                            />
                          </div>
                      </div>
                  </div>
              </div>
          </div>
      </div> 
        <ActionButtons prevLink="prev" nextLink="next" onNext={handleNextButton} onPreview={handlePrevButton} />
      </form>
      </div>
      </>
    )
}

Proposer.propTypes = {
  name: PropTypes.string,
  nextPage: PropTypes.string,
  prevPage: PropTypes.string
};

export default Proposer;
