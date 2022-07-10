import React, { useContext, useEffect, useState } from 'react';
import * as api from '../Server/api'
import { AuthContext } from './Auth.context';
import {fieldsToObject} from '../Utils/Utils'
import Cover from '../Pages/DashboardPages/DashboardComponents/Cover';
import { DesignedBox } from '../Components/DesignedBox';
import { Loader } from '../Components/Loader';

export const AppContext = React.createContext(null)

export const ContextProvider = props => {

  const [appState, setAppState] = useState({
    newProjectFormVisible : false,
    isLoading : false,
    popupMessageVisible : false,
    popupMessage : ''
  })

  useEffect(() => {
    readProjectList();
  }, [])
  const [projectList, setProjectsList] = useState(null);

  const {userData} = useContext(AuthContext)

  const readProjectList = () => {
    api.readAllProjects(userData.accountID, (response) => {
      console.log(response);
    })
  }

  useEffect(() => {
    if(appState.popupMessageVisible){
      setTimeout(() => {
        setAppState({...appState, popupMessageVisible : false})
      },3000)
    }
  },[appState.popupMessageVisible])


  const createProject = (projectsFields, error) => {
    setAppState({...appState, isLoading : true});
    let fields = fieldsToObject(projectsFields);
    fields = {...fields, account_id : userData.accountID}
    api.createProject(fields, (response) => {
      console.log(response);
      if(response.success){
        setAppState({...appState, 
          popupMessageVisible : true,
          popupMessage : 'Project has been created.',
          newProjectFormVisible : false,
          isLoading: false
        })
      }else{
        setAppState({...appState, isLoading : false})
        error(response)
      }
    })
  }


  return (
    <AppContext.Provider value={{appState, setAppState, createProject}}>
      {props.children}
      <Cover className="main-loader" hideButton={true} isVisible={appState.isLoading}>
          <DesignedBox iconBg='bg-pink' boxStyle='1' style={{width: '200px'}} title="LOADING">
              <Loader color="bg-pink" />
          </DesignedBox>
      </Cover>
      <div className={!appState.popupMessageVisible ? 'pop-message' : 'pop-message on'}>
        {appState.popupMessage}
      </div>
    </AppContext.Provider>
  );
};
