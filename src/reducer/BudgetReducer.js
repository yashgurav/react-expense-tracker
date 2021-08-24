import { ADD_TO_LIST, DELETE_FROM_LIST, SET_BUDGET } from "../utils.js";

const BudgetReducer = (state, action) => {
  if (action.type === ADD_TO_LIST) {
    const { id, cost, name } = action.payload;
    const newList = [...state.expenses, { id, cost, name }];
    return { ...state, expenses: newList };
  }

  if (action.type === DELETE_FROM_LIST) {
    const newList = state.expenses.filter((item) => item.id !== action.payload);
    return { ...state, expenses: newList };
  }

  if (action.type === SET_BUDGET) {
    return { ...state, budget: action.payload, expenses: [] };
  }
};

export default BudgetReducer;
