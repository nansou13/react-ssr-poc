export const APP_LOAD = 'app/APP_LOAD';
export const GET_NEAREST_APPOINTMENT = 'app/GET_NEAREST_APPOINTMENT'
export const RESOLVE_APPOINTMENT_NEAREST = 'app/RESOLVE_APPOINTMENT_NEAREST'

export function refreshNearestAppointment() {
    return {
      type: GET_NEAREST_APPOINTMENT,
    };
  }
  

  export function resolveAppointmentNearest(appointment) {
    return {
      type: RESOLVE_APPOINTMENT_NEAREST,
      payload: appointment,
    };
  }