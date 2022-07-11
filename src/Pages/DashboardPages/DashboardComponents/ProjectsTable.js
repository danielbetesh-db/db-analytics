
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
import { useContext } from "react";
import { AppContext } from "../../../Context/App.context";
import { KeyGenerator } from "../../../Utils/Utils";


const ProjectsTable = (props) => {
    const {projectList, deleteProject} = useContext(AppContext);

    return(
        <DesignedBox title='PROJECTS' boxStyle='3' iconBg="bg-blue" icon={ManageSearchIcon}>
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
                            <Button className='sm bg-red' onClick={() => { deleteProject(row.project_id) }}><SvgIcon component={DeleteIcon} /></Button>
                            <Button className='sm bg-orange'><SvgIcon component={EditIcon} /></Button>
                        </TableCell>
                    </TableRow>
                )}
            </Table>
        </DesignedBox>
    )

}

export default ProjectsTable