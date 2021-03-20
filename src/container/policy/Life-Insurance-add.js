import React, { useState, useEffect } from 'react'
import { useHistory } from "react-router-dom";
import { PropTypes } from 'prop-types';
import { useDispatch, useSelector } from "react-redux";
import InputField from '../../components/form/InputField'
import SelectField from '../../components/form/SelectField'
import ActionButtons from '../../components/ActionButtons'

import increment, { decrement ,init_current } from '../../actions'
// import setLifeInsurance from '../../actions/policy'
import brand from '../../assets/img/Page 52, 54 1.png'
import thunbsup from '../../assets/img/thunbsup.png'


const AddLifeInsurance = (props) => {
    let history = useHistory();
    const dispatch = useDispatch();
    const auth = useSelector(state => state.auth)
        useEffect(() => {
            if(!auth) {
                dispatch(init_current());
                history.push('/');
            }
        });
    const handleNextButton = () => {
    dispatch(increment());
    history.push('/health-insurance');
    };
    const handlePrevButton = () => {
    dispatch(decrement());
    history.push('/life-insurance');
    };
    return (
        <>
            <ul className="progressbar">
                <li className="steps_li_3">
                    <span className="active">
                        <div className="d-flex flex-wrap align-items-center">
                            <div className="spaceRight">
                                <svg width="25" height="25" viewBox="0 0 25 25" fill="#606060" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M11.4798 22.9166H0.521503C0.361086 22.9166 0.210045 22.8427 0.111087 22.7166C0.0121283 22.5896 -0.0232883 22.426 0.0152533 22.2698L0.577753 20.0093C0.861086 18.8854 1.68296 18 2.77462 17.6406L6.96004 16.2458C7.58087 15.9864 7.96837 15.051 8.00795 13.6719C7.52879 13.2364 6.50066 12.1739 6.50066 11.0844C6.50066 10.7021 6.37254 10.6239 6.3715 10.6229C6.21316 10.5802 6.12983 10.4823 6.06837 10.3292C6.01629 10.1979 5.56316 9.0354 5.56316 8.24999C5.56316 8.20832 5.56837 8.16666 5.57879 8.12603C5.64441 7.85624 5.80275 7.58541 6.04129 7.42082C6.04754 7.29582 6.05483 7.15728 6.06316 7.00312C6.0892 6.48853 6.12566 5.80207 6.12566 4.94791C6.12566 2.99375 8.51524 0 11.459 0C14.1225 0 15.4121 1.41875 15.6256 2.33541C16.2767 2.69583 16.8444 3.29062 16.8444 4.94791V7.42395C17.1027 7.60207 17.2621 7.88749 17.3288 8.08436C17.3465 8.13749 17.3548 8.19374 17.3548 8.24999C17.3548 8.53749 17.1215 8.79165 16.834 8.79165C16.5725 8.79165 16.3569 8.61665 16.3194 8.36978C16.2996 8.33332 16.2746 8.29686 16.2579 8.28436C15.9715 8.28436 15.8017 8.06874 15.8017 7.78124V4.94791C15.8017 3.58854 15.3652 3.36875 15.1048 3.23854C14.9475 3.15833 14.6152 2.99166 14.6152 2.59375C14.5965 2.28021 13.7194 1.04167 11.459 1.04167C8.97982 1.04167 7.16733 3.61041 7.16733 4.94791C7.16733 5.82499 7.13087 6.52916 7.1017 7.05728C7.08712 7.35832 7.07358 7.60103 7.07358 7.78124C7.07358 8.05103 6.86837 8.27291 6.60587 8.29999C6.62254 8.72707 6.83608 9.39686 6.97254 9.77082C7.2517 9.96874 7.54233 10.3729 7.54233 11.0833C7.54233 11.6708 8.22774 12.5073 8.86524 13.0364C8.98399 13.1354 9.05274 13.2823 9.05274 13.4375C9.05274 15.4146 8.4392 16.7583 7.32462 17.2208L3.10275 18.6302C2.34858 18.8791 1.78296 19.4896 1.58817 20.2635L1.18817 21.875H11.4798C11.7673 21.875 12.0007 22.1083 12.0007 22.3958C12.0007 22.6833 11.7673 22.9166 11.4798 22.9166Z"/>
                                    <path d="M18.751 25.0001C18.6822 25.0001 18.6135 24.9865 18.5489 24.9584C18.301 24.8553 12.501 22.348 12.501 17.2251V12.872C12.501 12.6491 12.6437 12.4501 12.8551 12.3782L18.5843 10.4438C18.6926 10.4074 18.8103 10.4074 18.9176 10.4438L24.6468 12.3782C24.8583 12.4491 25.001 12.648 25.001 12.872V17.2251C25.001 22.348 19.201 24.8553 18.9531 24.9595C18.8885 24.9865 18.8197 25.0001 18.751 25.0001ZM13.5426 13.2459V17.2251C13.5426 21.1678 17.7666 23.4313 18.751 23.9063C19.7343 23.4303 23.9593 21.1584 23.9593 17.2251V13.2459L18.751 11.4876L13.5426 13.2459Z"/>
                                    <path d="M18.2296 19.7918C18.2203 19.7918 18.2098 19.7918 18.2015 19.7907C18.0526 19.7824 17.9161 19.7115 17.8234 19.5959L15.7401 16.9918C15.5609 16.7668 15.5963 16.4397 15.8213 16.2595C16.0474 16.0803 16.3744 16.1178 16.5536 16.3407L18.2724 18.4907L21.5067 15.2563C21.7098 15.0532 22.0401 15.0532 22.2432 15.2563C22.4463 15.4595 22.4463 15.7897 22.2432 15.9928L18.5974 19.6386C18.5005 19.7376 18.3671 19.7918 18.2296 19.7918Z"/>
                                </svg>

                            </div>
                            <div className="listName">
                                <small>Step 1 of 3</small>
                                <p className="mb-0">Policy Details</p>
                            </div>
                        </div>
                    </span>
                    <span>
                        <div className="d-flex flex-wrap align-items-center">
                            <div className="spaceRight">
                                <svg width="27" height="25" viewBox="0 0 27 25" fill="#606060" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M23.8358 0H6.6058C5.11048 0 3.89391 1.20519 3.89391 2.68176L3.78287 17.8537H0.420342C0.182043 17.8537 0 18.0644 0 18.3027V20.3907C0 22.3454 1.56422 23.9439 3.45207 24.0316V24.0566H17.9616V24.0284C18.0695 24.0328 18.1348 24.0566 18.2089 24.0566H18.2193C20.2327 24.0448 21.8557 22.4037 21.8452 20.3903V7.1199H26.2254C26.4637 7.1199 26.6457 6.90415 26.6457 6.66606V2.83494C26.6484 1.27788 25.3929 0.011167 23.8358 0V0ZM3.64086 23.1936H3.63791C2.10298 23.1936 0.863019 21.925 0.863019 20.3903V18.7167H14.5634V20.3831C14.5601 21.3544 14.9437 22.287 15.6296 22.9747C15.7025 23.048 15.7787 23.0857 15.8567 23.1936H3.64086ZM20.9821 20.3899C20.9821 21.925 19.7542 23.1936 18.2186 23.1936H18.2098C16.6666 23.1825 15.4229 21.9265 15.4265 20.3833V18.3027C15.4277 18.061 15.2366 17.8621 14.9949 17.8537H4.64589L4.75693 2.68471C4.75693 1.68116 5.58623 0.863019 6.6058 0.863019H21.7986C21.3068 1.40241 20.9821 2.08486 20.9821 2.84653V20.3899ZM25.7827 2.84253V6.25688H21.8452V2.84569C21.8452 1.76565 22.7436 0.863019 23.8232 0.863019H23.8352C24.9176 0.873764 25.7877 1.7568 25.7827 2.83936V2.84253Z"/>
                                    <path d="M10.1319 10.6207L12.3566 12.1417C12.5018 12.2418 12.6937 12.2418 12.8389 12.1417L15.0569 10.6211C15.8275 10.0954 16.3966 8.99645 16.3966 8.06453V4.98708C16.4012 4.82442 16.3114 4.67356 16.1665 4.59961L12.7791 2.93341C12.6602 2.87441 12.5208 2.87441 12.4019 2.93341L9.02086 4.59497C8.8759 4.66892 8.78636 4.81978 8.7912 4.98244V8.06453C8.7912 8.99645 9.36156 10.0954 10.1319 10.6207ZM9.65422 5.25172L12.5939 3.80127L15.5335 5.25572V8.06453C15.5335 8.71453 15.1075 9.54131 14.57 9.90772L12.5888 11.2627L10.6154 9.90793C10.0779 9.5411 9.65422 8.71453 9.65422 8.06453V5.25172Z"/>
                                    <path d="M11.8641 8.71736C11.9446 8.79953 12.0546 8.84609 12.1696 8.84672H12.1707C12.2853 8.8463 12.395 8.80037 12.4757 8.71904L14.1923 7.00185C14.3611 6.8333 14.3611 6.55981 14.1925 6.39125C14.0242 6.22248 13.7507 6.22248 13.5821 6.39104L12.1721 7.80082L11.6085 7.23173C11.4406 7.06232 11.1673 7.06106 10.9979 7.22899C10.8285 7.39691 10.8275 7.67019 10.9952 7.83959L11.8641 8.71736Z"/>
                                    <path d="M17.9616 13.3765H7.60534C7.36704 13.3765 7.17383 13.5697 7.17383 13.808C7.17383 14.0463 7.36704 14.2395 7.60534 14.2395H17.9616C18.1999 14.2395 18.3931 14.0463 18.3931 13.808C18.3931 13.5697 18.1999 13.3765 17.9616 13.3765Z"/>
                                    <path d="M17.9616 15.3721H7.60534C7.36704 15.3721 7.17383 15.5653 7.17383 15.8036C7.17383 16.0419 7.36704 16.2351 7.60534 16.2351H17.9616C18.1999 16.2351 18.3931 16.0419 18.3931 15.8036C18.3931 15.5653 18.1999 15.3721 17.9616 15.3721Z"/>
                                </svg>
                            </div>
                            <div className="listName">
                                <small>Step 2 of 3</small>
                                <p className="mb-0">Cover Details</p>
                            </div>
                        </div>
                    </span>
                    <span>
                        <div className="d-flex flex-wrap align-items-center">
                            <div className="spaceRight">
                                <svg width="18" height="18" viewBox="0 0 18 18" fill="#606060" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M14.5542 5.22933C14.7484 5.22933 14.9058 5.07194 14.9058 4.87777V1.05465C14.9058 0.473118 14.4327 0 13.8511 0H1.05465C0.473118 0 0 0.473118 0 1.05465V16.9448C0 17.5263 0.473118 17.9994 1.05465 17.9994H13.8511C14.4327 17.9994 14.9058 17.5263 14.9058 16.9448V14.3548C14.9058 14.1607 14.7484 14.0033 14.5542 14.0033C14.3601 14.0033 14.2027 14.1607 14.2027 14.3548V16.9448C14.2027 17.1386 14.045 17.2963 13.8511 17.2963H1.05465C0.860809 17.2963 0.703103 17.1386 0.703103 16.9448V1.05465C0.703103 0.860808 0.860809 0.703103 1.05465 0.703103H13.8511C14.045 0.703103 14.2027 0.860808 14.2027 1.05465V4.87777C14.2027 5.07194 14.3601 5.22933 14.5542 5.22933Z"/>
                                    <path d="M7.45321 1.89844C5.66972 1.89844 4.21875 3.34941 4.21875 5.13289C4.21875 6.05812 4.60935 6.89374 5.23416 7.48382C5.24587 7.49633 5.25831 7.50818 5.27192 7.51897C5.84747 8.04559 6.61344 8.36731 7.45317 8.36731C8.2929 8.36731 9.05887 8.04556 9.63442 7.51897C9.64803 7.50818 9.66047 7.4963 9.67218 7.48382C10.2971 6.89374 10.6877 6.05812 10.6877 5.13289C10.6877 3.34941 9.23669 1.89844 7.45321 1.89844ZM7.45321 7.66421C6.87912 7.66421 6.34931 7.47183 5.92419 7.14852C6.23318 6.6006 6.80979 6.25792 7.45321 6.25792C8.09662 6.25792 8.67323 6.6006 8.98222 7.14852C8.55707 7.47183 8.02729 7.66421 7.45321 7.66421ZM6.89069 4.99226V4.76374C6.89069 4.45359 7.14305 4.20123 7.45321 4.20123C7.76336 4.20123 8.01572 4.45359 8.01572 4.76374V4.99226C8.01572 5.30242 7.76336 5.55478 7.45321 5.55478C7.14305 5.55478 6.89069 5.30242 6.89069 4.99226ZM9.49021 6.6335C9.23093 6.24896 8.87158 5.94987 8.45437 5.76523C8.61996 5.55123 8.71886 5.28315 8.71886 4.99226V4.76374C8.71886 4.06584 8.15111 3.49809 7.45321 3.49809C6.7553 3.49809 6.18755 4.06584 6.18755 4.76374V4.99226C6.18755 5.28315 6.28645 5.55123 6.45204 5.76523C6.03483 5.94987 5.67549 6.24896 5.4162 6.6335C5.1058 6.21327 4.92189 5.69425 4.92189 5.13289C4.92189 3.73712 6.05743 2.60158 7.45321 2.60158C8.84898 2.60158 9.98452 3.73712 9.98452 5.13289C9.98452 5.69425 9.80061 6.21327 9.49021 6.6335Z"/>
                                    <path d="M9.35162 15.3989H7.45313C7.259 15.3989 7.10156 15.5563 7.10156 15.7505C7.10156 15.9447 7.259 16.1021 7.45313 16.1021H9.35162C9.54576 16.1021 9.70319 15.9447 9.70319 15.7505C9.70319 15.5563 9.54576 15.3989 9.35162 15.3989Z"/>
                                    <path d="M9.3517 13.4302H4.35938C4.16525 13.4302 4.00781 13.5876 4.00781 13.7817C4.00781 13.9759 4.16525 14.1333 4.35938 14.1333H9.3517C9.54583 14.1333 9.70327 13.9759 9.70327 13.7817C9.70327 13.5876 9.54583 13.4302 9.3517 13.4302Z"/>
                                    <path d="M9.3517 11.4614H4.35938C4.16525 11.4614 4.00781 11.6188 4.00781 11.813C4.00781 12.0072 4.16525 12.1646 4.35938 12.1646H9.3517C9.54583 12.1646 9.70327 12.0072 9.70327 11.813C9.70327 11.6188 9.54583 11.4614 9.3517 11.4614Z"/>
                                    <path d="M3.10631 9.5952C3.04095 9.52981 2.95025 9.49219 2.85743 9.49219C2.76493 9.49219 2.67423 9.52981 2.60887 9.5952C2.54348 9.66059 2.50586 9.7513 2.50586 9.84376C2.50586 9.93622 2.54344 10.0269 2.60887 10.0923C2.67461 10.1577 2.76493 10.1953 2.85743 10.1953C2.95025 10.1953 3.0406 10.1577 3.10631 10.0923C3.1717 10.0269 3.20935 9.93622 3.20935 9.84376C3.20935 9.7513 3.17174 9.66059 3.10631 9.5952Z"/>
                                    <path d="M3.10631 11.5644C3.0406 11.499 2.95025 11.4614 2.85743 11.4614C2.76493 11.4614 2.67461 11.499 2.60887 11.5644C2.54348 11.6298 2.50586 11.7205 2.50586 11.813C2.50586 11.9055 2.54344 11.9962 2.60887 12.0616C2.67461 12.127 2.76493 12.1646 2.85743 12.1646C2.95025 12.1646 3.0406 12.127 3.10631 12.0616C3.1717 11.9962 3.20935 11.9055 3.20935 11.813C3.20935 11.7205 3.17174 11.6298 3.10631 11.5644Z"/>
                                    <path d="M3.10631 13.5332C3.0406 13.4678 2.95025 13.4302 2.85743 13.4302C2.76493 13.4302 2.67461 13.4678 2.60887 13.5332C2.54348 13.5986 2.50586 13.6893 2.50586 13.7817C2.50586 13.8742 2.54344 13.9649 2.60887 14.0303C2.67423 14.0957 2.76493 14.1333 2.85743 14.1333C2.95025 14.1333 3.04095 14.0957 3.10631 14.0303C3.1717 13.9649 3.20935 13.8742 3.20935 13.7817C3.20935 13.6893 3.17174 13.5986 3.10631 13.5332Z"/>
                                    <path d="M9.3517 9.49219H4.35938C4.16525 9.49219 4.00781 9.64959 4.00781 9.84376C4.00781 10.0379 4.16525 10.1953 4.35938 10.1953H9.3517C9.54583 10.1953 9.70327 10.0379 9.70327 9.84376C9.70327 9.64959 9.54583 9.49219 9.3517 9.49219Z"/>
                                    <path d="M17.2627 4.58176C16.9212 4.38456 16.5233 4.33218 16.1422 4.43424C15.7613 4.53633 15.4428 4.78068 15.2457 5.12223L10.8214 12.7852C10.7972 12.8272 10.7819 12.8738 10.7765 12.922L10.4651 15.7115C10.4496 15.8503 10.5177 15.9851 10.6387 16.055C10.6933 16.0865 10.7539 16.1021 10.8144 16.1021C10.888 16.1021 10.9612 16.0791 11.0229 16.0336L13.283 14.3691C13.322 14.3404 13.3547 14.3038 13.379 14.2618L17.8032 6.59886C18.2103 5.89375 17.9678 4.98888 17.2627 4.58176ZM11.253 14.9909L11.4156 13.5342L12.4332 14.1217L11.253 14.9909ZM12.9458 13.6057L11.6062 12.8323L15.1565 6.68296L16.4962 7.45641L12.9458 13.6057ZM17.1942 6.24725L16.8477 6.84749L15.508 6.07404L15.8546 5.4738C15.9579 5.29488 16.1247 5.16691 16.3242 5.11344C16.5238 5.05993 16.7322 5.08742 16.9111 5.19071C17.09 5.294 17.218 5.46079 17.2715 5.66034C17.325 5.85989 17.2975 6.06834 17.1942 6.24725Z"/>
                                </svg>
                            </div>
                            <div className="listName">
                                <small>Step 3 of 3</small>
                                <p className="mb-0">Further Details</p>
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
                                    </div>
                                    
                                    <div className="col-md-12 p-0 d-flex flex-wrap">
                                        <div className="col-md-6">
                                            <div className="inputField my-4">
                                                <InputField 
                                                    type="text"
                                                    class="form-control padd5"
                                                    name="insurer_name"
                                                    // value={ phone_number }
                                                    label="Name of Insurer"
                                                    placeholder="Enter the Name of Insurer"
                                                    // onChange={handlePhoneNumber}
                                                    required="required"
                                                    feedback="Please provide a valid Name of Insurer"
                                                />
                                            </div>
                                        </div>                                                    
                                        <div className="col-md-6">
                                            <div className="inputField my-4">
                                                <SelectField 
                                                    class="form-control padd5"
                                                    name="policy_type"
                                                    // value={ phone_number }
                                                    label="Policy Type"
                                                    // onChange={handlePhoneNumber}
                                                    options={[
                                                        {value: '10', label: '10'},
                                                        {value: '20', label: '20'},
                                                        {value: '30', label: '30'},
                                                    ]}
                                                    placeholder="select policy type"
                                                    required="required"
                                                    feedback="Please select a valid policy type"
                                                />
                                            </div>
                                        </div>                                                  
                                        <div className="col-md-6">
                                            <div className="inputField my-4">
                                                <SelectField 
                                                    class="form-control padd5"
                                                    name="policy_sum"
                                                    // value={ phone_number }
                                                    label="Policy Sum Insured"
                                                    // onChange={handlePhoneNumber}
                                                    options={[
                                                        {value: '10', label: '10'},
                                                        {value: '20', label: '20'},
                                                        {value: '30', label: '30'},
                                                    ]}
                                                    placeholder="select policy sum insured"
                                                    required="required"
                                                    feedback="Please select a valid Sum Insured"
                                                />
                                            </div>
                                        </div>                                                 
                                        <div className="col-md-6">
                                            <div className="inputField my-4">
                                                <SelectField 
                                                    class="form-control padd5"
                                                    name="policy_term"
                                                    // value={ phone_number }
                                                    label="Policy Term Outstanding"
                                                    options={[
                                                        {value: '10', label: '10'},
                                                        {value: '20', label: '20'},
                                                        {value: '30', label: '30'},
                                                    ]}
                                                    // onChange={handlePhoneNumber}
                                                    placeholder="select policy term outstanding"
                                                    required="required"
                                                    feedback="Please select a valid Sum Insured"
                                                />
                                            </div>
                                        </div>                                                 
                                        <div className="col-md-6">
                                            <div className="inputField my-4">
                                                <SelectField 
                                                    class="form-control padd5"
                                                    name="policy_benefit"
                                                    // value={ phone_number }
                                                    label="Type of benefit"
                                                    options={[
                                                        {value: '10', label: '10'},
                                                        {value: '20', label: '20'},
                                                        {value: '30', label: '30'},
                                                    ]}
                                                    // onChange={handlePhoneNumber}
                                                    placeholder="select type of benefit"
                                                    required="required"
                                                    feedback="Please select a valid type of benefit"
                                                />
                                            </div>
                                        </div>                                                     
                                        <div className="col-md-6">
                                            <div className="inputField my-4">
                                                <SelectField 
                                                    class="form-control padd5"
                                                    name="income_start_year"
                                                    // value={ phone_number }
                                                    label="Income Start Year"
                                                    options={[
                                                        {value: '10', label: '10'},
                                                        {value: '20', label: '20'},
                                                        {value: '30', label: '30'},
                                                    ]}
                                                    // onChange={handlePhoneNumber}
                                                    placeholder="select income start year"
                                                    required="required"
                                                    feedback="Please select a valid Income Start Year"
                                                />
                                            </div>
                                        </div>                                               
                                        <div className="col-md-6">
                                            <div className="inputField my-4">
                                                <SelectField 
                                                    class="form-control padd5"
                                                    name="income_end_year"
                                                    // value={ phone_number }
                                                    label="Income End Year"
                                                    options={[
                                                        {value: '10', label: '10'},
                                                        {value: '20', label: '20'},
                                                        {value: '30', label: '30'},
                                                    ]}
                                                    // onChange={handlePhoneNumber}
                                                    placeholder="select income end year"
                                                    required="required"
                                                    feedback="Please select a valid Income End Year"
                                                />
                                            </div>
                                        </div>     
                                        <div className="col-md-6">
                                            <div className="inputField my-4">
                                                <SelectField 
                                                    class="form-control padd5"
                                                    name="death_protection"
                                                    // value={ phone_number }
                                                    options={[
                                                        {value: '10', label: '10'},
                                                        {value: '20', label: '20'},
                                                        {value: '30', label: '30'},
                                                    ]}
                                                    label="% of sum assured payable immediately on death"
                                                    // onChange={handlePhoneNumber}
                                                    placeholder="select % of sum assured payable"
                                                    required="required"
                                                    feedback="Please select a valid % of sum "
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

AddLifeInsurance.propTypes = {
  name: PropTypes.string,
  nextPage: PropTypes.string,
  prevPage: PropTypes.string
};

export default AddLifeInsurance;
