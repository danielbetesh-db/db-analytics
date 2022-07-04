import { sizing } from "@mui/system";
import { useEffect } from "react"
import KeyGenerator from "../Utils/Utils";



const Row = (props) => {

    const childs = [...props.children]

    return(
        <div className={props.className ? props.className + ' row clear' : ' row clear'} style={{...props.style}}>
            {childs.map(
                child => {
                    return(
                        <div key={KeyGenerator()} className="column" 
                            style={{...props.columnStyle,
                                boxSizing: 'border-box',
                                display: 'block',
                                float: 'left',
                                width: (100 / props.columns) + '%'}}>{child}</div>
                    )
                }
            )}
        </div>
    )
}

export default Row