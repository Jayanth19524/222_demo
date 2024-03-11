// AuthContext.js

import React, {createContext, useContext, useReducer} from 'react';

const AuthContext = createContext();

const initialState = {
  isLoggedIn: false,
  // Other user-related information can be stored here
};

const authReducer = (state, action) => {
  switch (action.type) {
    case 'LOGIN':
      return {...state, isLoggedIn: true};
    case 'LOGOUT':
      return {...state, isLoggedIn: false};
    // Additional cases for updating user information can be added
    default:
      return state;
  }
};

export const AuthProvider = ({children}) => {
  const [state, dispatch] = useReducer(authReducer, initialState);

  return (
    <AuthContext.Provider value={{state, dispatch}}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};
