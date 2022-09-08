import { applyMiddleware, legacy_createStore as createStore } from 'redux'
import createSagaMiddleware, { SagaMiddleware } from 'redux-saga'
import { createWrapper } from 'next-redux-wrapper'
import {composeWithDevToolsDevelopmentOnly} from '@redux-devtools/extension';

import rootReducer from './reducers'
import rootSaga from './sagas'

const bindMiddleware = (middleware: SagaMiddleware<object>[]) => {
  return applyMiddleware(...middleware)
}

export const makeStore = (context: any) => {
  const sagaMiddleware = createSagaMiddleware()
  const store = createStore(rootReducer, composeWithDevToolsDevelopmentOnly(bindMiddleware([sagaMiddleware])))
  store.sagaTask = sagaMiddleware.run(rootSaga)
  return store
}

export const wrapper = createWrapper(makeStore, { debug: true });