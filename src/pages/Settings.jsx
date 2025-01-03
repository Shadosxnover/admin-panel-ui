import React, { useState } from 'react';
import { 
  Bell, Moon, Shield, Globe, User, Mail, Key, 
  Smartphone, Database, Trash2, AlertCircle, Save,
  Lock, Languages
} from 'lucide-react';

const Settings = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    language: 'en',
    timezone: 'UTC',
    dataRetention: '30',
    sessionTimeout: '60'
  });

  const [preferences, setPreferences] = useState({
    notifications: {
      email: true,
      push: false,
      updates: true,
      security: true
    },
    darkMode: false,
    twoFactor: false,
    apiAccess: false,
    autoBackup: true
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleToggle = (category, setting) => {
    setPreferences(prev => ({
      ...prev,
      [category]: typeof setting === 'undefined'
        ? !prev[category]
        : {
          ...prev[category],
          [setting]: !prev[category][setting]
        }
    }));
  };

  const Toggle = ({ checked, onChange, label, icon: Icon }) => (
    <div className="flex items-center justify-between py-3">
      <div className="flex items-center space-x-3">
        <div className="p-2 bg-orange-100 dark:bg-orange-900/20 rounded-lg">
          <Icon className="h-5 w-5 text-orange-600 dark:text-orange-400" />
        </div>
        <span className="text-gray-700 dark:text-gray-200">{label}</span>
      </div>
      <button
        onClick={onChange}
        className={`${
          checked ? 'bg-orange-500 dark:bg-orange-600' : 'bg-gray-200 dark:bg-gray-700'
        } relative inline-flex h-6 w-11 items-center rounded-full transition-colors focus:outline-none`}
      >
        <span className="sr-only">Enable {label}</span>
        <span
          className={`${
            checked ? 'translate-x-6' : 'translate-x-1'
          } inline-block h-4 w-4 transform rounded-full bg-white dark:bg-gray-200 transition-transform`}
        />
      </button>
    </div>
  );

  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      <div className="flex items-center justify-between mb-8">
        <h2 className="text-2xl font-bold text-gray-800 dark:text-white">Settings</h2>
        <button className="flex items-center px-4 py-2 bg-orange-500 hover:bg-orange-600 dark:bg-orange-600 dark:hover:bg-orange-700 text-white rounded-lg transition-colors">
          <Save className="h-4 w-4 mr-2" />
          Save Changes
        </button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Profile Section */}
        <div className="lg:col-span-2 space-y-6">
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm p-6">
            <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-4">Profile Information</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-200 mb-1">First Name</label>
                <input
                  type="text"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 rounded-lg border border-gray-200 dark:border-gray-700 dark:bg-gray-700 dark:text-white focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-200 mb-1">Last Name</label>
                <input
                  type="text"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 rounded-lg border border-gray-200 dark:border-gray-700 dark:bg-gray-700 dark:text-white focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-200 mb-1">Email Address</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 rounded-lg border border-gray-200 dark:border-gray-700 dark:bg-gray-700 dark:text-white focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-200 mb-1">Phone Number</label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 rounded-lg border border-gray-200 dark:border-gray-700 dark:bg-gray-700 dark:text-white focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                />
              </div>
            </div>
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm p-6">
            <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-4">System Preferences</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-200 mb-1">Language</label>
                <select
                  name="language"
                  value={formData.language}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 rounded-lg border border-gray-200 dark:border-gray-700 dark:bg-gray-700 dark:text-white focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                >
                  <option value="en">English</option>
                  <option value="es">Spanish</option>
                  <option value="fr">French</option>
                  <option value="de">German</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-200 mb-1">Timezone</label>
                <select
                  name="timezone"
                  value={formData.timezone}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 rounded-lg border border-gray-200 dark:border-gray-700 dark:bg-gray-700 dark:text-white focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                >
                  <option value="UTC">UTC</option>
                  <option value="EST">EST</option>
                  <option value="PST">PST</option>
                  <option value="GMT">GMT</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-200 mb-1">Data Retention (days)</label>
                <select
                  name="dataRetention"
                  value={formData.dataRetention}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 rounded-lg border border-gray-200 dark:border-gray-700 dark:bg-gray-700 dark:text-white focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                >
                  <option value="30">30 days</option>
                  <option value="60">60 days</option>
                  <option value="90">90 days</option>
                  <option value="180">180 days</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-200 mb-1">Session Timeout (minutes)</label>
                <select
                  name="sessionTimeout"
                  value={formData.sessionTimeout}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 rounded-lg border border-gray-200 dark:border-gray-700 dark:bg-gray-700 dark:text-white focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                >
                  <option value="30">30 minutes</option>
                  <option value="60">60 minutes</option>
                  <option value="120">120 minutes</option>
                  <option value="240">240 minutes</option>
                </select>
              </div>
            </div>
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm p-6">
            <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-4">Notification Preferences</h3>
            <div className="space-y-2">
              <Toggle
                checked={preferences.notifications.email}
                onChange={() => handleToggle('notifications', 'email')}
                label="Email Notifications"
                icon={Mail}
              />
              <Toggle
                checked={preferences.notifications.push}
                onChange={() => handleToggle('notifications', 'push')}
                label="Push Notifications"
                icon={Bell}
              />
              <Toggle
                checked={preferences.notifications.updates}
                onChange={() => handleToggle('notifications', 'updates')}
                label="System Updates"
                icon={AlertCircle}
              />
              <Toggle
                checked={preferences.notifications.security}
                onChange={() => handleToggle('notifications', 'security')}
                label="Security Alerts"
                icon={Shield}
              />
            </div>
          </div>
        </div>

        {/* Quick Settings Sidebar */}
        <div className="space-y-6">
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm p-6">
            <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-4">Quick Settings</h3>
            <div className="space-y-2">
              <Toggle
                checked={preferences.darkMode}
                onChange={() => handleToggle('darkMode')}
                label="Dark Mode"
                icon={Moon}
              />
              <Toggle
                checked={preferences.twoFactor}
                onChange={() => handleToggle('twoFactor')}
                label="Two-Factor Auth"
                icon={Lock}
              />
              <Toggle
                checked={preferences.apiAccess}
                onChange={() => handleToggle('apiAccess')}
                label="API Access"
                icon={Key}
              />
              <Toggle
                checked={preferences.autoBackup}
                onChange={() => handleToggle('autoBackup')}
                label="Auto Backup"
                icon={Database}
              />
            </div>
          </div>

          <div className="bg-orange-50 dark:bg-gray-800 rounded-xl p-6">
            <h3 className="text-lg font-semibold text-orange-800 dark:text-orange-400 mb-2">Danger Zone</h3>
            <p className="text-sm text-orange-600 dark:text-orange-300 mb-4">These actions cannot be undone.</p>
            <div className="space-y-3">
              <button className="w-full flex items-center justify-center px-4 py-2 border border-red-300 dark:border-red-500 text-red-600 dark:text-red-400 rounded-lg hover:bg-red-50 dark:hover:bg-red-900/20 transition-colors">
                <Trash2 className="h-4 w-4 mr-2" />
                Delete Account
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Settings;