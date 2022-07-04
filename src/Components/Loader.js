import AutorenewIcon from '@mui/icons-material/Autorenew';
import { SvgIcon } from "@mui/material"

const Loader = (props) => {
    const color = props.color ? props.color : 'bg-orange'
    return(
        <div className={props.className ? 'loader ' + color + props.className : 'loader ' + color}>
            <SvgIcon component={AutorenewIcon} />
        </div>
        
    )

}


export { Loader }