import { useEffect, useState } from "react"

import AddIcon from '@mui/icons-material/Add';
import { SvgIcon } from "@mui/material"
import Button from "../../../Components/Button";

const Cover = (props) => {
    const [isVisible, setVisible] = useState(props.isVisible)

    useEffect(() => {
        setVisible(props.isVisible)
    }, [props.isVisible])



    const onClickHandler = (e) =>{
        setVisible(prevState => {
            if(prevState){
                props.onClose()
            }else{
                props.onOpen()
            }
            
            return !prevState;
        })
    }

    return(
        <div className={props.className}>
            <div className={isVisible ? 'cover on' : 'cover'}>
                {!props.hideButton ? 
                    <Button onClick={onClickHandler} 
                        className={isVisible ? 'bg-red rounded visible' : 'bg-green rounded'} 
                        title="Add new project"
                        containerClass="cover-btn">
                        <SvgIcon component={AddIcon} />
                    </Button>
                : ''}
                {isVisible ?
                    <div className="view fadeInBackward sx3">
                        <div className="childs">
                            {props.children}
                        </div>
                    </div>
                : ''}
                
            </div>
        </div>
    )
}


export default Cover