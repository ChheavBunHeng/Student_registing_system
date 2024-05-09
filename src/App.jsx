import React from 'react';
import {motion} from "framer-motion";
import HomePage from './assets/components/homepage/Home_Page.jsx';
import TopNavbar from './assets/components/navbar/Navbar.jsx';
import SideNavbar from "./assets/components/navbar/Sidebar.jsx";
import Signup from './assets/components/signup/Signup.jsx';
import Signin from './assets/components/signin/Signin.jsx';
import Office from "./assets/components/Category/Office.jsx";
import Design from './assets/components/Category/Design.jsx';
import Account from './assets/components/Category/Account.jsx';
import Programming from './assets/components/Category/Programming.jsx';
import Database from './assets/components/Category/Database.jsx';
import WebDev from './assets/components/Category/WebDev.jsx';
import VideoEditing from './assets/components/Category/VideoEditing.jsx';
import Footer from './assets/components/footer/Footer.jsx';
import Navbar from './assets/components/navbar/Navbar.jsx';
function App() {
  return (
    <div className='flex gap-[32px] overflow-x-hidden'>
      <HomePage className='w-full '></HomePage>
      {/* <Office></Office> */}
      {/* <Navbar></Navbar> */}
      <Footer></Footer>
    </div>
  );
}

export default App;
