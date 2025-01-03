import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import Topbar from './components/Topbar';
import Dashboard from './pages/Dashboard';
import Users from './pages/Users';
import Products from './pages/Products';
import Orders from './pages/Orders';
import Reports from './pages/Reports';
import Settings from './pages/Settings';

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(true);

  return (
    <Router>
      <div className={`flex h-screen bg-light ${darkMode ? 'dark' : ''}`}>
        <Sidebar open={sidebarOpen} setOpen={setSidebarOpen} />
        <div className="flex-1 flex flex-col overflow-hidden">
          <Topbar 
            darkMode={darkMode} 
            setDarkMode={setDarkMode}
            sidebarOpen={sidebarOpen}
            setSidebarOpen={setSidebarOpen}
          />
          <main className="flex-1 overflow-x-hidden overflow-y-auto bg-light dark:bg-dark-bg transition-smooth">
            <div className="container mx-auto px-6 py-8">
              <Routes>
                <Route path="/" element={<Dashboard />} />
                <Route path="/users" element={<Users />} />
                <Route path="/products" element={<Products />} />
                <Route path="/orders" element={<Orders />} />
                <Route path="/reports" element={<Reports />} />
                <Route path="/settings" element={<Settings />} />
              </Routes>
            </div>
          </main>
        </div>
      </div>
    </Router>
  );
}

export default App;

