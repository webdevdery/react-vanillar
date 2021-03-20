import axios from 'axios';
// data api calls
export const basic_detail = (id, postData) => {
    return axios.post(`http://52.66.252.194:8000/basic_detail/${id}`, postData)
}

export const spouse_details = (id, postData) => {
    return axios.post(`http://52.66.252.194:8000/spouse_details/${id}`, postData)
}

export const health_insurance_policies_held = (id, postData) => {
    return axios.post(`http://52.66.252.194:8000/health_insurance_policies_held/${id}`, postData)
}

export const proposer_ci_coverage = (id, postData) => {
    return axios.post(`http://52.66.252.194:8000/proposer_ci_coverage/${id}`, postData)
}

export const proposer_pd_coverage = (id, postData) => {
    return axios.post(`http://52.66.252.194:8000/proposer_pd_coverage/${id}`, postData)
}

export const proposer_ti_coverage = (id, postData) => {
    return axios.post(`http://52.66.252.194:8000/proposer_ti_coverage/${id}`, postData)
}

export const additional_user_information = (id, postData) => {
    return axios.post(`http://52.66.252.194:8000/additional_user_information/${id}`, postData)
}

export const motor_insurance_coverage = (id, postData) => {
    return axios.post(`http://52.66.252.194:8000/motor_insurance_coverage/${id}`, postData)
}

export const property_insurance_coverage = (id, postData) => {
    return axios.post(`http://52.66.252.194:8000/property_insurance_coverage/${id}`, postData)
}