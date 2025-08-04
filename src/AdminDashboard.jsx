import React, { useState } from 'react';
import { Link, Outlet } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import DarkModeToggle from './DarkModeToggle';
import TypewriterAnimations from './TypewriterAnimations'

const AdminDashboard = ({ adminName }) => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  const capitalizeName = (name) => {
    return name
      .split(' ')
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
      .join(' ');
  };

  return (
    <div className="min-h-screen flex flex-col dark:bg-gray-900 dark:text-white transition-colors duration-300">
      
      {/* Sticky Header */}
      <header className="sticky top-0 z-50 bg-white dark:bg-gray-800 p-4 shadow flex items-center justify-between">
        <button onClick={toggleSidebar} className="md:hidden text-gray-700 dark:text-gray-200">
          {sidebarOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
        <div className="text-center flex-1">
          <h1 className="text-2xl md:text-4xl font-extrabold text-blue-400">
          <TypewriterAnimations  words={['welcome to Redemta Kanja Global Admin Dashboard']}/>
          </h1>
          {adminName && (
            <p className="text-sm md:text-xl text-gray-700 dark:text-gray-300 mt-1">
              Welcome back, <span className="text-amber-400 font-semibold">{capitalizeName(adminName)}</span>!
            </p>
          )}
        </div>
        <div className="hidden md:block">
          <DarkModeToggle />
        </div>
      </header>

      <div className="flex flex-1 h-[calc(100vh-4rem)] overflow-hidden">
        {/* Sidebar */}
        <aside
          className={`
            bg-gray-800 text-white w-64 p-4 space-y-4 z-40 
            h-[calc(100vh-4rem)] 
            sticky top-16
            overflow-y-auto
            transition-transform duration-300 ease-in-out
            ${sidebarOpen ? 'translate-x-0' : '-translate-x-full md:translate-x-0'}
          `}
        >
          <div className="md:hidden flex justify-end">
            <button onClick={toggleSidebar}>
              <X size={24} />
            </button>
          </div>
          <h2 className="text-lg font-semibold mb-4">Admin Panel</h2>
          <nav className="flex flex-col space-y-2">
            <Link to="/admin/logo" className="hover:bg-gray-700 p-2 rounded">Logo</Link>
            <Link to="/admin/navbar" className="hover:bg-gray-700 p-2 rounded">Navbar</Link>
            <Link to="/admin/hero" className="hover:bg-gray-700 p-2 rounded">Hero</Link>
            <Link to="/admin/testimonials" className="hover:bg-gray-700 p-2 rounded">Daily Inspiration</Link>
            <Link to="/admin/about" className="hover:bg-gray-700 p-2 rounded">About</Link>
            <Link to="/admin/core-values" className="hover:bg-gray-700 p-2 rounded">Core Values</Link>
            <Link to="/admin/services" className="hover:bg-gray-700 p-2 rounded">Services</Link>
            <Link to="/admin/team" className="hover:bg-gray-700 p-2 rounded">Team</Link>
            <Link to="/admin/reviews" className="hover:bg-gray-700 p-2 rounded">Reviews</Link>
            <Link to="/admin/blogs" className="hover:bg-gray-700 p-2 rounded">Blogs</Link>
            <Link to="/admin/subscribe" className="hover:bg-gray-700 p-2 rounded">Subscribers</Link>
            <Link to="/admin/contact" className="hover:bg-gray-700 p-2 rounded">Contact</Link>
            <Link to="/admin/visitors" className="hover:bg-gray-700 p-2 rounded">Visitors & Location</Link>
            <Link to="/admin/emails" className="hover:bg-gray-700 p-2 rounded">Send Emails</Link>
            <Link to="/admin/inquiry" className="hover:bg-gray-700 p-2 rounded">User Inquiries</Link>
          </nav>
        </aside>

        {/* Main Content */}
        <main className="flex-1 p-4 md:p-6 bg-gray-100 dark:bg-gray-900 overflow-y-auto ml-0 md:ml-64">
          <div className="md:hidden mb-4">
            <DarkModeToggle />
          </div>
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default AdminDashboard;
