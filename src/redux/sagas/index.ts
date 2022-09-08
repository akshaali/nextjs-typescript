import {all, fork} from 'redux-saga/effects';

import FetchData from './fetchData';

export default function* root() {
  yield all([
    fork(FetchData),
  ]);
}