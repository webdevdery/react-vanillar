import { all, call, delay, put, takeEvery } from 'redux-saga/effects'
import BasicSagas from './basic';
import PolicySatas from './policy';
import LiabilitySagas from './liability';
import FinalSagas from './final';
export function* incrementAsync() {
  yield delay(1000)
  yield put({type: 'INCREMENT'})
}

export function* watchIncrementAsync() {
  yield takeEvery('INCREMENT_ASYNC', incrementAsync)
}

// single entry point to start all Sagas at once
export default function* rootSaga() {
  yield all([
    call(watchIncrementAsync),
    ...BasicSagas,
    ...PolicySatas,
    ...LiabilitySagas,
    ...FinalSagas
  ])
}