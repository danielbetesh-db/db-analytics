

import React, { useContext } from 'react'
import { AuthContext } from '../../Context/Auth.context'
import ManageSearchIcon from '@mui/icons-material/ManageSearch';
import DashboardIcon from '@mui/icons-material/Dashboard';
import SettingsIcon from '@mui/icons-material/Settings';
import LogoutIcon from '@mui/icons-material/Logout';
import NavMenu from './DashboardComponents/NavMenu'
import { Navigate, Route, Routes } from 'react-router-dom';
import MainPage from './MainPage';
import ProjectsPage from './ProjectsPage';
import SettingsPage from './Settings';
import {KeyGenerator} from '../../Utils/Utils';
import Header from './DashboardComponents/Header';
import { AppContext } from '../../Context/App.context';
import Cover from './DashboardComponents/Cover';
import { DesignedBox } from '../../Components/DesignedBox';
import { Loader } from '../../Components/Loader';



const Dashboard = (props) => {


    const {appState, setAppState} = useContext(AppContext)
    const {Logout, userData } = useContext(AuthContext)
    const {isLoading, menuOpen} = useContext(AppContext)
    

    const dashboardPages = [
        {
            label : "Dashboard",
            icon : DashboardIcon,
            route : "/",
            component : <MainPage />
        },
        {
            label : "Projects",
            icon : ManageSearchIcon,
            route : "/projects",
            component : <ProjectsPage />
        },
        {
            label : "Settings",
            icon : SettingsIcon,
            route : "/settings",
            component : <SettingsPage />
        },
        {
            label : "Logout",
            icon : LogoutIcon,
            route: '',
            action : () => {
                Logout()
            }
        }
    ]

    return (
        <div className='page dashboard'>
            <div className={menuOpen ? 'wrapper' : 'wrapper  menu-close'}>
                <Header />
                <div className='content'>
                    <Routes>
                        <Route path="*"  element={<Navigate to="/" replace />} />
                        {dashboardPages.map(page => <Route key={KeyGenerator()} exact={page.route == '/'} path={page.route} element={page.component} />)}
                    </Routes>
                </div>
            </div>
            <NavMenu className='fadeInLeft sx3' logo='Lead Manager' userName={userData.userName} menuItems={dashboardPages} />

            {appState.isLoading ? 
            <Cover className="main-loader" hideButton={true} isVisible={true}>
                <DesignedBox iconBg='bg-pink' boxStyle='1' style={{width: '200px'}} title="LOADING">
                    <Loader color="bg-pink" />
                </DesignedBox>
            </Cover>
            : ''}
        </div>
        
    )
}


export default Dashboard