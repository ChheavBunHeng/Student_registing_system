// eslint-disable-next-line no-unused-vars
import React from 'react';
import HomePage from './assets/components/homepage/Home_Page.jsx';
import TopNavbar from './assets/components/navbar/Navbar.jsx';
import SideNavbar from "./assets/components/navbar/Sidebar.jsx";
import Signup from './assets/components/signup/Signup.jsx';

function App() {
  return (
    <div className='w-screen h-screen'>
      <div className='App w-screen h-screen flex flex-col '>
        <div className='flex flex-row'>
        <SideNavbar/>
        <Signup />
        </div>
      </div>
      <div>
      </div>
    </div>
  );
}

export default App;
