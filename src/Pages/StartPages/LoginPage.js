import { DesignedBox } from "../../Components/DesignedBox"
import { Form } from "../../Components/Form"
import CloseIcon from '@mui/icons-material/Close';
import * as constants from '../../Config/Constants'
import { useContext, useState } from "react";
import { AuthContext } from "../../Context/Auth.context";
import { Link } from "react-router-dom";

export const LOGIN_PAGE = 'login_page'
export const CREATE_ACCOUNT_PAGE = 'create_account_page'


const LoginPage = (props) => {

    const { Login } = useContext(AuthContext)
    const [isLoading, setLoader] = useState(false)
    //Login submit


    const onSubmit = (fields, state, actions) =>{
        const email = [...fields].find(x => x.name == 'Email')?.state?.value
        const password = [...fields].find(x => x.name == 'Password')?.state?.value
        
        if(state.status == constants.fieldValidationStatuses.VALID){
            setLoader(true)
            actions.setLoader(true)
            Login(email, password, (error) => {
                setLoader(false)
                actions.setLoader(false)
                actions.setFormState({...state, errorMessages : ['Failed to connect.']})
            })
            // else the context will change page
        }
    }


    return(
        <div className="login page">
            <DesignedBox 
                className="fadeInDown sx3"
                boxStyle='1' 
                style={{width : '400px'}} 
                iconBg="bg-pink" 
                icon={CloseIcon} 
                title='Lead Manager - Login Page1'>
                <Form 
                    className="project-form" 
                    buttonClass="bg-pink"
                    buttonText="Log In"
                    formFields={constants.accountFields().filter(x => x.name == 'Email'|| x.name == 'Password')} 
                    onSubmit={onSubmit}    
                />
                <div className='btn-link'>
                    <Link onClick={isLoading ? (e) => {e.preventDefault()} : ''} to='/create-account'>Create Account</Link>
                </div>
            </DesignedBox>
        </div>
    )

}


export { LoginPage }