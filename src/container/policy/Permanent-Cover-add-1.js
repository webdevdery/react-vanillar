import React, { useState, useEffect } from 'react'
import { useHistory } from "react-router-dom";
import { PropTypes } from 'prop-types';
import $ from 'jquery'
import { useDispatch, useSelector } from "react-redux";
import SelectField from '../../components/form/SelectField'
import InputField from '../../components/form/InputField'
import ActionButtons from '../../components/ActionButtons'

import increment, { decrement, init_current  } from '../../actions'
import { setPDCover  } from '../../actions/policy'

import brand from '../../assets/img/Page 35,37,39 1.png'
import thunbsup from '../../assets/img/thunbsup.png'


const AddPermanentCover1 = () => {
    let history = useHistory();
    const dispatch = useDispatch();
    const auth = useSelector(state => state.auth)
    useEffect(() => {
        if(!auth) {
            dispatch(init_current());
            history.push('/');
        }
    });
    const proposer_has_PD_cover = useSelector(state => state.basic_detail.proposer_has_PD_cover)
    const name = useSelector(state => state.pd_cover.name_of_insurer)
    const sum = useSelector(state => state.pd_cover.sum_assured_available)
    const benifit = useSelector(state => state.pd_cover.additional_benefits)
    const amount = useSelector(state => state.pd_cover.additional_benefits_amount)

    // const [name_of_insurer, setName] = useState(name)
    const [sum_assured_available, setSum] = useState(sum)
    const [additional_benefits, setBenifit] = useState(benifit)
    const [additional_benefits_amount, setAmount] = useState(amount)
    const handleNextButton = () => {
        if(sum_assured_available === '' || sum_assured_available === null || sum_assured_available === undefined) {
            $('form').addClass('was-validated');
            return false;
        }
        if(additional_benefits_amount === '' || additional_benefits_amount === null || additional_benefits_amount === undefined) {
            $('form').addClass('was-validated');
            return false;
        }
        dispatch(setPDCover({
            proposer_has_PD_cover: proposer_has_PD_cover,
            name_of_insure: name,
            sum_assured_available: sum_assured_available,
            additional_benefits: additional_benefits,
            additional_benefits_amount: additional_benefits_amount
        }))
        dispatch(increment());
        history.push('/permanent-cover-add-2');
    };
    const handlePrevButton = () => {
        dispatch(decrement());
        history.push('/permanent-cover');
    };
    return (
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
                                        <img src={ thunbsup } alt="Superb" /> Superb
                                    </span>
                                </div>
                            </div>
                            <div className="col-md-12 p-0">
                                <div className="col-md-6">
                                    <div className="inputField my-4">
                                        <InputField 
                                            class="form-control padd5"
                                            name="ci_sum"
                                            value={ sum_assured_available }
                                            label="Sum Assured Available"
                                            onChange={ e => setSum(e.target.value)}
                                            placeholder="select sum assured available"
                                            required="required"
                                            feedback="Please select a valid Name of the Insurer"
                                        />
                                    </div>
                                </div>                                                                                                  
                                <div className="col-md-6">
                                    <div className="inputField my-4">
                                        <SelectField 
                                            class="form-control padd5"
                                            name="ci_loss_of_employment"
                                            value={ additional_benefits }
                                            label="Additional benefits available in case of loss of employment due to CI"
                                            onChange={e => setBenifit(e.target.value)}
                                            options={[
                                                {value: 'Yes', label: 'Yes'},
                                                {value: 'No', label: 'No'},
                                            ]}
                                            placeholder="select additional benefits available"
                                            required="required"
                                            feedback="Please select a valid Sum Insured"
                                        />
                                    </div>
                                </div>                                                 
                                <div className="col-md-6">
                                    <div className="inputField my-4">
                                        <InputField 
                                            type="text"
                                            class="form-control padd5"
                                            name="ci_benefit_amount"
                                            value={ additional_benefits_amount }
                                            label="If so, additional benefit amount"
                                            placeholder="enter additional benefit amount"
                                            onChange={ e => setAmount(e.target.value) }
                                            required="required"
                                            feedback="Please provide a valid additional benefit amount"
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
    )
}

AddPermanentCover1.propTypes = {
  name_of_insure: PropTypes.string,
  sum_assured_available: PropTypes.number,
  additional_benefits: PropTypes.string,
  additional_benefits_amount: PropTypes.number,
};

export default AddPermanentCover1;
