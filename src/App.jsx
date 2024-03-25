import React from 'react'; // Add import for React
import './App.css';
import Home_Page from './assets/components/homepage/Home_Page.jsx';

function App() {
  return (
    <div>
      <h1 className='text-red-500 bg-black'>Hello world</h1>
      <Home_Page />
    </div>
  );
}

export default App;
