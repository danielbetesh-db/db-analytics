import React, { useContext, useEffect, useState } from 'react';
import * as api from '../Server/api'
import { AuthContext } from './Auth.context';

export const AppContext = React.createContext(null)

export const ContextProvider = props => {

  const [isLoading, setLoader] = useState(false)
  const {userData} = useContext(AuthContext)


  useEffect(() => {
    console.log(isLoading);
  }, [isLoading])
  
  const CreateNewProject = (projects) => { 
    setLoader(true)
    let data = {...projects, AccountID : userData.accountID}
    console.log(data);
    api.createProject(data, (response) => {
      console.log(response)
      setLoader(false)
    })
  }


  const LoadProjects = () => {
    
  }

  return (
    <AppContext.Provider value={{CreateNewProject, LoadProjects, isLoading, setLoader}}>
      {props.children}
    </AppContext.Provider>
  );
};
