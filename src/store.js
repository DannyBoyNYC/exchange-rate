import { createStore } from "redux";

const initialState = {
  amount: "120.00",
  currencyCode: "USD",
};

function reducer(state = initialState, action) {
  if (action.type === "amountChanged") {
    return { ...state, amount: action.payload };
  }
  return state;
}

export const store = createStore(reducer);
