import React from 'react';
import { Outlet } from 'react-router-dom';
import { ThemeProvider } from './providers/ThemeContext';
import ToggleTheme from './components/util/ToggleTheme';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';

function App() {
  return (
    <ThemeProvider>
      <div className='flex flex-col bg-gray-100 text-gray-900 dark:bg-gray-900 dark:text-gray-50 min-h-[100vh]'>
        <Navbar />
        <div className='flex-grow'>
          <Outlet />
        </div>
        <Footer />
        <ToggleTheme />
      </div>
    </ThemeProvider>
  );
}

export default App;
