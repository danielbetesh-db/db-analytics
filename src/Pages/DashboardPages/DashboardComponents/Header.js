
import Cover from './Cover';
import { DesignedBox } from '../../../Components/DesignedBox';
import CloseIcon from '@mui/icons-material/Close';
import { Form } from '../../../Components/Form'
import * as constants from '../../../Config/Constants'
import { useContext, useState } from 'react';
import { AppContext } from '../../../Context/App.context';


const Header = (props) => {

    const [formFields, setFormFields] = useState(constants.projectFields())
    const {CreateNewProject} = useContext(AppContext)
    const [isVisible, setVisible] = useState(false)


    const onSubmitHandler = (formFields, state, actions) => {
        console.log(state.status);
        
        if(state.status == constants.fieldValidationStatuses.VALID){
            const fields = [...formFields]
            const request = {
                ProjectName : fields.filter(x => x.name == 'ProjectName')[0]?.state?.value,
                Emails : fields.filter(x => x.name == 'Emails')[0]?.state?.value,
                RecivePath : fields.filter(x => x.name == 'RecivePath')[0]?.state?.value,
                ResponsePath : fields.filter(x => x.name == 'ResponsePath')[0]?.state?.value,
                ErrorPath : fields.filter(x => x.name == 'ErrorPath')[0]?.state?.value
            }
            
            
            CreateNewProject(request, (response) => {
                console.log(response)
                
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
            <Cover isVisible={isVisible} onClose={() => { setFormFields(constants.projectFields())   }}>
                <DesignedBox boxStyle='0' style={{width : '600px'}} 
                    iconBg="bg-green" 
                    icon={CloseIcon} 
                    title='Add New Project'>
                    <Form 
                        className="project-form" 
                        style={{textAlign: 'left', direction: 'ltr'}}
                        buttonClass="bg-green"
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