
import { useContext } from 'react';
import { AuthContext } from './Context/Auth.context';
import { StartPage } from './Pages/StartPages/StartPage';
import Dashboard from './Pages/DashboardPages/Dashboard';
import { ContextProvider } from './Context/App.context';

const App = () => {

  const {authState} = useContext(AuthContext)

  return(
    <div className="App">
      
        {authState.isLoggedIn 
          ?
          <ContextProvider>
            <Dashboard />
          </ContextProvider> 
          :
          <StartPage /> 
          }
      
    </div>

  );

  
}

export default App;
