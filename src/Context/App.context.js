import React, { useContext, useEffect, useState } from 'react';
import * as api from '../Server/api'
import { AuthContext } from './Auth.context';
import {fieldsToObject} from '../Utils/Utils'
import Cover from '../Pages/DashboardPages/DashboardComponents/Cover';
import { DesignedBox } from '../Components/DesignedBox';
import { Loader } from '../Components/Loader';

export const AppContext = React.createContext(null)

export const ContextProvider = props => {

  const [popupMessage, setPopupMessage] = useState({
    visible : false,
    message : ''
  })

  const [newProjectFormVisible, setNewProjectFormVisible] = useState(false);

  const [editProjectForm, setEditProjectForm] = useState({
    visible : false,
    title : '',
    fields : []
  });

  const [appState, setAppState] = useState({
    isLoading : false
  })

  const [menuOpen, setMenuOpen] = useState(true);

  useEffect(() => {
    if(popupMessage.visible){
      setTimeout(() => {
        setPopupMessage({...popupMessage, visible : false})
      },1500)
    }
  },[popupMessage.visible])

  const {userData} = useContext(AuthContext)

  useEffect(() => {
    readProjectList();
  }, [])
  
  const [projectList, setProjectsList] = useState(null);

  const readProjectList = (callback) => {
    api.readAllProjects(userData.accountID, (response) => {
      
      if(response.success === true){
        setProjectsList([...response.data]);
      }

      if(callback){ 
        callback(response) 
      }
    })
  }



  const deleteProject = (projectId) => {
    setAppState({...appState, isLoading : true});
    api.deleteProject(userData.accountID, projectId, (response) => {
      
      if(response.success === true){
        readProjectList(() => {
          setAppState({...appState,
            isLoading: false
          })
          setPopupMessage({...popupMessage, visible : true, message : 'Project has been deleted.'})
        })
      }
      
    })

  }


  const updateProject = (projectsFields, error) => {
    setAppState({...appState, isLoading : true});
    let fields = fieldsToObject(projectsFields);
    fields = {...fields, account_id : userData.accountID}
    api.updateProject(fields, (response) => {
      if(response.success){
        readProjectList(() => {
          setEditProjectForm({...editProjectForm, visible : false})
          setAppState({...appState, isLoading: false  })
          setPopupMessage({...popupMessage, visible : true, message : 'Project has been updated.'})
        })
      }else{
        setAppState({...appState, isLoading : false})
        error(response)
      }
    })
  }
  

  const createProject = (projectsFields, error) => {
    setAppState({...appState, isLoading : true});
    let fields = fieldsToObject(projectsFields);
    fields = {...fields, account_id : userData.accountID}
    api.createProject(fields, (response) => {
      if(response.success){
        readProjectList(() => {
          setNewProjectFormVisible(false);
          setAppState({...appState, isLoading: false  })
          setPopupMessage({...popupMessage, visible : true, message : 'Project has been created.'})
        })
      }else{
        setAppState({...appState, isLoading : false})
        error(response)
      }
    })
  }


  return (
    <AppContext.Provider value={{
      appState, 
      projectList,
      editProjectForm,
      newProjectFormVisible,
      menuOpen,
      setMenuOpen,
      setAppState, 
      createProject, 
      deleteProject,
      readProjectList,
      updateProject,
      setNewProjectFormVisible,
      setEditProjectForm
      
      }}>
      {props.children}
      <Cover className="main-loader" hideButton={true} isVisible={appState.isLoading}>
          <DesignedBox iconBg='bg-pink' boxStyle='1' style={{width: '200px'}} title="LOADING">
              <Loader color="bg-pink" />
          </DesignedBox>
      </Cover>
      <div className={!popupMessage.visible ? 'pop-message' : 'pop-message on'}>
        {popupMessage.message}
      </div>
    </AppContext.Provider>
  );
};
