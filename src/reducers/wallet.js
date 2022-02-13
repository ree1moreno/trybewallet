// Esse reducer será responsável por tratar o todas as informações relacionadas as despesas
import { FETCH_API, FETCH_THUNK } from '../actions';

const INICIAL_STATE = {
  currencies: [],
  expenses: [],
};

const wallet = (state = INICIAL_STATE, action) => {
  switch (action.type) {
  case FETCH_API:
    return { ...state, currencies: Object.keys(action.results) };
  case FETCH_THUNK:
    return { ...state,
      expenses: [...state.expenses,
        { id: state.expenses.length, exchangeRates: action.thunk, ...action.payload }] };
  case 'REMOVE_EXPENSE':
    return {
      ...state,
      expenses: state.expenses.filter(
        (expense) => expense.id !== action.value,
      ),
    };
  default: return state;
  }
};

export default wallet;
