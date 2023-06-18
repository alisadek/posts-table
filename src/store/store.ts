import { configureStore } from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';
import { all } from 'redux-saga/effects';
import rootReducer from './rootReducer';
import postsSaga from './posts/postsSaga';

export function* rootSaga() {
  yield all([postsSaga()]);
}

const sagaMiddleware = createSagaMiddleware();
const middleware = [
    sagaMiddleware,
  ];
const store = configureStore({
  reducer: rootReducer,
  middleware: middleware,
});

sagaMiddleware.run(rootSaga);

export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
