import axios from 'axios'
const Cookies = require('js-cookie');

export const backendApi = (token?: string) => {
  const cookiesToken = Cookies.get('authToken')
  return axios.create({
    baseURL: process.env.NEXT_PUBLIC_API_URL,
    headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${token ? token : cookiesToken}` }
  })
}

export const backendApiPrivate = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
  headers: { 'Content-Type': 'application/json' },
  withCredentials: true
})