import reducer from "../reducer/BudgetReducer";
import React, { useContext, useEffect, useReducer } from "react";
import { ADD_TO_LIST, DELETE_FROM_LIST, SET_BUDGET } from "../utils.js";

const getLocalStorage = () => {
  let list = localStorage.getItem("expense-list");
  if (list) {
    return JSON.parse(list);
  } else {
    return [
      { id: 12, name: "shopping", cost: 4000 },
      { id: 13, name: "holiday", cost: 10000 },
    ];
  }
};

const initialState = {
  budget: 20000,
  expenses: getLocalStorage(),
};

const budgetContext = React.createContext();

const BudgetContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  useEffect(() => {
    localStorage.setItem("expense-list", JSON.stringify(state.expenses));
  }, [state.expenses]);

  const addToList = (id, name, cost) => {
    dispatch({ type: ADD_TO_LIST, payload: { id, name, cost } });
  };

  const deleteFromList = (id) => {
    dispatch({ type: DELETE_FROM_LIST, payload: id });
  };

  const setBudget = (value) => {
    dispatch({ type: SET_BUDGET, payload: parseInt(value) });
  };

  return (
    <budgetContext.Provider
      value={{ ...state, addToList, deleteFromList, setBudget }}
    >
      {children}
    </budgetContext.Provider>
  );
};

export const useBudgetContext = () => {
  return useContext(budgetContext);
};

export default BudgetContextProvider;
