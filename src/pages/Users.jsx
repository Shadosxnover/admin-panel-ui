import React, { useState } from 'react';
import { PlusIcon, PencilIcon, TrashIcon, XIcon } from 'lucide-react';

const initialUsers = [
    { id: 1, name: 'John Doe', email: 'john@example.com', role: 'Admin', status: 'Active' },
    { id: 2, name: 'Jane Smith', email: 'jane@example.com', role: 'Editor', status: 'Active' },
    { id: 3, name: 'Bob Johnson', email: 'bob@example.com', role: 'Viewer', status: 'Inactive' },
    { id: 4, name: 'Alice Brown', email: 'alice@example.com', role: 'Editor', status: 'Active' },
    { id: 5, name: 'Charlie Davis', email: 'charlie@example.com', role: 'Viewer', status: 'Active' },
];

const Users = () => {
    const [users, setUsers] = useState(initialUsers);
    const [searchTerm, setSearchTerm] = useState('');
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [currentUser, setCurrentUser] = useState(null);

    const filteredUsers = users.filter(user =>
        user.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        user.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
        user.role.toLowerCase().includes(searchTerm.toLowerCase())
    );

    const handleAddUser = (newUser) => {
        setUsers([...users, { ...newUser, id: users.length + 1 }]);
    };

    const handleUpdateUser = (updatedUser) => {
        setUsers(users.map(user => user.id === updatedUser.id ? { ...user, ...updatedUser } : user));
    };

    const handleDeleteUser = (id) => {
        setUsers(users.filter(user => user.id !== id));
    };

    const openModal = (user = null) => {
        setCurrentUser(user);
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setCurrentUser(null);
        setIsModalOpen(false);
    };

    const getStatusColor = (status) => {
        return status === 'Active' ? 'bg-green-100 text-green-800 border border-green-300' : 'bg-red-100 text-red-800 border border-red-300';
    };

    const getRoleStyle = (role) => {
        switch (role) {
            case 'Admin':
                return 'bg-amber-100 text-amber-800 border border-amber-300';
            case 'Editor':
                return 'bg-blue-100 text-blue-800 border border-blue-300';
            case 'Viewer':
                return 'bg-emerald-100 text-emerald-800 border border-emerald-300';
            default:
                return 'bg-gray-100 text-gray-800 border border-gray-300';
        }
    };

    return (
        <div className="container mx-auto px-4 py-8">
            <div className="flex justify-between items-center mb-8">
                <h2 className="text-3xl font-bold text-gray-800 dark:text-white">Users Management</h2>
                <button
                    onClick={() => openModal()}
                    className="bg-orange-600 hover:bg-orange-700 text-white font-bold py-2.5 px-5 rounded-lg inline-flex items-center transition-all duration-200 shadow-lg hover:shadow-xl"
                >
                    <PlusIcon className="h-5 w-5 mr-2" />
                    Add User
                </button>
            </div>

            <div className="mb-6">
                <div className="relative">
                    <input
                        type="text"
                        placeholder="Search users by name, email, or role..."
                        className="w-full px-4 py-3 pl-12 placeholder-gray-400 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent dark:bg-gray-800 dark:text-white dark:border-gray-700 transition-all duration-200"
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                    />
                    <div className="absolute left-4 top-3.5">
                        <svg className="h-5 w-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                        </svg>
                    </div>
                </div>
            </div>

            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-xl overflow-hidden">
                <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
                    <thead>
                        <tr className="bg-gray-50 dark:bg-gray-700">
                            <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 dark:text-gray-300 uppercase tracking-wider">
                                User
                            </th>
                            <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 dark:text-gray-300 uppercase tracking-wider">
                                Email
                            </th>
                            <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 dark:text-gray-300 uppercase tracking-wider">
                                Role
                            </th>
                            <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 dark:text-gray-300 uppercase tracking-wider">
                                Status
                            </th>
                            <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 dark:text-gray-300 uppercase tracking-wider">
                                Actions
                            </th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
                        {filteredUsers.map((user) => (
                            <tr key={user.id} className="hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors duration-200">
                                <td className="px-6 py-4 whitespace-nowrap">
                                    <div className="flex items-center">
                                        <div className="flex-shrink-0 h-12 w-12">
                                            <img
                                                className="h-12 w-12 rounded-full object-cover border-2 border-gray-200 dark:border-gray-600"
                                                src={`https://ui-avatars.com/api/?name=${user.name}&background=random&size=128`}
                                                alt=""
                                            />
                                        </div>
                                        <div className="ml-4">
                                            <p className="text-sm font-medium text-gray-900 dark:text-white">
                                                {user.name}
                                            </p>
                                        </div>
                                    </div>
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap">
                                    <p className="text-sm text-gray-600 dark:text-gray-300">{user.email}</p>
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap">
                                    <span className={`px-3 py-1 text-sm rounded-full ${getRoleStyle(user.role)}`}>
                                        {user.role}
                                    </span>
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap">
                                    <span className={`px-3 py-1 text-sm rounded-full ${getStatusColor(user.status)}`}>
                                        {user.status}
                                    </span>
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm">
                                    <div className="flex space-x-3">
                                        <button
                                            onClick={() => openModal(user)}
                                            className="text-orange-600 hover:text-orange-800 dark:text-orange-400 dark:hover:text-orange-300 transition-colors duration-200"
                                        >
                                            <PencilIcon className="h-5 w-5" />
                                        </button>
                                        <button
                                            onClick={() => handleDeleteUser(user.id)}
                                            className="text-red-600 hover:text-red-800 dark:text-red-400 dark:hover:text-red-300 transition-colors duration-200"
                                        >
                                            <TrashIcon className="h-5 w-5" />
                                        </button>
                                    </div>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            {isModalOpen && (
                <UserModal
                    user={currentUser}
                    onClose={closeModal}
                    onSave={currentUser ? handleUpdateUser : handleAddUser}
                />
            )}
        </div>
    );
};

const UserModal = ({ user, onClose, onSave }) => {
    const [formData, setFormData] = useState(
        user || { name: '', email: '', role: 'Viewer', status: 'Active' }
    );

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        onSave(formData);
        onClose();
    };

    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm overflow-y-auto h-full w-full flex items-center justify-center">
            <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-2xl max-w-md w-full m-4">
                <div className="flex justify-between items-center mb-6">
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                        {user ? 'Edit User' : 'Add New User'}
                    </h3>
                    <button
                        onClick={onClose}
                        className="text-gray-400 hover:text-gray-600 dark:hover:text-gray-300 transition-colors duration-200"
                    >
                        <XIcon className="h-6 w-6" />
                    </button>
                </div>
                <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                        <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                            Name
                        </label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-gray-700 dark:text-white dark:border-gray-600"
                            required
                            disabled={user}
                        />
                    </div>
                    <div>
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                            Email
                        </label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-gray-700 dark:text-white dark:border-gray-600"
                            required
                            disabled={user}
                        />
                    </div>
                    <div>
                        <label htmlFor="role" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                            Role
                        </label>
                        <select
                            id="role"
                            name="role"
                            value={formData.role}
                            onChange={handleChange}
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-gray-700 dark:text-white dark:border-gray-600"
                            required
                        >
                            <option value="Admin">Admin</option>
                            <option value="Editor">Editor</option>
                            <option value="Viewer">Viewer</option>
                        </select>
                    </div>
                    <div>
                        <label htmlFor="status" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                            Status
                        </label>
                        <select
                            id="status"
                            name="status"
                            value={formData.status}
                            onChange={handleChange}
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-gray-700 dark:text-white dark:border-gray-600"
                            required
                        >
                            <option value="Active">Active</option>
                            <option value="Inactive">Inactive</option>
                        </select>
                    </div>
                    <div className="flex justify-end space-x-3 pt-4">
                        <button
                            type="button"
                            onClick={onClose}
                            className="px-4 py-2 text-sm font-medium text-gray-700 bg-gray-100 rounded-lg hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500 transition-colors duration-200"
                        >
                            Cancel
                        </button>
                        <button
                            type="submit"
                            className="px-4 py-2 text-sm font-medium text-white bg-orange-600 rounded-lg hover:bg-orange-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-500 transition-colors duration-200"
                        >
                            {user ? 'Update' : 'Add'} User
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Users;