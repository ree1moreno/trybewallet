// Coloque aqui suas actions
export const INPUT_EMAIL = 'INPUT_EMAIL';
export const FETCH_API = 'FETCH_API';
export const FETCH_THUNK = 'FETCH_THUNK';

export const saveEmail = (payload) => ({ type: INPUT_EMAIL, payload });

export const fetchApi = () => (dispatch) => {
  fetch('https://economia.awesomeapi.com.br/json/all')
    .then((response) => response.json())
    .then((results) => {
      delete results.USDT;
      dispatch({ type: FETCH_API, results });
    });
};

export const fetchThunk = (payload) => (dispatch) => {
  fetch('https://economia.awesomeapi.com.br/json/all')
    .then((response) => response.json())
    .then((results) => {
      dispatch({ type: FETCH_THUNK, payload, thunk: results });
    });
};

export const removeExpense = (value) => ({ type: 'REMOVE_EXPENSE', value });
