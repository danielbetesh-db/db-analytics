import { DesignedBox } from "../../Components/DesignedBox"
import NotfTag from "../../Components/NotfTag"
import ManageSearchIcon from '@mui/icons-material/ManageSearch';
import PhoneIphoneIcon from '@mui/icons-material/PhoneIphone';
import ChatIcon from '@mui/icons-material/Chat';
import Row from '../../Components/Row' 
import ProjectsTable from "./DashboardComponents/ProjectsTable";



const MainPage = (props) => {



    return(
        <div className="main-page">
            <Row className='top widgets' columns='3' columnStyle={{padding : '15px', minWidth : '250px'}}>
                <DesignedBox title='Leads' boxStyle='2' iconBg="bg-purple" icon={ChatIcon}>
                    <span className="text">2,504</span>
                </DesignedBox>
                <DesignedBox title='Calls' boxStyle='2' iconBg="bg-orange" icon={PhoneIphoneIcon}>
                    <span className="text">246</span>
                </DesignedBox>
                <DesignedBox title='Views' boxStyle='2' iconBg="bg-blue" icon={ManageSearchIcon}>
                    <span className="text">12,504</span>
                </DesignedBox>
            </Row>

            <Row className='top proj' columns='1' columnStyle={{padding : '15px', minWidth : '500px'}}>
                <ProjectsTable maxRows={3} />
            </Row>

            
        </div>
        
        
    )

}

export default MainPage