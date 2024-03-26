import React from 'react';
import './App.css';
import Home_Page from './assets/components/homepage/Home_Page.jsx';
import Navbar from './assets/components/navbar/Navbar.jsx';

function App() {
  return (
    <div>

    <div className="width-100vw heigh-100vh flex"> {/* Container for main content and sidebar */}
      <div className="sidebar flex flex-col bg-gray-800 text-white width-100vw heigh-100vh"> {/* Sidebar */}
        <Navbar /> {/* Navbar placed inside the sidebar */}
      </div>
      <div className="main-content flex flex-col flex-1"> {/* Main Content */}
        <h1 className='text-red-500 bg-black'>Hello world</h1>
        <Home_Page />
      </div>
    </div>
    </div>
  );
}

export default App;
