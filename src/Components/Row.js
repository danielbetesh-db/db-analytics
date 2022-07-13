import { sizing } from "@mui/system";
import { useEffect } from "react"
import {KeyGenerator} from "../Utils/Utils";



const Row = (props) => {
    
    const childs = props.children?.length ? [...props.children] : fillEmptyChilds();
    
    function fillEmptyChilds(){
        let newChilds = [props.children];
        for (var i = 0; i < props.columns - 1; i++) {
            newChilds.push(<div></div>);
        } 
        return newChilds
    }

    return(
        <div className={props.className ? props.className + ' row clear' : ' row clear'} style={{...props.style}}>
            {childs.length ? childs.map(
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
            ): childs}
        </div>
    )
}

export default Row