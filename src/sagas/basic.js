import { takeEvery, fork, call,  put, select } from 'redux-saga/effects';
import types from '../actions/types';
import * as api from '../api/basic';
 const proposer_id = (state) => state.proposal_id
//  const config = {
//         headers: {
//             'content-type': 'multipart/form-data'
//         }
//     }
// create a generator function
// create a generator function
function* postPhoneNumber(action) {
    // try to make the api call

    try {
        // yield the api responsse into data
        const payload = new FormData()
        payload.append('phone_number', action.payload)
        const data = yield call(api.phone_number, payload);
        if(data.data.success === undefined) {
            yield put({ type: "SET_PROPOSAL_ID", payload: data.data.fail});
        } else {
            yield put({ type: "SET_PROPOSAL_ID", payload: data.data.success});
        }
    }catch(e) {
        console.log(e);
    }
}
function* postChildData(action) {
    // try to make the api call
    let prop_id = yield select(proposer_id)
    try {
        // yield the api responsse into data
        const payload = new FormData()
        payload.append('child_name', 'John')
        payload.append('child_dob', action.payload.child_dob)
        payload.append('child_age', action.payload.child_age)
        payload.append('cost_he_1', action.payload.cost_he_1)
        payload.append('expected_inflation_he_1', action.payload.expected_inflation_he_1)
        payload.append('age_when_needed_he_1', '17')
        payload.append('cost_he_2', '200000')
        payload.append('expected_inflation_he_2', '5')
        payload.append('age_when_needed_he_2', '20')
        payload.append('entp_fund', '500000')
        payload.append('expected_inflation_entp_fund', '5')
        payload.append('age_when_needed_entp_fund', '25')
        payload.append('cost_marriage', '1000000')
        payload.append('expected_inflation_marriage_cost', '5')
        payload.append('age_when_married', '30')

        const data = yield call(api.children_details, '2614426', payload);
        console.log("====ddd====", data.data);
    }catch(e) {
        console.log(e);
    }
}
function* postMemberData(action) {
    // try to make the api call
    let prop_id = yield select(proposer_id)
    try {
        // yield the api responsse into data
        const payload = new FormData()
        payload.append('member_age', '45')
        payload.append('member_weight', '80')
        payload.append('member_height', '175')
        payload.append('member_bmi', action.payload.member_bmi)
        payload.append('member_occupation_nature', '2')

        const data = yield call(api.aditional_member_details, '2614426', payload);
        console.log("====ddd====", data.data);
    }catch(e) {
        console.log(e);
    }
}
function* postFamilyData(action) {
    // try to make the api call
    let prop_id = yield select(proposer_id)
    try {
        // yield the api responsse into data
        const payload = new FormData()
        payload.append('city_of_residence', action.payload.city_of_residence)
        payload.append('avg_weekly_physical_activity', action.payload.avg_weekly_physical_activity)
        payload.append('alcohol_smoking_habits', action.payload.alcohol_smoking_habits)
        payload.append('level_base_health_coverage_required', action.payload.level_base_health_coverage_required)
        payload.append('disease_history_heart_diseases', action.payload.disease_history_heart_diseases)
        payload.append('disease_history_diabetes', '1')
        payload.append('disease_history_high_bp', action.payload.disease_history_high_bp)
        payload.append('disease_history_stroke', action.payload.disease_history_stroke)
        payload.append('disease_history_cancer', action.payload.disease_history_cancer)
        payload.append('disease_history_others', action.payload.disease_history_others)

        const data = yield call(api.family_information, '2614426', payload);
        console.log("====ddd====", data.data);
    }catch(e) {
        console.log(e);
    }
}
function* watchProposerId() {
    // create watcher of fetchData function
    yield takeEvery(types.GET_PROPOSAL_ID, postPhoneNumber);
}
function* watchPostChild() {
    // create watcher of fetchData function
    yield takeEvery(types.ADD_CHILD_DETAIL, postChildData);
}
function* watchPostMemberData() {
    // create watcher of fetchData function
    yield takeEvery(types.ADD_MEMBER_DETAIL, postMemberData);
}
function* watchPostFamilyData() {
    // create watcher of fetchData function
    yield takeEvery(types.ADD_FAMILY_DETAIL, postFamilyData);
}
const BasicSagas = [
    fork(watchProposerId),
    fork(watchPostChild),
    fork(watchPostMemberData),
    fork(watchPostFamilyData),
];

export default BasicSagas;