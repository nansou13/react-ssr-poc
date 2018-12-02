import axios from 'axios';

// axios.defaults.withCredentials = true;

const responseBody = (res) => res;
const responseError = (error) => {
  let errorMessage = 'Error: Network Error';
  if (error.response) {
    if (error.response.status === 401 || error.response.status === 403) {
    //   window.location.href = goToAuthorize();
    console.log(error)
    }

    errorMessage =
      error.response.data && error.response.data.error_message
        ? manageErrorMessage(error.response.data.error_message)
        : errorMessage;
  }
  return errorMessage;
};
const manageErrorMessage = (error) => {
  const errorMessage = typeof error === 'object' ? Object.values(error)[0] : error;
  return errorMessage;
};

const axiosPromise = (options) =>
  new Promise((res, rej) => {
    let option = options;
    const token = getToken('access_token');
    if (token) {
      option = { ...option, headers: { Authorization: `Bearer ${token}` } };
    }

    axios(option)
      .then((response) => {
        res(responseBody(response));
      })
      .catch((error) => {
        rej(responseError(error));
      });
  });

export const requests = {
  get: (url) =>
    axiosPromise({
      url,
    }),
  put: (url, body) =>
    axiosPromise({
      url,
      method: 'put',
      data: body,
    }),
  del: (url, body) =>
    axiosPromise({
      url,
      method: 'del',
      data: body,
    }),
  post: (url, body) =>
    axiosPromise({
      url,
      method: 'post',
      data: body,
    }),
};

const getToken = (tokenName) => null;//localStorage.getItem(tokenName);

export const setToken = (token) => {
  localStorage.setItem('authToken', token);
};

const api = 'https://api-mocks.wakeonweb-pprod.com/hellocare'

const Patients = {
    get: () => requests.get(`${api}/practitioners`),
  };

  const Auth = {
    me: () => requests.get(`${api}/patients/me`),
  };
  const Demo = {
    get: () => requests.get(`https://api.tvmaze.com/search/shows?q=batman`),
  };



  export default {
    Auth,
    Demo,
    Patients,
  };
