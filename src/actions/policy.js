import types from './types';

const setLifeInsurance = payload => ({
  type: types.ADD_LIFE_INSURANCE, payload
});
export const setLIStatus = payload => ({
  type: types.HAS_LIFE_INSURANCE, payload
});
export const setHealthInsurance = payload => ({
  type: types.ADD_HEALTH_INSURANCE, payload
});
export const setHIStatus = payload => ({
  type: types.HAS_HEALTH_INSURANCE, payload
});
export const setTICover = payload => ({
  type: types.ADD_TI_COVER, payload
});
export const setTICoverStatus = payload => ({
  type: types.HAS_TI_COVER, payload
});
export const setCICover = payload => ({
  type: types.ADD_CI_COVER, payload
});
export const setCICoverStatus = payload => ({
  type: types.HAS_CI_COVER, payload
});
export const setPDCover = payload => ({
  type: types.ADD_PD_COVER, payload
});
export const setPDCoverStatus = payload => ({
  type: types.HAS_PD_COVER, payload
});
export const setHomeInsurance = payload => ({
  type: types.ADD_HOME_INSURANCE, payload
});

export const setMotorVehicle = payload => ({
  type: types.ADD_MOTOR_VEHICLE, payload
});
export const setMotorVehicleStatus = payload => ({
  type: types.HAS_MOTOR_VEHICLE, payload
});
export const setMotorInsurance = payload => ({
  type: types.ADD_MOTOR_INSURANCE, payload
});
export const setMotorInsuranceStatus = payload => ({
  type: types.HAS_MOTOR_INSURANCE, payload
});
export default setLifeInsurance;