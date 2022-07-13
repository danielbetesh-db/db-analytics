import { Link } from "react-router-dom"
import {KeyGenerator} from "../../../Utils/Utils"
import { SvgIcon } from "@mui/material"
import backgroundImage from '../../../Assests/sidebar.jpg'
import { useLocation } from 'react-router-dom'
import { useContext, useEffect, useState } from "react"
import ListIcon from '@mui/icons-material/List';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import Button from "../../../Components/Button"
import face from '../../../Assests/anonymus.png'
import { AppContext } from "../../../Context/App.context"



const NavMenu = (props) => {
    const location = useLocation();
    const {menuOpen, setMenuOpen} = useContext(AppContext);

    
    return(
        <div className={(props.className ? 'side-menu ' + props.className : 'side-menu') + (!menuOpen ? ' off' : '')}  style={{ backgroundImage: `url(${backgroundImage})` }}>
            <div className="bg">
                <div className="logo">{props.logo}</div>
                <div className="user">
                    <img src={face} alt='user' />
                    <span>{props.userName}</span>
                </div>
                <nav>
                    {props.menuItems.map(item => {
                        return(
                            <Link 
                                key={KeyGenerator()} 
                                onClick={item.action} 
                                to={item.route} 
                                className={location.pathname == item.route ? 'nav-item on' : 'nav-item'}>
                                <SvgIcon component={item.icon}/>
                                <span>{item.label}</span>
                            </Link>
                        )
                    })}
                </nav>
            </div>
            <div className="menu-btn">
                <Button onClick={() => {setMenuOpen(!menuOpen)}}><SvgIcon component={menuOpen ? MoreVertIcon : ListIcon} /></Button>
            </div>
        </div>
    )
}

export default NavMenu