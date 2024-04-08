import React from 'react';
import HomePage from './assets/components/homepage/Home_Page.jsx';
import TopNavbar from './assets/components/navbar/Navbar.jsx';
import SideNavbar from "./assets/components/navbar/Sidebar.jsx";
import Signup from './assets/components/signup/Signup.jsx';
import Signin from './assets/components/signin/Signin.jsx';
function App() {
  return (
    <div>
      <TopNavbar />
      <HomePage />
    </div>
  );
}

export default App;
