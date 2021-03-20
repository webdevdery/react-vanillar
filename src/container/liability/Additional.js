import React, { useState, useEffect } from 'react'
import { useHistory } from "react-router-dom";
import { PropTypes } from 'prop-types';
import { useDispatch, useSelector } from "react-redux";
import InputField from '../../components/form/InputField'
import SelectField from '../../components/form/SelectField'
import ActionButtons from '../../components/ActionButtons'

import increment, { decrement, init_current  } from '../../actions'
import { setAdditionalInfo } from '../../actions/liability'
import brand from '../../assets/img/Page 30 1.png'
import thunbsup from '../../assets/img/thunbsup.png'


const Additional = () => {
    let history = useHistory();
    const dispatch = useDispatch();
    const auth = useSelector(state => state.auth)
    useEffect(() => {
        if(!auth) {
            dispatch(init_current());
            history.push('/');
        }
    });

    const income_growth = useSelector(state => state.additional_userinfo.income_growth)
    const investment_amount = useSelector(state => state.additional_userinfo.investment_amount)
    const expense_growth_inflation = useSelector(state => state.additional_userinfo.expense_growth_inflation)
    const target_annual_income_required = useSelector(state => state.additional_userinfo.target_annual_income_required)
    const has_existing_retirement_fund = useSelector(state => state.additional_userinfo.has_existing_retirement_fund)
    const retirement_fund_value = useSelector(state => state.additional_userinfo.retirement_fund_value)
    const inv_equities = useSelector(state => state.additional_userinfo.inv_equities)
    const inv_fixed_deposits = useSelector(state => state.additional_userinfo.inv_fixed_deposits)
    const inv_house_property = useSelector(state => state.additional_userinfo.inv_house_property)
    const inv_other_real_estate = useSelector(state => state.additional_userinfo.inv_other_real_estate)
    const inv_gold_bullion = useSelector(state => state.additional_userinfo.inv_gold_bullion)
    const inv_total = useSelector(state => state.additional_userinfo.inv_total)
    const yearly_contribution_retirement_fund = useSelector(state => state.additional_userinfo.yearly_contribution_retirement_fund)
    const level_risk_aversion = useSelector(state => state.additional_userinfo.level_risk_aversion)


    const [income, setIncome] = useState(income_growth)
    const [investment, setInvestment] = useState(investment_amount)
    const [expense, setExpense] = useState(expense_growth_inflation)
    const [target, setTarget] = useState(target_annual_income_required)
    const [has_retirement, setHasRetirement] = useState(has_existing_retirement_fund)
    const [retirement_fund, setRetirementFund] = useState(retirement_fund_value)
    const [equities, setEquities] = useState(inv_equities)
    const [deposits, setDeposits] = useState(inv_fixed_deposits)
    const [house, setHouse] = useState(inv_house_property)
    const [real_estate, setRealEstate] = useState(inv_other_real_estate)
    const [gold_bullion, setGoldBullion] = useState(inv_gold_bullion)
    const [total, setTotal] = useState(inv_total)
    const [yearly_contribution, setYearlyContribution] = useState(yearly_contribution_retirement_fund)
    const [risk, setRisk] = useState(level_risk_aversion)

    const handleNextButton = () => {
        dispatch(setAdditionalInfo({
            income_growth:income,
            investment_amount:investment,
            expense_growth_inflation:expense,
            target_annual_income_required:target,
            has_existing_retirement_fund:has_retirement,
            retirement_fund_value:retirement_fund,
            inv_equities:equities,
            inv_fixed_deposits:deposits,
            inv_house_property:house,
            inv_other_real_estate:real_estate,
            inv_gold_bullion:gold_bullion,
            inv_total:total,
            yearly_contribution_retirement_fund:yearly_contribution,
            level_risk_aversion:risk
        }));
        dispatch(increment());
        history.push('/life-insurance');
    };
    const handlePrevButton = () => {
        dispatch(decrement());
        history.push('/assets');
    };
    return (
        <>
            <ul className="progressbar">
                <li className="steps_li_2">
                    <span className="active li_prev">
                        <div className="d-flex flex-wrap align-items-center">
                            <div className="spaceRight">
                                <svg width="22" height="18" viewBox="0 0 22 18" fill="#606060" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M9.85727 0.976011L6.67914 0.0261344C6.52334 -0.0203656 6.35551 -0.00440716 6.2113 0.0707596L2.5423 1.98389V1.91664C2.5423 1.57147 2.2625 1.29164 1.91738 1.29164H0.624918C0.279792 1.29168 0 1.57147 0 1.91668C0 2.26189 0.279792 2.54168 0.624918 2.54168H1.29242V9.41669H0.624918C0.279792 9.41669 0 9.69653 0 10.0417C0 10.3869 0.279792 10.6667 0.624918 10.6667H1.91734C2.26246 10.6667 2.54225 10.3869 2.54225 10.0417V9.41669C8.57864 9.40453 8.40747 9.44557 8.73468 9.38169C9.80314 10.6004 11.3196 11.2917 12.9578 11.2917C16.0591 11.2917 18.5822 8.76832 18.5822 5.66669C18.5823 1.16693 13.5532 -1.47574 9.85727 0.976011ZM7.33347 5.66669H5.99401L7.00922 4.49518L7.43401 4.60698C7.36831 4.95027 7.33347 5.30448 7.33347 5.66669ZM2.5423 3.39356L6.56426 1.29643L8.74227 1.94739C8.35889 2.38147 8.04147 2.87497 7.80556 3.41218L6.95093 3.18727C6.72047 3.12656 6.47564 3.20227 6.31964 3.38235L4.15322 5.88235C3.80338 6.28602 4.09059 6.91669 4.62547 6.91669H8.37502C8.71964 6.91669 8.99993 7.19706 8.99993 7.54169C8.99993 7.88632 8.7196 8.16669 8.37502 8.16669H2.5423V3.39356ZM12.9579 10.0417C11.7613 10.0417 10.6481 9.56736 9.82848 8.7244C10.7644 7.57606 10.0499 5.8416 8.58347 5.67856C8.57718 3.24026 10.5619 1.29168 12.9579 1.29168C15.37 1.29168 17.3324 3.25431 17.3324 5.66669C17.3324 8.07907 15.37 10.0417 12.9579 10.0417Z"/>
                                    <path d="M13.9931 5.33358C13.4771 4.93145 12.7925 4.8487 12.6638 4.61637C12.634 4.56262 12.6715 4.44729 12.7577 4.38933C12.8888 4.30116 13.2023 4.33866 13.3 4.42887C13.5537 4.66291 13.9491 4.64699 14.1831 4.39324C14.4171 4.13953 14.4012 3.74412 14.1475 3.51007C13.9838 3.35916 13.7797 3.24799 13.5581 3.17812C13.55 2.83995 13.274 2.56812 12.9339 2.56812C12.5888 2.56812 12.309 2.84795 12.309 3.19312V3.21949C11.519 3.54733 11.1706 4.49995 11.5705 5.22199C11.8515 5.7295 12.3349 5.92041 12.7233 6.07379C12.9737 6.17266 13.403 6.32504 13.3729 6.59387C13.3588 6.72004 13.2577 6.85112 13.127 6.91258C12.9276 7.00658 12.5058 6.94262 12.2591 6.78116C11.9703 6.59221 11.583 6.67312 11.394 6.96204C11.2051 7.25091 11.286 7.63825 11.5749 7.82725C11.7778 7.96 12.0334 8.06879 12.309 8.13508V8.14008C12.309 8.48525 12.5888 8.76508 12.9339 8.76508C13.279 8.76508 13.5588 8.48525 13.5588 8.14008V8.08625C14.686 7.65037 15.0545 6.16087 13.9931 5.33358Z"/>
                                    <path d="M14.2837 15.1653L13.5829 15.8661V12.9563C13.5829 12.6111 13.3031 12.3313 12.958 12.3313C12.6129 12.3313 12.3331 12.6111 12.3331 12.9563V15.8662L11.6323 15.1653C11.3882 14.9213 10.9925 14.9213 10.7485 15.1653C10.5044 15.4094 10.5044 15.8051 10.7485 16.0492L12.5161 17.817C12.7599 18.0609 13.1559 18.0611 13.3999 17.817L15.1674 16.0492C15.4115 15.8052 15.4115 15.4094 15.1674 15.1653C14.9234 14.9213 14.5277 14.9213 14.2837 15.1653Z"/>
                                    <path d="M20.8699 12.4529C20.5368 12.3639 20.1939 12.5614 20.1045 12.8948L19.848 13.8522L18.3932 11.3321C18.2206 11.0332 17.8384 10.9308 17.5395 11.1034C17.2406 11.276 17.1382 11.6582 17.3108 11.9571L18.7655 14.4772L17.8083 14.2206C17.4754 14.1316 17.1323 14.3291 17.0429 14.6626C16.9536 14.996 17.1514 15.3387 17.4848 15.428L19.8994 16.0751C20.2327 16.1642 20.5754 15.9668 20.6648 15.6332L21.3118 13.2184C21.4011 12.8849 21.2033 12.5422 20.8699 12.4529Z"/>
                                    <path d="M8.10691 14.2206L7.1497 14.4772L8.60445 11.9572C8.77703 11.6582 8.67462 11.2759 8.3757 11.1034C8.07682 10.9307 7.69457 11.0332 7.52203 11.3322L6.06728 13.8522L5.81078 12.8948C5.72144 12.5614 5.3789 12.3637 5.04536 12.4529C4.71198 12.5423 4.51415 12.885 4.60348 13.2184L5.25048 15.6332C5.33961 15.9658 5.68144 16.1645 6.0159 16.0751L8.43045 15.4281C8.76382 15.3387 8.96166 14.996 8.87232 14.6626C8.78299 14.3292 8.44032 14.1315 8.10691 14.2206Z"/>
                                </svg>
                            </div>
                            <div className="listName">
                                <small>Step 1 of 3</small>
                                <p className="mb-0">Liability Details</p>
                            </div>
                        </div>
                    </span>
                    <span className="active li_prev">
                        <div className="d-flex flex-wrap align-items-center">
                            <div className="spaceRight">
                                <svg width="22" height="22" viewBox="0 0 22 22" fill="#606060" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M18.6663 18.9999C18.6663 19.3681 18.3678 19.6666 17.9997 19.6666C17.6315 19.6666 17.333 19.3681 17.333 18.9999C17.333 18.6318 17.6315 18.3333 17.9997 18.3333C18.3678 18.3333 18.6663 18.6318 18.6663 18.9999Z"/>
                                    <path d="M20.4666 11.4666L20 11.1567V6.66667C19.9977 4.84359 18.6582 3.29834 16.854 3.03695L17.6333 1.48226C17.6851 1.37875 17.6794 1.2557 17.6182 1.15723C17.557 1.05892 17.4492 0.999354 17.3333 1.00001H13.3333C13.2174 0.999354 13.1097 1.05892 13.0485 1.15723C12.9873 1.2557 12.9816 1.37875 13.0334 1.48226L13.811 3.03695C12.0075 3.299 10.6689 4.84424 10.6667 6.66667V11.155L10.2017 11.465C9.8667 11.688 9.66569 12.0641 9.66667 12.4666C9.66813 12.6523 9.71305 12.835 9.79801 13H8.33333V7.33334H10V6.66667H8.12793L5.53532 4.33334H10.2147L10.5303 4.59131L10.952 4.07536L10.5443 3.74203C10.4849 3.69336 10.4103 3.66667 10.3333 3.66667H4.66406C4.62777 3.66732 4.5918 3.67383 4.55762 3.68604C4.54704 3.68962 4.5376 3.69597 4.52734 3.70069C4.50293 3.71192 4.47998 3.72608 4.45898 3.74268C4.45426 3.74642 4.4484 3.74773 4.44368 3.75196L1.11035 6.75196C1.04004 6.81527 1 6.90544 1 7V13.3333C1.00195 14.6554 1.868 15.821 3.1333 16.2043C2.83643 16.4727 2.66683 16.8542 2.66667 17.2544V17.3267C2.66455 17.8664 2.96956 18.3602 3.45296 18.5999L7.33968 20.543C7.94173 20.8429 8.60498 20.9994 9.27767 21H20.6667C20.8507 21 21 20.8507 21 20.6667V16C21 15.8159 20.8507 15.6667 20.6667 15.6667H19.8813C20.5884 15.0985 20.9998 14.2404 21 13.3333C20.9985 13.2186 20.9373 13.1131 20.8387 13.0547C20.9427 12.8761 20.9984 12.6733 21 12.4666C21.0008 12.0651 20.8006 11.6898 20.4666 11.4666ZM10.3333 12.4666C10.333 12.2876 10.4225 12.1204 10.5716 12.0213L11.1851 11.6123C11.2782 11.5501 11.334 11.4453 11.3333 11.3333V6.66667C11.3353 5.01058 12.6772 3.66862 14.3333 3.66667C14.4492 3.66732 14.557 3.60775 14.6182 3.50944C14.6794 3.41097 14.6851 3.28793 14.6333 3.18441L13.8727 1.66667H16.7939L16.035 3.18441C15.9834 3.28777 15.9889 3.41049 16.0496 3.50863C16.1105 3.60694 16.2178 3.66667 16.3333 3.66667C17.9894 3.66862 19.3314 5.01058 19.3333 6.66667V11.3333C19.3333 11.4448 19.389 11.5488 19.4816 11.6107L20.095 12.0197C20.291 12.1502 20.3787 12.3936 20.3109 12.6191C20.243 12.8447 20.0355 12.9994 19.8 13H10.8683C10.5737 12.9997 10.3346 12.7614 10.3333 12.4666ZM1.66667 7.14828L4.66667 4.44841L7.66667 7.14828V13H6V10.6667C6 10.4826 5.85075 10.3333 5.66667 10.3333H3.66667C3.48258 10.3333 3.33333 10.4826 3.33333 10.6667V13H1.66667V7.14828ZM5.33333 13H4V11H5.33333V13ZM7.71305 17.3493L5.49495 16.3333H7.85205C7.66927 16.639 7.61898 17.0059 7.71305 17.3493ZM7.63802 19.946L3.7513 18.0029C3.49447 17.8758 3.33219 17.6134 3.33333 17.3267V17.2544C3.33252 16.9966 3.46338 16.7564 3.68018 16.617C3.89697 16.4777 4.16992 16.4588 4.40397 16.5667L8.19433 18.3027C8.23795 18.3228 8.28532 18.3332 8.33333 18.3333H11.6667C11.8507 18.3333 12 18.1841 12 18C12 17.8159 11.8507 17.6667 11.6667 17.6667H9C8.63183 17.6667 8.33333 17.3682 8.33333 17C8.33333 16.6318 8.63183 16.3333 9 16.3333H11.5557C11.6113 16.3333 11.6662 16.3193 11.715 16.2926L11.8003 16.2464C13.104 15.5286 14.6802 15.5106 16 16.1981V20.3333H9.27767C8.7085 20.3328 8.1473 20.2002 7.63802 19.946ZM20.3333 16.3333V20.3333H16.6667V16.3333H20.3333ZM18 15.6667H16.4157C14.8812 14.8182 13.0189 14.8159 11.4823 15.6606L9 15.6667H4C2.84066 15.6652 1.85758 14.814 1.69027 13.6667H20.3097C20.1424 14.814 19.1593 15.6652 18 15.6667Z" strokeWidth="0.4"/>
                                    <path d="M15.8337 8.00008H14.8337C14.5575 8.00008 14.3337 7.77629 14.3337 7.50008C14.3337 7.22388 14.5575 7.00008 14.8337 7.00008H16.667V6.33341H15.667V5.66675H15.0003V6.33341H14.8337C14.1893 6.33341 13.667 6.85571 13.667 7.50008C13.667 8.14445 14.1893 8.66675 14.8337 8.66675H15.8337C16.1099 8.66675 16.3337 8.89054 16.3337 9.16675C16.3337 9.44295 16.1099 9.66675 15.8337 9.66675H14.0003V10.3334H15.0003V11.0001H15.667V10.3334H15.8337C16.478 10.3334 17.0003 9.81112 17.0003 9.16675C17.0003 8.52238 16.478 8.00008 15.8337 8.00008Z"/>
                                    <path d="M4.00033 9.66658H5.33366C5.51774 9.66658 5.66699 9.51733 5.66699 9.33325V7.66659C5.66699 7.4825 5.51774 7.33325 5.33366 7.33325H4.00033C3.81624 7.33325 3.66699 7.4825 3.66699 7.66659V9.33325C3.66699 9.51733 3.81624 9.66658 4.00033 9.66658ZM4.33366 7.99992H5.00033V8.99992H4.33366V7.99992Z"/>
                                </svg>
                            </div>
                            <div className="listName">
                                <small>Step 2 of 3</small>
                                <p className="mb-0">Assets Details</p>
                            </div>
                        </div>
                    </span>
                    <span className="active">
                        <div className="d-flex flex-wrap align-items-center">
                            <div className="spaceRight">
                                <svg width="20" height="20" viewBox="0 0 20 20" fill="#606060" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M9.99979 14.1667C13.0515 14.1667 15.7206 15.4792 17.1723 17.4376L15.6373 18.1634C14.4556 16.7634 12.3723 15.8334 9.99979 15.8334C7.62729 15.8334 5.54396 16.7634 4.36229 18.1634L2.82812 17.4367C4.27979 15.4784 6.94812 14.1667 9.99979 14.1667ZM9.99979 1.66675C11.1049 1.66675 12.1647 2.10573 12.9461 2.88714C13.7275 3.66854 14.1665 4.72835 14.1665 5.83341V8.33341C14.1665 9.43848 13.7275 10.4983 12.9461 11.2797C12.1647 12.0611 11.1049 12.5001 9.99979 12.5001C8.89472 12.5001 7.83491 12.0611 7.05351 11.2797C6.27211 10.4983 5.83312 9.43848 5.83312 8.33341V5.83341C5.83312 4.72835 6.27211 3.66854 7.05351 2.88714C7.83491 2.10573 8.89472 1.66675 9.99979 1.66675Z"/>
                                </svg>
                            </div>
                            <div className="listName">
                                <small>Step 3 of 3</small>
                                <p className="mb-0">Additional Information</p>
                            </div>
                        </div>
                    </span>
                </li>
            </ul>
            <div className="first d-block">
                <form className="show_next" noValidate onSubmit={e => e.preventDefault()}>
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
                                                <img src={ thunbsup } alt="Great" /> Superb
                                            </span>
                                        </div>
                                        <h4 className="text-left mb-2">Additional Information</h4>
                                        <p className="pcolor mb-5">Please fill the following detials, to curate the best results for you</p>
                                    </div>
                                    
                                    <div className="col-md-12 p-0 d-flex flex-wrap my-5">
                                        <div className="col-md-6">
                                            <div className="inputField my-3">
                                                <InputField 
                                                    type="text"
                                                    class="form-control padd5"
                                                    name="income_invest"
                                                    value={ income }
                                                    label="Investment Income"
                                                    onChange={e => setIncome(e.target.value)}
                                                    placeholder="Enter/select your investment income"
                                                    required="required"
                                                    feedback="Please select a valid investment income"
                                                />
                                            </div>
                                        </div>                                                    
                                        <div className="col-md-6">
                                            <div className="inputField my-3">
                                                <SelectField 
                                                    class="form-control padd5"
                                                    name="income_ex_growth"
                                                    value={ expense }
                                                    label="Expense growth"
                                                    onChange={e => setExpense(e.target.value)}
                                                    options={[
                                                        {value: '10', label: '10'},
                                                        {value: '20', label: '20'},
                                                        {value: '30', label: '30'},
                                                    ]}
                                                    placeholder="Enter/select your expense growth"
                                                    required="required"
                                                    feedback="Please select a valid Expense growth"
                                                />
                                            </div>
                                        </div>                                                  
                                        <div className="col-md-6">
                                            <div className="inputField my-3">
                                                <SelectField 
                                                    class="form-control padd5"
                                                    name="income_ex_growth"
                                                    value={ target }
                                                    label="Target Income"
                                                    onChange={ e => setTarget(e.target.value) }
                                                    options={[
                                                        {value: '10', label: '10'},
                                                        {value: '20', label: '20'},
                                                        {value: '30', label: '30'},
                                                    ]}
                                                    placeholder="Select your target income level"
                                                    required="required"
                                                    feedback="Please select a valid Expense growth"
                                                />
                                            </div>
                                        </div>                                                 
                                        <div className="col-md-6">
                                            <div className="inputField my-3">
                                                <InputField 
                                                    type="text"
                                                    class="form-control padd5"
                                                    name="retirement_fund"
                                                    value={ retirement_fund }
                                                    onChange={e => setRetirementFund(e.target.value)}
                                                    label="Retirement Funds"
                                                    placeholder="Enter your Retirement funds value"
                                                    required="required"
                                                    feedback="Please provide a valid Retirement Funds"
                                                />
                                            </div>
                                        </div>                                                 
                                        <div className="col-md-6">
                                            <div className="inputField my-3">
                                                <SelectField 
                                                    class="form-control padd5"
                                                    name="yearly_contribution"
                                                    value={ yearly_contribution }
                                                    label="Yearly Contribution to Retirement Funds"
                                                    options={[
                                                        {value: '10', label: '10'},
                                                        {value: '20', label: '20'},
                                                        {value: '30', label: '30'},
                                                    ]}
                                                    onChange={e => setYearlyContribution(e.target.value) }
                                                    placeholder="Select your Yearly Contribution"
                                                    required="required"
                                                    feedback="Please select a valid Yearly Contribution"
                                                />
                                            </div>
                                        </div>                                                     
                                        <div className="col-md-6">
                                            <div className="inputField my-3">
                                                <SelectField 
                                                    class="form-control padd5"
                                                    name="risk_aversion"
                                                    value={ risk }
                                                    options={[
                                                        {value: 'Low', label: 'Low'},
                                                        {value: 'Medium', label: 'Medium'},
                                                        {value: 'High', label: 'High'},
                                                    ]}
                                                    label="Risk Aversion"
                                                    onChange={e => setRisk(e.target.value) }
                                                    placeholder="Select level of Risk Aversion"
                                                    required="required"
                                                    feedback="Please select a valid level of Risk Aversion"
                                                />
                                            </div>
                                        </div>                                               
                                        <div className="col-md-6">
                                            <div className="inputField my-3">
                                                <InputField 
                                                    type="text"
                                                    class="form-control padd5"
                                                    name="total_retirement_fund"
                                                    value={ total }
                                                    label="Asset mix Retirement Funds"
                                                    placeholder="Enter value here"
                                                    onChange={e => setTotal(e.target.value) }
                                                    required="required"
                                                    feedback="Please provide a valid Funds"
                                                />
                                            </div>
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

Additional.propTypes = {
  name: PropTypes.string,
  nextPage: PropTypes.string,
  prevPage: PropTypes.string
};

export default Additional;
