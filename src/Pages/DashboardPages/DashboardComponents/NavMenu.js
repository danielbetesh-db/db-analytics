import { Link } from "react-router-dom"
import KeyGenerator from "../../../Utils/Utils"
import { SvgIcon } from "@mui/material"
import backgroundImage from '../../../Assests/sidebar.jpg'
import { useLocation } from 'react-router-dom'
import { useEffect } from "react"

const NavMenu = (props) => {
    const location = useLocation();

    useEffect(() =>{
        console.log(location.pathname)
    }, [])

    return(
        <div className={props.className ? 'side-menu ' + props.className : 'side-menu'}  style={{ backgroundImage: `url(${backgroundImage})` }}>
            <div className="bg">
                <div className="logo">{props.logo}</div>
                <div className="user">{props.userName}</div>
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
        </div>
    )
}

export default NavMenu