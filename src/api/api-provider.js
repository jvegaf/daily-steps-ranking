import axios from 'axios';
import { handleResponse, handleError } from './response';

const BASE_URL = 'https://step-meter-pp4publmdq-ez.a.run.app';
const API_SECRET = process.env.VUE_APP_API_SECRET;
const LIMIT = 30;

const getUsers = () => {
  axios.defaults.headers.common.Authorization = API_SECRET;
  axios.defaults.headers.common['Content-Type'] = 'application/json';
  return axios
    .get(`${BASE_URL}/users/?limit=${LIMIT}`)
    .then(handleResponse)
    .catch(handleError);
};

const getUserWorkouts = username => {
  axios.defaults.headers.common.Authorization = API_SECRET;
  axios.defaults.headers.common['Content-Type'] = 'application/json';
  return axios
    .get(`${BASE_URL}/${username}/workouts/?limit=${LIMIT}`)
    .then(handleResponse)
    .catch(handleError);
};

export const apiProvider = {
  getUsers,
  getUserWorkouts,
};
