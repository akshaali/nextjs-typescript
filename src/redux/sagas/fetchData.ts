import {takeLatest, call, put, all, select} from 'redux-saga/effects';
import actionTypes from '../Constants';
import {
  saveData
} from '../actions/fetchData';

function* fetchDataSaga(args) {
  try {
    yield put(saveData[{name:"a"}])
  } catch (e) {
    if (__DEV__) {
      console.log('ERROR post fetchDataSaga', e);
    }
  } finally {
  }
}

export default function* Sagas() {
  yield all([
    takeLatest(actionTypes.FETCH_POST_DATA, fetchDataSaga),
  ]);
}