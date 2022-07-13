
import { useState } from "react";
import Cover from "../Pages/DashboardPages/DashboardComponents/Cover";
import Button from "./Button";
import { DesignedBox } from "./DesignedBox";
import Row from './Row'


const DialogBox = (props) =>{
    return(
        <Cover hideButton={true} isVisible={true}>
            <DesignedBox className="dialog-box" style={props.boxStyle} icon={props.icon} iconBg={props.iconBg} title={props.title}>
                {props.text}
                <Row columns={2} columnStyle={{padding : '30px 0 10px 0'}}>
                    <div style={{textAlign: 'left'}}>
                        <Button style={{display : 'inline-block'}} className="no bg-red nm" onClick={(e) => { 
                            if(props.Cancel){
                                props.Cancel()
                            }
                        }}>Cancel</Button>
                    </div>
                    <div style={{textAlign: 'right'}}>
                        <Button style={{display : 'inline-block'}} className="yes bg-green nm" onClick={(e) => {
                            if(props.Yes){
                                props.Yes();
                            }
                        }}>Yes</Button>
                    </div>
                </Row>
            </DesignedBox>
        </Cover>
        
    )

}

export default DialogBox;