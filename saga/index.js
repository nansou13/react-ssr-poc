import { call, put, select, all, takeLatest } from 'redux-saga/effects';
import api from '../api';
// import { APP_LOAD, GET_NEAREST_APPOINTMENT, resolveAppointmentNearest } from '../../global.action';

export function* requestUser() {
    console.log('TATATAATATATAATTA')
  const currentUser = yield select((state) => state.common.userConnected);
  try {
          const { data } = yield call(() => api.Demo.get());
          console.log(data)
        //   yield put(resolveAppointmentNearest(data));
          
        } catch (err) {
          console.log('error', err);
        }

  
}

// export function* getNearestAppointment() {
//     try {
//       const { data } = yield call(() => api.Patients.get());
//       yield put(resolveAppointmentNearest(data));
      
//     } catch (err) {
//       console.log('error', err);
//     }
//   }

export default function* sagas() {
  // Check for Public routes
    yield call(requestUser); 
    // yield all([takeLatest(GET_NEAREST_APPOINTMENT, getNearestAppointment)]);
  }
