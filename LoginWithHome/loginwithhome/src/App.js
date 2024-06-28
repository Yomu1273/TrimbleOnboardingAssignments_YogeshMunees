import './App.css';
import {BrowserRouter, Routes, Route, Link} from 'react-router-dom';
import NavPage from './pages/NavPage';
import HomePage from './pages/HomePage';
import ContactPage from './pages/ContactPage';
import Authenticator from './Authenticator';
import { isAuthenticated,setCurrentLogger,resetCurrentLogger } from './slices/LoginSlice';
import {useSelector} from 'react-redux';

function App() {

  const canweallow = useSelector((state)=>state.login.currentLogger);

  return (
    <>
      <div className='Heading'>
        <h1>Dream Bell</h1>
        <img id="TrimbleLogo" src="https://companieslogo.com/img/orig/TRMB-f6434f42.png" width="50px" height="50px"/>
      </div>
      <BrowserRouter>
          <Routes>
            <Route element={<Authenticator canweallow={canweallow}/>}>
              <Route path="/" element={<NavPage/>}>
              <Route index element={<HomePage/>}/>
              <Route path='contact' element={<ContactPage/>}/>
              </Route>
            </Route>
          </Routes>
        </BrowserRouter>
    </>
  );
}

export default App;