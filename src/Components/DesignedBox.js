import { SvgIcon } from "@mui/material"


const DesignedBox = (props) => {

    return(
        <div className={props.className}>
            <div style={props.style} className={!props.boxStyle ? "des-box" : "des-box " + "s" + props.boxStyle}>
                <div className={props.iconBg ? "icon " + props.iconBg : "icon"}>
                    <SvgIcon component={props.icon} />
                </div>
                <div className="title">{props.title}</div>
                <div className="childs">{props.children}</div>
            </div>
        </div>
    )

}


export { DesignedBox }