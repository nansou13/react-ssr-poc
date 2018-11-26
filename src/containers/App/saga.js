import { call, put, select, all, takeLatest } from 'redux-saga/effects';
import api from '../../api';
import { APP_LOAD, GET_NEAREST_APPOINTMENT, resolveAppointmentNearest } from '../../global.action';

export function* requestUser() {
  const currentUser = yield select((state) => state.common.userConnected);

  if (!currentUser || Object.keys(currentUser).length === 0) {
    const { data } = yield call(() => api.Auth.me());

    if (data.id) {
      yield put({ type: APP_LOAD, payload: { user: data } });
    } else {
      console.log('error user....')
    }
  }
}

export function* getNearestAppointment() {
    try {
      const { data } = yield call(() => api.Patients.get());
      yield put(resolveAppointmentNearest(data));
      
    } catch (err) {
      console.log('error', err);
    }
  }

export default function* sagas() {
  // Check for Public routes
    yield call(requestUser); 
    yield all([takeLatest(GET_NEAREST_APPOINTMENT, getNearestAppointment)]);
  }
