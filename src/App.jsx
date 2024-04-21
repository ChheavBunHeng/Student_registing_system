import React from 'react';
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
function App() {
  return (
    <div>
      <TopNavbar />
      <HomePage />
      <Office></Office>
      <Design></Design>
      <Account></Account>
      <Programming></Programming>
      <Database></Database>
      <WebDev></WebDev>
      <VideoEditing></VideoEditing>
    </div>
  );
}

export default App;
