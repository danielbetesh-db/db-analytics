
import Button from "../../../Components/Button"
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import { SvgIcon } from "@mui/material"
import {Table, TableCell, TableRow} from "../../../Components/Table";
import { DesignedBox } from "../../../Components/DesignedBox"
import NotfTag from "../../../Components/NotfTag"
import ManageSearchIcon from '@mui/icons-material/ManageSearch';
import PhoneIphoneIcon from '@mui/icons-material/PhoneIphone';
import ChatIcon from '@mui/icons-material/Chat';
import ViewSidebarIcon from '@mui/icons-material/ViewSidebar';
import { useContext, useEffect, useState } from "react";
import { AppContext } from "../../../Context/App.context";
import { prepareUpdateFormFields, KeyGenerator } from "../../../Utils/Utils";
import DialogBox from "../../../Components/DialogBox";
import ErrorOutlineIcon from '@mui/icons-material/ErrorOutline';
import Cover from "./Cover";
import { Form } from "../../../Components/Form";
import CloseIcon from '@mui/icons-material/Close';
import * as constants from '../../../Config/Constants'
import { isMobile } from 'react-device-detect';

const ProjectsTable = (props) => {

    const {
        projectList,
        deleteProject,
        updateProject,
        setEditProjectForm,
        editProjectForm
    } = useContext(AppContext);

    const [dialogBoxDelete, setDialogBoxDelete] = useState({
        projectId : 0,
        visible: false,
        text : 'Are you sure you want to delete this project?',
        title : 'Delete Project'
    })


    return(
        <DesignedBox title='PROJECTS' boxStyle={isMobile ? 1 : 3} iconBg="bg-pink" icon={ManageSearchIcon}>
            <Table 
                className="projects_table"
                maxRows={props.maxRows} 
                headers={['Name', 'Traffic', 'Settings', 'Actions']} >
                {projectList?.map(row => 
                    <TableRow key={KeyGenerator()}>
                        <TableCell>
                            {row.project_name}
                        </TableCell>
                        <TableCell>
                            <NotfTag title='Calls' icon={PhoneIphoneIcon} value="0" />
                            <NotfTag title='Leads' icon={ChatIcon} value="0" />
                            <NotfTag title='Views' icon={ViewSidebarIcon} value="0" />    
                        </TableCell>
                        <TableCell>
                            {row.page_url}
                        </TableCell>
                        <TableCell className="actions">
                            <Button className='sm bg-red' 
                                onClick={() => { 
                                    setDialogBoxDelete({...dialogBoxDelete, visible : true, projectId : row.project_id, text : 'Are you sure you want to delete ' + row.project_name }) 
                                }}>
                                <SvgIcon component={DeleteIcon} />
                            </Button>
                            <Button className='sm bg-orange'
                                onClick={() => { 
                                    setEditProjectForm({...editProjectForm, visible : true, fields : prepareUpdateFormFields(row), title : 'Update project ' + row.project_name })
                                }}>
                                <SvgIcon component={EditIcon} />
                            </Button>
                        </TableCell>
                    </TableRow>
                )}
            </Table>
                {
                dialogBoxDelete.visible ? 
                    <DialogBox icon={ErrorOutlineIcon} iconBg='bg-blue' 
                        Yes={() => { 
                            deleteProject( dialogBoxDelete.projectId ) 
                            setDialogBoxDelete({...dialogBoxDelete, visible : false})
                        }} 
                        Cancel={() => { setDialogBoxDelete({...dialogBoxDelete, visible : false}) } } 
                        text={dialogBoxDelete.text} 
                        title={dialogBoxDelete.title} 
                        boxStyle={{maxWidth : '350px'}} /> 
                    : '' 
                }
                {
                    editProjectForm.visible ? 
                    <Cover className='edit-form' hideButton={false} isVisible={true} 
                        onClose={() => { 
                            setEditProjectForm({...editProjectForm, visible : false})
                            //setUpdateForm({...updateForm, visible : false })
                        }}
                        onOpen={() => {
                            //setFormFields(constants.projectFields())
                            //setAppState({...appState, newProjectFormVisible : true}) 
                        }}>
                        <DesignedBox boxStyle='0' className='popup-form' style={{minWidth : isMobile ? 'auto' : '600px', width : isMobile ? '100%' : 'auto'}} 
                            iconBg="bg-orange" 
                            icon={CloseIcon} 
                            title={editProjectForm.title}>
                            <Form
                                className="project-form" 
                                style={{textAlign: 'left', direction: 'ltr'}}
                                buttonClass="project-submit bg-orange"
                                buttonText="UPDATE"
                                formFields={editProjectForm.fields}
                                onSubmit={(formFields, state, actions) => { 
                                    if(state.status == constants.fieldValidationStatuses.VALID){
                                        updateProject(formFields, (error) => {
                                            console.log(error);
                                            actions.setFormState({...state, errorMessages : [error.message]})
                                        });
                                        
                                    }
                                   
                                }}
                            />
                        </DesignedBox>
                    </Cover>
                    :
                    ''
                }
                
        </DesignedBox>
    )

}

export default ProjectsTable