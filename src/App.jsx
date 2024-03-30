import React from 'react';
import HomePage from './assets/components/homepage/Home_Page.jsx';
import TopNavbar from './assets/components/navbar/Navbar.jsx';
import SideNavbar from "./assets/components/navbar/Sidebar.jsx";
function App() {
  return (
    <div className='flex flex-col p-0 m-0'>
      <div>
        <HomePage></HomePage> 
      </div>
      <div>
        <TopNavbar></TopNavbar>
      </div>
      {/* this block gonna be the student list that include "Sidebar", "Student Database","StudentDetail" */}
      <div>
        <div className='w-20 bg-slate-600 mt-10'>
          <SideNavbar></SideNavbar>
        </div>
      </div>
    </div>
  );
}

export default App;
