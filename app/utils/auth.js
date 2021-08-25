// eslint-disable-next-line camelcase
import jwt_decode from 'jwt-decode';

export const isAuthenticated = () => {
  const token = window.localStorage.getItem('access_token');
  let decoded;
  if (token) {
    decoded = jwt_decode(token);
    return new Date(decoded.exp * 1000) > new Date();
  }

  return false;
};

export const getBearerToken = () => ({
  headers: {
    Authorization: `Bearer ${window.localStorage.getItem('access_token')}`,
  },
});
