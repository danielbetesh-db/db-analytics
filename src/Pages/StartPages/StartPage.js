import { Routes, Route, Navigate } from "react-router-dom";
import { CreateAccountPage } from './CreateAccountPage'
import { LoginPage } from './LoginPage'

const StartPage = (props) => {
    return(
        <div className="page">
            <Routes>
                <Route path="*"  element={<Navigate to="/" replace />} />
                <Route exact path='/' element={<LoginPage />} />
                <Route exact path='/create-account' element={<CreateAccountPage />} />
            </Routes>
        </div>
    )
}



export { StartPage }