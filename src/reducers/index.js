import { combineReducers } from 'redux';

const initialState = 1;

const proposalState = 1;
const isAuthenticated = true;

const initialBasicDetailState = {
  phone_number: '',
  proposer_name: '',
  proposer_dob: '24/07/98',
  proposer_age: '22',
  proposer_weight: '80',
  proposer_height: '170',
  proposer_bmi: '12.2',
  proposer_age_expected_to_work: '60',
  proposer_occupation_nature: '1',
  proposer_annual_income: '200000',
  proposer_expected_increase_annual_income: '10',
  proposer_annual_expense: '100000',
  proposer_marital_status: '1',
  proposer_has_children: '0',
  proposer_requires_coverage_health_extra_members: '1',
  proposer_has_life_insurance_policies: '1',
  proposer_has_health_insurance_policies: '1',
  proposer_has_TI_cover: '1',
  proposer_has_CI_cover: '1',
  proposer_has_PD_cover: '1',
  onboarded_by: '12121'
}
const initialSpouseDetailState = {
  phone_number: '',
  spouse_name: '',
  spouse_dob: '24/07/98',
  spouse_age: '22',
  spouse_weight: '80',
  spouse_height: '170',
  spouse_bmi: '12.2',
  spouse_age_expected_to_work: '60',
  spouse_occupation_nature: '1',
  spouse_annual_income: '200000',
  spouse_expected_increase_annual_income: '10',
  proposer_annual_expense: '100000',
  proposer_marital_status: '1',
  proposer_has_children: '0',
  proposer_requires_coverage_health_extra_members: '1',
  proposer_has_life_insurance_policies: '1',
  proposer_has_health_insurance_policies: '1',
  proposer_has_TI_cover: '1',
  proposer_has_CI_cover: '1',
  proposer_has_PD_cover: '1',
  onboarded_by: '12121'
}
const initialChildrenDetailState = {
  child_name: '',
  child_dob: '30/1/12',
  child_age: '11',
  cost_he_1: '150000',
  expected_inflation_he_1: '3',
  age_when_needed_he_1: '17',
  cost_he_2: '200000',
  expected_inflation_he_2: '5',
  age_when_needed_he_2: '20',
  entp_fund: '500000',
  expected_inflation_entp_fund: '5',
  age_when_needed_entp_fund: '25',
  cost_marriage: '1000000',
  expected_inflation_marriage_cost: '5',
  age_when_married: '30'
}
const initialAdditionalState = {
  member_age: '45',
  member_weight: '80',
  member_height: '175',
  member_bmi: '23',
  member_occupati_on_nature: '2'
}
const initialFamilyState = {
  city_of_residence: 'Metros and Tier 1 Cities',
  avg_weekly_physical_activity: 'Low',
  alcohol_smoking_habits: 'Low',
  level_base_health_coverage_required: 'Bare Minimum Coverage',
  disease_history_heart_diseases: '0',
  disease_history_diabetes: '1',
  disease_history_high_bp: '1',
  disease_history_stroke: '0',
  disease_history_cancer: '1',
  disease_history_others: '0'
}

// const initialLiabilityState = {
//   has_home_loan: '0',
//   home_loan_outstanding_principal: '0',
//   has_motor_loan: '1',
//   motor_loan_outstanding_principle: '10000',
//   has_personal_loan: '0',
//   personal_loan_outstanding_principle: '0',
//   has_any_other_loan: '0',
//   has_any_other_loan_outstanding_principle: '0'

// }
// const initialAssetsState = {
//   has_bank_deposits: '1',
//   bank_deposit_value: '100000',
//   has_mf_equities: '1',
//   mf_equities_value: '10000',
//   has_real_estate: '1',
//   real_estate_value: '200000',
//   has_cash_gold_jewellery: '0',
//   cash_gold_jewellery_value: '0',
//   has_any_other_assets: '0',
//   any_other_assets_value: '0',
//   total_assets_value: '300000'
// }

const initialHealthState = {
  name_of_insurer: '1',
  policy_type: '1',
  sum_insured: '15000000',
  individual_or_floater: 'individual'
}
const initialCICoverState = {
  proposer_has_CI_cover: '1',
  name_of_insurer: '2',
  sum_assured_available: '50000',
  additional_benefits: 'Yes',
  additional_benefits_amount: '10000'
}
const initialPDCoverState = {
  proposer_has_PD_cover: '1',
  name_of_insurer: '1',
  sum_assured_available: '10000',
  additional_benefits_ATPD: 'Yes',
  additional_benefits_amount: '50000'
}
const initialTICoverState = {
  proposer_has_TI_cover: '1',
  name_of_insurer: '2',
  rider_or_standalone: 'Rider',
  acc_or_additional_benefit: 'Accelerating base benefit',
  coverage_amount: '50000'
}
const initialAdditionalUserInfoState = {
  income_growth: '12',
  investment_amount: '8',
  expense_growth_inflation: '6',
  target_annual_income_required: '50',
  has_existing_retirement_fund: '0',
  retirement_fund_value: '0',
  inv_equities: '0',
  inv_fixed_deposits: '0',
  inv_house_property: '0',
  inv_other_real_estate: '0',
  inv_gold_bullion: '0',
  inv_total: '100',
  yearly_contribution_retirement_fund: '10',
  level_risk_aversion: 'Low'
}
const initialMotorInsuranceState = {
  proposer_owns_motor_vehicle: '1',
  vehicle_type: '2',
  vehicle_new_cost_asof_today: '10',
  vehicle_new_actual_cost: '14',
  vehicle_age: '3',
  proposer_has_bought_motor_insurance: '1',
  motor_insurance_type: '1',
  vehicle_insured_depreciated_value: '400000',
  has_zero_debt: '1',
  has_return_to_invoice_cover: '0',
  has_cost_of_consumable_items: '1',
  has_no_claim_bonus: '1',
  has_key_replacement_cover: '0',
  has_engine_gear_box_protector: '0',
  has_emergency_assistance: '1',
  has_loss_of_use: '0',
  insurer_name_motor_loan: 'any'
}
const initialPropertyInsuranceState = {
  proposer_owns_residential_property: '1',
  property_type: '2',
  property_market_value: '5000000',
  property_reconstruction_cost: '1000000',
  property_value_of_content: '500000',
  proposer_has_bought_home_insurance: '1',
  property_value_declared: '1000000',
  property_value_of_content_declared: '500000',
  proposer_has_bought_cover_additional_rent: '1',
  proposer_has_bought_cover_jewellery: '0',
  proposer_has_bought_cover_terrorism: '0',
  insurer_name_home_loan: 'any'
}
const initialFinalResultState = {
  module1: {},
  module2: {},
  module3: {},
  module4: {},
  module5: {},
  module6: {}
}
function auth(state = isAuthenticated, action) {
  switch (action.type) {
    case 'SET_AUTHENTICATED':
      state = action.payload
      return state;
    default:
      return state;
  }
}

function count(state = initialState, action) {
  switch (action.type) {
    case 'INCREMENT':
      return state + 1
    case 'DECREMENT':
      return state - 1
    case 'SET_CURRENT':
      state = 1;
      return state;
  default:
    return state;
  }
}
function proposal_id(state = proposalState, action) {
  switch (action.type) {
    case 'SET_PROPOSAL_ID':
      state = action.payload;
      return state;
    default:
      return state;
  }

}
function basic_detail(state = initialBasicDetailState, action) {
  switch (action.type) {
    case 'ADD_PHONE_NUMBER':
      state.phone_number = action.payload
      return state;

    case 'ADD_USER_NAME':
      state.proposer_name = action.payload
      return state;

    case 'ADD_BIO':
      state.proposer_dob = action.payload.proposer_dob
      state.proposer_age = action.payload.proposer_age
      state.proposer_height = action.payload.proposer_height
      state.proposer_bmi = action.payload.proposer_bmi
      return state;

    case 'ADD_PROPOSER':
      state.proposer_occupation_nature = action.payload.occupation
      state.proposer_annual_income = action.payload.annual_incone
      state.proposer_expected_increase_annual_income = action.payload.expected_increase
      state.proposer_annual_expense = action.payload.annual_expence
      return state;

    case 'MARITAL_STATUS':
      state.proposer_marital_status = action.payload
      return state;

    case 'HAS_CHILD':
      state.proposer_has_children = action.payload
      return state;
      
    case 'REQUIRED_MEMBER':
      state.proposer_requires_coverage_health_extra_members = action.payload
      return state;

    case 'HAS_LIFE_INSURANCE':
      state.proposer_has_life_insurance_policies = action.payload
      return state;

    case 'HAS_HEALTH_INSURANCE':
      state.proposer_has_health_insurance_policies = action.payload
      return state;

    case 'HAS_TI_COVER':
      state.proposer_has_TI_cover = action.payload
      return state;

    case 'HAS_CI_COVER':
      state.proposer_has_CI_cover = action.payload
      return state;

    case 'HAS_PD_COVER':
      state.proposer_has_PD_cover = action.payload
      return state;

    default:
      return state;
  }
}

function spouse_detail(state = initialSpouseDetailState, action) {
    switch (action.type) {
    case 'ADD_PERSONAL_INFO':
      state.spouse_dob = action.payload.proposer_dob
      state.spouse_age = action.payload.proposer_age
      state.spouse_height = action.payload.proposer_height
      state.spouse_bmi = action.payload.proposer_bmi
      return state;

    case 'ADD_WORK_DETAIL':
      state.proposer_occupation_nature = action.payload.occupation
      state.proposer_annual_income = action.payload.annual_incone
      state.proposer_expected_increase_annual_income = action.payload.expected_increase
      state.proposer_has_children = action.payload.has_children
      return state;
   
    case 'MARITAL_STATUS':
      state.proposer_marital_status = action.payload
      return state;

    case 'HAS_CHILD':
      state.proposer_has_children = action.payload
      return state;
      
    case 'REQUIRED_MEMBER':
      state.proposer_requires_coverage_health_extra_members = action.payload
      return state;

    case 'HAS_LIFE_INSURANCE':
      state.proposer_has_life_insurance_policies = action.payload
      return state;

    case 'HAS_HEALTH_INSURANCE':
      state.proposer_has_health_insurance_policies = action.payload
      return state;

    case 'HAS_TI_COVER':
      state.proposer_has_TI_cover = action.payload
      return state;

    case 'HAS_CI_COVER':
      state.proposer_has_CI_cover = action.payload
      return state;

    case 'HAS_PD_COVER':
      state.proposer_has_PD_cover = action.payload
      return state;

    default:
      return state;
  }
}

function child_detail(state = initialChildrenDetailState, action) {
  switch (action.type) {
    case 'ADD_CHILD_DETAIL':
      state = action.payload
      return state;
    default:
      return state;
  }
}
function member_detail(state = initialAdditionalState, action) {
 switch (action.type) {
   case 'ADD_MEMBER_DETAIL':
    state.member_age = action.payload.member_age
    state.member_bmi = action.payload.member_bmi
    return state;
   default:
     return state;
 }
}
function family_detail(state = initialFamilyState, action) {
 switch (action.type) {
   case 'ADD_FAMILY_DETAIL':
    state.city_of_residence = action.payload.city_of_residence
    state.avg_weekly_physical_activity = action.payload.avg_weekly_physical_activity
    state.alcohol_smoking_habits = action.payload.alcohol_smoking_habits
    state.level_base_health_coverage_required = action.payload.level_base_health_coverage_required
    state.disease_history_heart_diseases = action.payload.disease_history_heart_diseases
    state.disease_history_high_bp = action.payload.disease_history_high_bp
    state.disease_history_stroke = action.payload.disease_history_stroke
    state.disease_history_cancer = action.payload.disease_history_cancer
    state.disease_history_others = action.payload.disease_history_others
    return state;
   default:
     return state;
 }
}

function additional_userinfo(state = initialAdditionalUserInfoState, action) {
 switch (action.type) {
   case 'ADD_ADDITIONAL_INFO':
    state = action.payload
    return state;
   default:
     return state;
 }
}
function health_detail(state = initialHealthState, action) {
 switch (action.type) {
   case 'ADD_HEALTH_INSURANCE':
    state = action.payload
    return state;
   default:
     return state;
 }
}

function ti_cover(state = initialTICoverState, action) {
 switch (action.type) {
   case 'ADD_TI_COVER':
    state = action.payload
    return state;
   default:
     return state;
 }
}

function ci_cover(state = initialCICoverState, action) {
 switch (action.type) {
   case 'ADD_TI_COVER':
    state = action.payload
    return state;
   default:
     return state;
 }
}

function pd_cover(state = initialPDCoverState, action) {
 switch (action.type) {
   case 'ADD_PD_COVER':
    state = action.payload
    return state;
   default:
     return state;
 }
}

function motor_insurance(state = initialMotorInsuranceState, action) {
 switch (action.type) {
   case 'HAS_MOTOR_VEHICLE':
    state.proposer_owns_motor_vehicle = action.payload
    return state;
   case 'ADD_MOTOR_VEHICLE':
    state.vehicle_type = action.payload.vehicle_type
    state.vehicle_age = action.payload.vehicle_age
    state.vehicle_new_actual_cost = action.payload.vehicle_new_actual_cost
    return state;
  case 'HAS_MOTOR_INSURANCE':
    state.proposer_has_bought_motor_insurance = action.payload
    return state;
  case 'ADD_MOTOR_INSURANCE':
    state.motor_insurance_type = action.payload.motor_insurance_type
    state.has_cost_of_consumable_items = action.payload.has_cost_of_consumable_items
    state.has_zero_debt = action.payload.has_zero_debt
    state.has_return_to_invoice_cover = action.payload.has_return_to_invoice_cover
    state.has_key_replacement_cover = action.payload.has_key_replacement_cover
    state.has_engine_gear_box_protector = action.payload.has_engine_gear_box_protector
    state.has_emergency_assistance = action.payload.has_emergency_assistance
    state.has_loss_of_use = action.payload.has_loss_of_use
    return state;
   default:
     return state;
 }
}
function final(state = initialFinalResultState, action) {
  switch (action.type) {
    case 'GET_RESULT_MODULE1':
      return { ...state, module1: action.payload };
    case 'GET_RESULT_MODULE2':
      return { ...state, module2: action.payload };
    case 'GET_RESULT_MODULE3':
      return { ...state, module3: action.payload };
    case 'GET_RESULT_MODULE4':
      return { ...state, module4: action.payload };
    case 'GET_RESULT_MODULE5':
      return { ...state, module5: action.payload };
    case 'GET_RESULT_MODULE6':
      return { ...state, module6: action.payload };
    default:
      return state;
  }
}
const rootReducer = combineReducers({
  proposal_id,
  count,
  auth,
  basic_detail,
  spouse_detail,
  child_detail,
  member_detail,
  family_detail,
  additional_userinfo,
  health_detail,
  ti_cover,
  ci_cover,
  pd_cover,
  motor_insurance,
  final
});

export default rootReducer;