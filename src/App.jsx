import React from 'react';
import HomePage from './assets/components/homepage/Home_Page.jsx';
import TopNavbar from './assets/components/navbar/Navbar.jsx';

function App() {
  return (
    <div className='flex justify-center items-start w-full h-screen'>
      <TopNavbar/>
      <HomePage/>
    </div>
  );
}

export default App;
