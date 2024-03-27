import React from 'react';
import HomePage from './assets/components/homepage/Home_Page.jsx';
import TopNavbar from './assets/components/navbar/Navbar.jsx';

function App() {
  return (
    <div className='flex flex-col items-start'>
      <div>
        <HomePage></HomePage> 
      </div>
      <div>
        <TopNavbar></TopNavbar>
      </div>
    </div>
  );
}

export default App;
