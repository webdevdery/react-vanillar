import { takeEvery, fork, call,  put, select } from 'redux-saga/effects';
import types from '../actions/types';
import * as api from '../api/final';
const proposer_id = (state) => state.proposal_id

function* getResultModule() {
    // try to make the api call
    let prop_id = yield select(proposer_id)
    try {
        // yield the api responsse into data
        const module1 = yield call(api.get_result_module1, '2614426');
        const module2 = yield call(api.get_result_module2, '2614426');
        const module3 = yield call(api.get_result_module3, '2614426');
        const module4 = yield call(api.get_result_module4, '2614426');
        const module5 = yield call(api.get_result_module5_motor, '2614426');
        const module6 = yield call(api.get_result_module5_property, '2614426');
        yield put({type: types.GET_RESULT_MODULE1, payload: module1.data})
        yield put({type: types.GET_RESULT_MODULE2, payload: module2.data})
        yield put({type: types.GET_RESULT_MODULE3, payload: module3.data})
        yield put({type: types.GET_RESULT_MODULE4, payload: module4.data})
        yield put({type: types.GET_RESULT_MODULE5, payload: module5.data})
        yield put({type: types.GET_RESULT_MODULE6, payload: module6.data})
    }catch(e) {
        console.log(e);
    }
}
function* watchGetResultModule() {
    // create watcher of fetchData function
    yield takeEvery(types.LOAD_RESULT_MODULE, getResultModule);
}

const FinalSagas = [
    fork(watchGetResultModule)
];

export default FinalSagas;