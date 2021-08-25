import axios from 'axios';

const baseURL = process.env.REACT_APP_BASE_URL;

const login = async body => {
  const result = await axios.post(`${baseURL}/api/login`, body);
  return result.data;
};

export { login };
