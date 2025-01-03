import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { 
  HomeIcon, UsersIcon, ShoppingBagIcon, 
  ShoppingCartIcon, ChartBarIcon, CogIcon 
} from '@heroicons/react/outline';

const Sidebar = ({ open, setOpen }) => {
  const location = useLocation();
  const menuItems = [
    { name: 'Dashboard', icon: HomeIcon, path: '/' },
    { name: 'Users', icon: UsersIcon, path: '/users' },
    { name: 'Products', icon: ShoppingBagIcon, path: '/products' },
    { name: 'Orders', icon: ShoppingCartIcon, path: '/orders' },
    { name: 'Reports', icon: ChartBarIcon, path: '/reports' },
    { name: 'Settings', icon: CogIcon, path: '/settings' },
  ];

  return (
    <div className={`${open ? 'w-64' : 'w-20'} transition-smooth flex-shrink-0 bg-secondary text-light`}>
      <div className="flex flex-col h-full">
        <div className="flex items-center justify-center h-20 bg-gradient-custom shadow-elevation">
          <h1 className={`text-3xl font-bold text-primary ${open ? '' : 'hidden'}`}>Admin Panel</h1>
          {!open && <span className="text-2xl text-primary">A</span>}
        </div>
        <ul className="flex flex-col py-4">
          {menuItems.map((item) => (
            <li key={item.name}>
              <Link
                to={item.path}
                className={`flex items-center h-12 transform hover:translate-x-2 transition-smooth text-light hover:text-primary ${
                  location.pathname === item.path ? 'bg-accent bg-opacity-20' : ''
                }`}
              >
                <span className="inline-flex items-center justify-center h-12 w-12 text-lg">
                  <item.icon className="h-6 w-6" />
                </span>
                <span className={`text-sm font-medium ${open ? '' : 'hidden'}`}>{item.name}</span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;

