
import Cover from './Cover';
import { DesignedBox } from '../../../Components/DesignedBox';
import CloseIcon from '@mui/icons-material/Close';
import { Form } from '../../../Components/Form'
import * as constants from '../../../Config/Constants'
import { useContext, useState } from 'react';
import { AppContext } from '../../../Context/App.context';
import { isMobile } from 'react-device-detect';



const Header = (props) => {

    const [formFields, setFormFields] = useState(constants.projectFields())
    const {createProject, setNewProjectFormVisible, newProjectFormVisible} = useContext(AppContext)


    const onSubmitHandler = (formFields, state, actions) => {
        if(state.status == constants.fieldValidationStatuses.VALID){
            createProject(formFields, (error) => {
                actions.setFormState({...state, errorMessages : [error.message]})
            })
        }
    }

    return(
        <header className="header" style={{
            direction: 'rtl',
            padding: '20px 30px',
            minHeight: '85px',
            boxSizing: 'border-box'
            }}>
            <Cover isVisible={newProjectFormVisible} 
                onClose={() => { 
                    setNewProjectFormVisible(false)
                }}
                onOpen={() => {
                    setFormFields(constants.projectFields())
                    setNewProjectFormVisible(true)
                }}>
                <DesignedBox boxStyle='0' className='popup-form' style={{minWidth : isMobile ? 'auto' : '600px', width : isMobile ? '100%' : 'auto'}}
                    iconBg="bg-green" 
                    icon={CloseIcon} 
                    title='Add New Project'>
                    <Form 
                        className="project-form" 
                        style={{textAlign: 'left', direction: 'ltr'}}
                        buttonClass="project-submit bg-green"
                        buttonText="CREATE"
                        formFields={formFields}
                        onSubmit={onSubmitHandler}
                    />
                </DesignedBox>
            </Cover>
        </header>
    )
}


export default Header