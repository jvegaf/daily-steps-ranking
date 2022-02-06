import axios from 'axios';
import { UtilDate } from '../util/utilDate';
import { handleResponse, handleError } from './response';

const BASE_URL = 'https://step-meter-pp4publmdq-ez.a.run.app';
const API_SECRET = process.env.VUE_APP_API_SECRET;
const LIMIT = 100;
const TODAY = UtilDate.today();
const WEEK_AGO = UtilDate.weekAgo();
const MONTH_AGO = UtilDate.monthAgo();

const getDailyRanking = () => {
  axios.defaults.headers.common.Authorization = API_SECRET;
  axios.defaults.headers.common['Content-Type'] = 'application/json';
  return axios
    .get(`${BASE_URL}/users/?limit=${LIMIT}`)
    .then(handleResponse)
    .catch(handleError);
};

const getWeeklyRanking = () => {
  axios.defaults.headers.common.Authorization = API_SECRET;
  axios.defaults.headers.common['Content-Type'] = 'application/json';
  return axios
    .get(
      `${BASE_URL}/users/?workouts_from=${WEEK_AGO}&workouts_to=${TODAY}&limit=${LIMIT}`
    )
    .then(handleResponse)
    .catch(handleError);
};

const getMonthlyRanking = () => {
  axios.defaults.headers.common.Authorization = API_SECRET;
  axios.defaults.headers.common['Content-Type'] = 'application/json';
  return axios
    .get(
      `${BASE_URL}/users/?workouts_from=${MONTH_AGO}&workouts_to=${TODAY}&limit=${LIMIT}`
    )
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
  getDailyRanking,
  getWeeklyRanking,
  getMonthlyRanking,
  getUserWorkouts,
};
