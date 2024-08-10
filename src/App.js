import React , { useContext } from 'react';
import { BrowserRouter, Navigate, Route, Router, Routes } from 'react-router-dom';
import './App.css';
import AfterLogin from './Components/AfterLogin';
import Banners from './Components/Banners';
import CarouselMain from './Components/CarouselMain';
import Category from './Components/Category';
import DailyBestSeller from './Components/DailyBestSeller';
import HomeMain from './Components/HomeMain';
import Login from './Components/Login';
import Navbar from './Components/Navbar';
import PrivateRoute from './PrivateRoute';
import ProductCard from './Components/ProductCard';
import ProductMain from './Components/ProductMain';
// import LoginContext from './context/LoginContext';
import { LoginState } from './context/LoginState';

function App() {

  // const { authentication } = useContext(LoginContext);
  return (
    <LoginState>
      <BrowserRouter> 
        <Routes>
          <Route path='/' element={<Navbar />}>
                <Route index element={<HomeMain />} />
                {/* <Route path='/afterlogin' element={<AfterLogin />} />  */}
                <Route path="/afterlogin" element={<AfterLogin />} />
                <Route path='/login' element={<Login />} />
                {/* <Route path='/tailwind' element={<TailWindCssCode />} /> */} 
          </Route>
        </Routes>
     </BrowserRouter>
    </LoginState>
  );
}

export default App;
