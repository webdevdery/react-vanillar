import axios from 'axios';

export const proposer_id = (postData) => {
    return axios.get('http://52.66.252.194:8000/proposer_id/' +  postData)
}
// data api calls
export const phone_number = (postData) => {
    return axios.post('http://52.66.252.194:8000/phone_number', postData)
}


export const children_details = (id, postData) => {
    return axios.post(`http://52.66.252.194:8000/children_details/${id}`, postData)
}

export const aditional_member_details = (id, postData) => {
    return axios.post(`http://52.66.252.194:8000/aditional_member_details/${id}`, postData)
}

export const family_information = (id, postData) => {
    return axios.post(`http://52.66.252.194:8000/family_information/${id}`, postData)
}

