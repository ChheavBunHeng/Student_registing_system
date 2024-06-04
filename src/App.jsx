import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './assets/components/homepage/Home_Page.jsx';
import TopNavBar from "./assets/components/navbar/TopNavBar.jsx";
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
import Support from './assets/components/footer/Support.jsx';
import NotFound from "./assets/components/Error/NotFound.jsx";
// import ServiceJS from "./assets/server/server.js";
function App() {
  return (
      <div className='overflow-x-hidden overflow-y-hidden'>
        <div className='flex gap-[32px]'>
          <HomePage></HomePage>
        </div>
      </div>
  );
}

export default App;
