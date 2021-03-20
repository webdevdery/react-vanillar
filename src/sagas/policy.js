import { takeEvery, fork, call,  put, select } from 'redux-saga/effects';
import types from '../actions/types';
import * as api from '../api/policy';
const proposer_id = (state) => state.proposal_id
const motorVehicle = (state) => state.motor_insurance
const basicDetail = (state) => state.basic_detail
const spouseDetail = (state) => state.spouse_detail

function* postHealthInsurance(action) {
    // try to make the api call
    let prop_id = yield select(proposer_id)
    try {
        // yield the api responsse into data
        const payload = new FormData()
        payload.append('name_of_insurer', action.payload.name_of_insure)
        payload.append('policy_type', action.payload.policy_type)
        payload.append('sum_insured', action.payload.sum_insured)
        payload.append('individual_or_floater', action.payload.individual_or_floater)
        const data = yield call(api.health_insurance_policies_held, '2614426', payload);
        console.log("====ddd====", data.data);
    }catch(e) {
        console.log(e);
    }
}

function* postTICover(action) {
    // try to make the api call
    let prop_id = yield select(proposer_id)
    try {
        // yield the api responsse into data
        const payload = new FormData()
        payload.append('proposer_has_TI_cover', action.payload.proposer_has_TI_cover)
        payload.append('name_of_insurer', action.payload.name_of_insure)
        payload.append('rider_or_standalone', action.payload.rider_or_standalone)
        payload.append('acc_or_additional_benefit', action.payload.acc_or_additional_benefit)
        payload.append('coverage_amount', action.payload.coverage_amount)
        const data = yield call(api.proposer_ti_coverage, '2614426', payload);
        console.log("====ddd====", data.data);
    }catch(e) {
        console.log(e);
    }
}

function* postCICover(action) {
    // try to make the api call
    let prop_id = yield select(proposer_id)
    try {
        // yield the api responsse into data
        const payload = new FormData()
        payload.append('proposer_has_CI_cover', action.payload.proposer_has_CI_cover)
        payload.append('name_of_insurer', action.payload.name_of_insure)
        payload.append('sum_assured_available', action.payload.sum_assured_available)
        payload.append('additional_benefits', action.payload.additional_benefits)
        payload.append('additional_benefits_amount', action.payload.additional_benefits_amount)
        const data = yield call(api.proposer_ci_coverage, '2614426', payload);
        console.log("====ddd====", data.data);
    }catch(e) {
        console.log(e);
    }
}

function* postPDCover(action) {
    // try to make the api call
    let prop_id = yield select(proposer_id)
    try {
        // yield the api responsse into data
        const payload = new FormData()
        payload.append('proposer_has_PD_cover', action.payload.proposer_has_PD_cover)
        payload.append('name_of_insurer', action.payload.name_of_insure)
        payload.append('sum_assured_available', action.payload.sum_assured_available)
        payload.append('additional_benefits_ATPD', action.payload.additional_benefits)
        payload.append('additional_benefits_amount', action.payload.additional_benefits_amount)
        const data = yield call(api.proposer_pd_coverage, '2614426', payload);
        console.log("====ddd====", data.data);
    }catch(e) {
        console.log(e);
    }
}

function* postMotorInsurance(action) {
    // try to make the api call
    let prop_id = yield select(proposer_id)
    let motor_vehicle = yield select(motorVehicle)
    try {
        // yield the api responsse into data
        const payload = new FormData()
        payload.append('proposer_owns_motor_vehicle', motor_vehicle.proposer_owns_motor_vehicle)
        payload.append('vehicle_type', motor_vehicle.vehicle_type)
        payload.append('vehicle_new_cost_asof_today', motor_vehicle.vehicle_new_cost_asof_today)
        payload.append('vehicle_new_actual_cost', motor_vehicle.vehicle_new_actual_cost)
        payload.append('vehicle_age', motor_vehicle.vehicle_age)
        payload.append('proposer_has_bought_motor_insurance', motor_vehicle.proposer_has_bought_motor_insurance)
        payload.append('motor_insurance_type', motor_vehicle.motor_insurance_type)
        payload.append('vehicle_insured_depreciated_value', motor_vehicle.vehicle_insured_depreciated_value)
        payload.append('has_zero_debt', action.payload.zero_debt)
        payload.append('has_return_to_invoice_cover', action.payload.has_return_to_invoice_cover)
        payload.append('has_cost_of_consumable_items', action.payload.has_cost_of_consumable_items)
        payload.append('has_no_claim_bonus', action.payload.additional_benefits_amount)
        payload.append('has_key_replacement_cover', action.payload.has_key_replacement_cover)
        payload.append('has_engine_gear_box_protector', action.payload.has_engine_gear_box_protector)
        payload.append('has_emergency_assistance', action.payload.has_emergency_assistance)
        payload.append('has_loss_of_use', action.payload.has_loss_of_use)
        payload.append('insurer_name_motor_loan', motor_vehicle.insurer_name_motor_loan)
        const data = yield call(api.motor_insurance_coverage, '2614426', payload);
        console.log("====ddd====", data.data);
    }catch(e) {
        console.log(e);
    }
}
function* postBasicDetail(action) {
    // try to make the api call
    let prop_id = yield select(proposer_id)
    let basic_detail = yield select(basicDetail)
    try {
        // yield the api responsse into data
        const payload = new FormData()

        payload.append('proposer_name', basic_detail.proposer_name)
        payload.append('proposer_dob', basic_detail.proposer_dob)
        payload.append('proposer_age', basic_detail.proposer_age)
        payload.append('proposer_weight', basic_detail.proposer_weight)
        payload.append('proposer_height', basic_detail.proposer_height)
        payload.append('proposer_bmi', basic_detail.proposer_bmi)
        payload.append('proposer_age_expected_to_work', basic_detail.proposer_age_expected_to_work)
        payload.append('proposer_occupation_nature', basic_detail.proposer_occupation_nature)
        payload.append('proposer_annual_income', basic_detail.proposer_annual_income)
        payload.append('proposer_expected_increase_annual_income', basic_detail.proposer_expected_increase_annual_income.insurer_name_motor_loan)
        payload.append('proposer_annual_expense', basic_detail.proposer_annual_expense)
        payload.append('proposer_has_children', basic_detail.proposer_has_children)
        payload.append('proposer_requires_coverage_health_extra_members', basic_detail.proposer_requires_coverage_health_extra_members)
        payload.append('proposer_has_life_insurance_policies', basic_detail.proposer_has_life_insurance_policies)
        payload.append('proposer_has_health_insurance_policies', basic_detail.proposer_has_health_insurance_policies)
        payload.append('proposer_has_TI_cover', basic_detail.proposer_has_TI_cover)
        payload.append('proposer_has_CI_cover', basic_detail.proposer_has_CI_cover)
        payload.append('proposer_has_PD_cover', basic_detail.proposer_has_PD_cover)
        payload.append('onboarded_by', basic_detail.onboarded_by)

        const data = yield call(api.basic_detail, '2614426', payload);
        console.log("====ddd====", data.data);
    }catch(e) {
        console.log(e);
    }
}
function* postSpouseDetail(action) {
    // try to make the api call
    let prop_id = yield select(proposer_id)
    let spouse_detail = yield select(spouseDetail)
    try {
        // yield the api responsse into data
        const payload = new FormData()
        payload.append('spouse_name', spouse_detail.spouse_name)
        payload.append('spouse_dob', spouse_detail.spouse_dob)
        payload.append('spouse_age', spouse_detail.spouse_age)
        payload.append('spouse_weight', spouse_detail.spouse_weight)
        payload.append('spouse_height', spouse_detail.spouse_height)
        payload.append('spouse_bmi', spouse_detail.spouse_bmi)
        payload.append('spouse_age_expected_to_work', spouse_detail.spouse_age_expected_to_work)
        payload.append('spouse_occupation_nature', spouse_detail.spouse_occupation_nature)
        payload.append('spouse_annual_income', spouse_detail.spouse_annual_income)
        payload.append('spouse_expected_increase_annual_income', spouse_detail.spouse_expected_increase_annual_income)
        payload.append('proposer_annual_expense', spouse_detail.proposer_annual_expense)
        payload.append('proposer_marital_status', spouse_detail.proposer_owns_motor_vehicle)
        payload.append('proposer_has_children', spouse_detail.proposer_has_children)
        payload.append('proposer_requires_coverage_health_extra_members', spouse_detail.proposer_requires_coverage_health_extra_members)
        payload.append('proposer_has_life_insurance_policies', spouse_detail.proposer_has_life_insurance_policies)
        payload.append('proposer_has_health_insurance_policies', spouse_detail.proposer_has_health_insurance_policies)
        payload.append('proposer_has_TI_cover', spouse_detail.proposer_has_TI_cover)
        payload.append('proposer_has_CI_cover', spouse_detail.proposer_has_CI_cover)
        payload.append('proposer_has_PD_cover', spouse_detail.proposer_has_PD_cover)
        payload.append('onboarded_by', spouse_detail.onboarded_by)

        const data = yield call(api.spouse_details, '2614426', payload);
        console.log("====ddd====", data.data);
    }catch(e) {
        console.log(e);
    }
}
function* watchPostHealthInsurance() {
    // create watcher of fetchData function
    yield takeEvery(types.ADD_ADDITIONAL_INFO, postHealthInsurance);
}
function* watchPostTICover() {
    // create watcher of fetchData function
    yield takeEvery(types.ADD_TI_COVER, postTICover);
}
function* watchPostCICover() {
    // create watcher of fetchData function
    yield takeEvery(types.ADD_CI_COVER, postCICover);
}
function* watchPostPDCover() {
    // create watcher of fetchData function
    yield takeEvery(types.ADD_PD_COVER, postPDCover);
}
function* watchPostMotorInsurance() {
    // create watcher of fetchData function
    yield takeEvery(types.ADD_MOTOR_INSURANCE, postMotorInsurance);
}
function* watchPostBasicDetail() {
    // create watcher of fetchData function
    yield takeEvery(types.HAS_PD_COVER, postBasicDetail);
}
function* watchPostSpouseDetail() {
    // create watcher of fetchData function
    yield takeEvery(types.HAS_PD_COVER, postSpouseDetail);
}
const PolicySagas = [
    fork(watchPostHealthInsurance),
    fork(watchPostTICover),
    fork(watchPostCICover),
    fork(watchPostPDCover),
    fork(watchPostMotorInsurance),
    fork(watchPostBasicDetail),
    fork(watchPostSpouseDetail),
];

export default PolicySagas;