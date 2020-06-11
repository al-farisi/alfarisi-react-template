import React from 'react'

export const Store = React.createContext();

const initialState = {
    user: {},
    transactions: []
  };

function reducer(state, action) {
    switch (action.type) {
        case 'GET_USER':
            return { ...state, user: action.payload };
        case 'ADD_TRX':
            return {
                ...state,
                transactions: [...state.transactions, action.payload]
            };
        case 'REMOVE_TRX':
            return {
                ...state,
                transactions: action.payload
            };
        default:
            return state;
    }
}

export function StoreProvider(props) {
    const [state, dispatch] = React.useReducer(reducer, initialState);
    const value = { state, dispatch };
    return <Store.Provider value={value}>{props.children}
    </Store.Provider>
  }