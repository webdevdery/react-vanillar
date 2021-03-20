import { takeEvery, fork, call,  put, select } from 'redux-saga/effects';
import types from '../actions/types';
import * as api from '../api/liability';
const proposer_id = (state) => state.proposal_id

function* postAdditionalUserInfo(action) {
    // try to make the api call
    let prop_id = yield select(proposer_id)
    try {
        // yield the api responsse into data
        const payload = new FormData()
        payload.append('income_growth', action.payload.income_growth)
        payload.append('investment_amount', action.payload.investment_amount)
        payload.append('expense_growth_inflation', action.payload.expense_growth_inflation)
        payload.append('target_annual_income_required', action.payload.target_annual_income_required)
        payload.append('has_existing_retirement_fund', action.payload.has_existing_retirement_fund)
        payload.append('retirement_fund_value', action.payload.retirement_fund_value)
        payload.append('inv_equities', action.payload.inv_equities)
        payload.append('inv_fixed_deposits', action.payload.inv_fixed_deposits)
        payload.append('inv_house_property', action.payload.inv_house_property)
        payload.append('inv_other_real_estate', action.payload.inv_other_real_estate)
        payload.append('inv_gold_bullion', action.payload.inv_gold_bullion)
        payload.append('inv_total', action.payload.inv_total)
        payload.append('yearly_contribution_retirement_fund', action.payload.yearly_contribution_retirement_fund)
        payload.append('level_risk_aversion', action.payload.level_risk_aversion)

        const data = yield call(api.additional_userinfo, '2614426', payload);
        console.log("====ddd====", data.data);
    }catch(e) {
        console.log(e);
    }
}
function* watchPostAdditionalUserInfo() {
    // create watcher of fetchData function
    yield takeEvery(types.ADD_ADDITIONAL_INFO, postAdditionalUserInfo);
}

const LiabilitySagas = [
    fork(watchPostAdditionalUserInfo)
];

export default LiabilitySagas;