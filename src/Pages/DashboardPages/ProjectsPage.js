import { useContext } from "react";
import { DesignedBox } from "../../Components/DesignedBox"
import { Table, TableRow, TableCell } from "../../Components/Table"
import { AppContext } from "../../Context/App.context";
import { KeyGenerator } from "../../Utils/Utils"
import NotfTag from "../../Components/NotfTag"
import ManageSearchIcon from '@mui/icons-material/ManageSearch';
import PhoneIphoneIcon from '@mui/icons-material/PhoneIphone';
import ChatIcon from '@mui/icons-material/Chat';
import ViewSidebarIcon from '@mui/icons-material/ViewSidebar';
import Row from "../../Components/Row";
import ProjectsTable from "./DashboardComponents/ProjectsTable";


const ProjectsPage = (props) => {

    const {projectList} = useContext(AppContext);

    return(
        <Row className='top proj' columns='1' columnStyle={{padding : '15px', minWidth : '500px'}}>
            <ProjectsTable />
        </Row>
    )

}

export default ProjectsPage