import { DesignedBox } from "../../Components/DesignedBox"
import { Form } from "../../Components/Form"
import * as constants from '../../Config/Constants'
import CloseIcon from '@mui/icons-material/Close';
import { Link, Navigate } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import { AppContext } from "../../Context/App.context";
import {fieldsToObject} from '../../Utils/Utils'
import * as api from '../../Server/api'

let accountFields = constants.accountFields();

const CreateAccountPage = (props) => {


    const [isLoading, setLoader] = useState(false)
    const [pageStatus, setPageStatus] = useState({
        done : false,
        showMessage : false
    })

    //Clean form when enter the page
    useEffect(() => {
        accountFields = constants.accountFields();
    }, [props])

    useEffect(() => {
        if(pageStatus.showMessage){
            setTimeout(() => {
                setPageStatus({...pageStatus, showMessage : false, done : true})
            }, 2000)
        }
    }, [pageStatus.showMessage])

    //Login submit
    const onSubmit = (fields, state, actions) =>{
        accountFields = fields;
        if(state.status === constants.fieldValidationStatuses.VALID){
            setLoader(true)
            actions.setLoader(true)
            const userData = fieldsToObject(fields)
            console.log(userData);
            api.createAccount(userData, (response) => {
                if(response.success){
                    accountFields = constants.accountFields()
                    actions.setFormState({...state, errorMessages : ['Account has been created, we redirecting you to login page']}) 
                    setPageStatus({...pageStatus, showMessage : true})
                    
                }else{
                    actions.setFormState({...state, errorMessages : [response.message]})
                }
                setLoader(false)
                actions.setLoader(false)
            })
        }

    }

    return(
        <div className="page create-account">
            <DesignedBox 
                className="fadeInUp sx3"
                boxStyle='1' 
                style={{width : '400px'}} 
                iconBg="bg-blue" 
                icon={CloseIcon} 
                title='Lead Manager - Create Account'>
                <Form
                    className="create-form" 
                    buttonClass="bg-blue"
                    buttonText="Create Account"
                    formFields={accountFields} 
                    onSubmit={onSubmit}    
                />
                <div className='btn-link'>
                    <Link onClick={isLoading ? (e) => {e.preventDefault()} : ''} to='/'>Login Page</Link>
                </div>
            </DesignedBox>
            {pageStatus.done ? <Navigate to="/" replace /> : ''}
        </div>
    )

}


export { CreateAccountPage }