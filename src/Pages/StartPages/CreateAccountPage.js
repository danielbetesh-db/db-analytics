import { DesignedBox } from "../../Components/DesignedBox"
import { Form } from "../../Components/Form"
import * as constants from '../../Config/Constants'
import CloseIcon from '@mui/icons-material/Close';
import { Link } from "react-router-dom";

const CreateAccountPage = (props) => {

    //Login submit
    const onSubmit = (fields, state, actions) =>{
        const email = [...fields].find(x => x.name == 'Email')?.state?.value
        const password = [...fields].find(x => x.name == 'Password')?.state?.value
        
        if(state.status == constants.fieldValidationStatuses.VALID){
            actions.setLoader(true)
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
                    formFields={constants.accountFields()} 
                    onSubmit={onSubmit}    
                />
                <div className='btn-link'>
                    <Link to='/'>Login Page</Link>
                </div>
            </DesignedBox>
        </div>
    )

}


export { CreateAccountPage }