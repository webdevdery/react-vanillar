import axios from 'axios';

// data api calls
export const liability_details = (id, postData) => {
    return axios.post(`http://52.66.252.194:8000/liability_details/${id}`, postData)
}
export const asset_details = (id, postData) => {
    return axios.post(`http://52.66.252.194:8000/asset_details/${id}`, postData)
}
export const additional_userinfo = (id, postData) => {
    return axios.post(`http://52.66.252.194:8000/additional_user_information/${id}`, postData)
}