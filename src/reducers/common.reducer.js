import {
  APP_LOAD,
  RESOLVE_APPOINTMENT_NEAREST,
} from '../global.action';

const DEFAULT_VALUES = {
  userConnected: null,
  consultation: false,
};

export default function common(state = DEFAULT_VALUES, action) {
  const { payload, type } = action;

  switch (type) {
    case APP_LOAD:
      return { ...state, userConnected: payload.user };
    case RESOLVE_APPOINTMENT_NEAREST:
      return { ...state, specialities: payload };
    default:
      return state;
  }
}
