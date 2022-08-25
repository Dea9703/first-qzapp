'use strict'
import axios from 'axios'

// service.defaults.crossDomain=true
const service = axios.create({
  baseURL: 'http://localhost:5000/',
  timeout: 5000
})

service.interceptors.request.use(
  config => {
    return config
  },
  error => {
    return Promise.reject(error)
  }
)

service.interceptors.response.use(
  response => {
    return response
  },
  error => {
    return Promise.reject(error)
  }
)

export default service
