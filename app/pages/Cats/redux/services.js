import axios from 'axios';

import { getBearerToken } from 'utils/auth';

const baseURL = process.env.REACT_APP_BASE_URL;

const fetchCats = async () => {
  const result = await axios.get(`${baseURL}/cats`, getBearerToken());
  return result.data;
};

const addCat = async body => {
  const result = await axios.post(`${baseURL}/cats`, body, getBearerToken());
  return result.data;
};

const deleteCat = async id => {
  const result = await axios.delete(`${baseURL}/cats/${id}`, getBearerToken());
  return result.data;
};

export { fetchCats, addCat, deleteCat };
