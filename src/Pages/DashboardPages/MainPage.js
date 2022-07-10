import { DesignedBox } from "../../Components/DesignedBox"
import { NotfTag } from "../../Components/NotfTag"
import ManageSearchIcon from '@mui/icons-material/ManageSearch';
import PhoneIphoneIcon from '@mui/icons-material/PhoneIphone';
import ChatIcon from '@mui/icons-material/Chat';
import { SvgIcon } from '@mui/material';
import Row from '../../Components/Row' 

const MainPage = (props) => {

    return(
        <div className="main-page">
            <Row className='top' columns='3' columnStyle={{padding : '15px', minWidth : '350px'}}>
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
            <NotfTag title='Calls' icon={PhoneIphoneIcon} value="0" />
        </div>
        
    )

}

export default MainPage