import types from './types';

const setLiability = payload => ({
  type: types.ADD_LIABILITY, payload
});

export const setAssets = payload => ({
  type: types.ADD_ASSETS, payload
});

export const setAdditionalInfo = payload => ({
  type: types.ADD_ADDITIONAL_INFO, payload
});

export default setLiability;