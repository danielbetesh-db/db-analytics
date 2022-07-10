import React, { useState } from 'react';
import * as api from '../Server/api'

export const AuthContext = React.createContext(null)

const initialState = {
  isLoggedIn: false
}
const initialUserData = {
  userName: "",
  accountID: 0
};



export const ContextProvider = props => {
  const [authState, setAuthState] = useState(initialState);
  const [userData, setUserData] = useState(initialUserData);

  const Login = (email, password, error) => {
    api.Login(email, password, (response => {
      if(response.success){
        console.log(response);
        setUserData({
          ...userData,
          userName: response.data.first_name + ' ' + response.data.last_name,
          accountID: parseInt(response.data.account_id)
        })
        setAuthState({...authState, isLoggedIn : true})
      }else{
        error(response)
      }
    })) 
  }



  const Logout = () => {
    setAuthState(initialState)
    setUserData(initialUserData);
    
    console.log(authState)
  }

  return (
    <AuthContext.Provider
      value={{ Login, Logout, userData, authState }}
    >
      {props.children}
    </AuthContext.Provider>
  );
};
