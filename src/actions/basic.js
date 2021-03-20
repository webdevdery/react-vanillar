import types from './types';

const setPhoneNumber = payload => ({
  type: types.ADD_PHONE_NUMBER, payload
});
export const getProposalID = payload => ({
  type: types.GET_PROPOSAL_ID, payload
});

export const setName = payload => ({
  type: types.ADD_USER_NAME, payload
});

export const setBio = payload => ({
  type: types.ADD_BIO, payload
});

export const setProposer = payload => ({
  type: types.ADD_PROPOSER, payload
});

export const setMaritalStatus = payload => ({
  type: types.MARITAL_STATUS, payload
});
export const setChildStatus = payload => ({
  type: types.HAS_CHILD, payload
});
export const setPersonalInfo = payload => ({
  type: types.ADD_PERSONAL_INFO, payload
});

export const setWork = payload => ({
  type: types.ADD_WORK_DETAIL, payload
});

export const setChild = payload => ({
  type: types.ADD_CHILD_DETAIL, payload
});

export const setMemberStatus = payload => ({
  type: types.REQUIRED_MEMBER, payload
});

export const setMember = payload => ({
  type: types.ADD_MEMBER_DETAIL, payload
});

export const setFamily = payload => ({
  type: types.ADD_FAMILY_DETAIL, payload
});

export default setPhoneNumber;