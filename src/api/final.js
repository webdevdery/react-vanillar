import axios from 'axios';

export const get_result_module1 = (id) => {
    return axios.get(`http://52.66.252.194:8000/get_result_module1/${id}`)
}

export const get_result_module2 = (id) => {
    return axios.get(`http://52.66.252.194:8000/get_result_module2/${id}`)
}

export const get_result_module3 = (id) => {
    return axios.get(`http://52.66.252.194:8000/get_result_module3/${id}`)
}

export const get_result_module4 = (id) => {
    return axios.get(`http://52.66.252.194:8000/get_result_module4/${id}`)
}

export const get_result_module5_property = (id) => {
    return axios.get(`http://52.66.252.194:8000/get_result_module5_property/${id}`)
}

export const get_result_module5_motor = (id) => {
    return axios.get(`http://52.66.252.194:8000/get_result_module5_property/${id}`)
}