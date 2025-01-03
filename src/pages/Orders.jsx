import React, { useState } from 'react';
import { EyeIcon } from '@heroicons/react/outline';

const mockOrders = [
  { id: 1, customer: 'John Doe', date: '2023-05-01', total: 1299.99, status: 'Delivered' },
  { id: 2, customer: 'Jane Smith', date: '2023-05-02', total: 849.97, status: 'Processing' },
  { id: 3, customer: 'Bob Johnson', date: '2023-05-03', total: 529.98, status: 'Shipped' },
  { id: 4, customer: 'Alice Brown', date: '2023-05-04', total: 149.99, status: 'Pending' },
  { id: 5, customer: 'Charlie Davis', date: '2023-05-05', total: 999.95, status: 'Delivered' },
];

const Orders = () => {
  const [orders, setOrders] = useState(mockOrders);
  const [searchTerm, setSearchTerm] = useState('');

  const filteredOrders = orders.filter(order =>
    order.customer.toLowerCase().includes(searchTerm.toLowerCase()) ||
    order.status.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const getStatusColor = (status) => {
    switch (status) {
      case 'Delivered':
        return 'bg-green-200 text-green-800';
      case 'Processing':
        return 'bg-yellow-200 text-yellow-800';
      case 'Shipped':
        return 'bg-blue-200 text-blue-800';
      case 'Pending':
        return 'bg-red-200 text-red-800';
      default:
        return 'bg-gray-200 text-gray-800';
    }
  };

  return (
    <div className="container mx-auto px-4">
      <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6">Orders</h2>
      <div className="mb-4">
        <input
          type="text"
          placeholder="Search orders..."
          className="w-full px-3 py-2 placeholder-gray-300 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-orange-200 focus:border-orange-500 dark:bg-gray-700 dark:text-white dark:placeholder-gray-500 dark:border-gray-600 dark:focus:ring-gray-900 dark:focus:border-gray-500"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>
      <div className="bg-white dark:bg-gray-800 shadow-md rounded-lg overflow-hidden">
        <table className="min-w-full leading-normal">
          <thead>
            <tr>
              <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 dark:bg-gray-700 text-left text-xs font-semibold text-gray-600 dark:text-gray-200 uppercase tracking-wider">
                Order ID
              </th>
              <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 dark:bg-gray-700 text-left text-xs font-semibold text-gray-600 dark:text-gray-200 uppercase tracking-wider">
                Customer
              </th>
              <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 dark:bg-gray-700 text-left text-xs font-semibold text-gray-600 dark:text-gray-200 uppercase tracking-wider">
                Date
              </th>
              <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 dark:bg-gray-700 text-left text-xs font-semibold text-gray-600 dark:text-gray-200 uppercase tracking-wider">
                Total
              </th>
              <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 dark:bg-gray-700 text-left text-xs font-semibold text-gray-600 dark:text-gray-200 uppercase tracking-wider">
                Status
              </th>
              <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 dark:bg-gray-700 text-left text-xs font-semibold text-gray-600 dark:text-gray-200 uppercase tracking-wider">
                Actions
              </th>
            </tr>
          </thead>
          <tbody>
            {filteredOrders.map((order) => (
              <tr key={order.id}>
                <td className="px-5 py-5 border-b border-gray-200 bg-white dark:bg-gray-800 text-sm">
                  <p className="text-gray-900 dark:text-gray-100 whitespace-no-wrap">#{order.id}</p>
                </td>
                <td className="px-5 py-5 border-b border-gray-200 bg-white dark:bg-gray-800 text-sm">
                  <p className="text-gray-900 dark:text-gray-100 whitespace-no-wrap">{order.customer}</p>
                </td>
                <td className="px-5 py-5 border-b border-gray-200 bg-white dark:bg-gray-800 text-sm">
                  <p className="text-gray-900 dark:text-gray-100 whitespace-no-wrap">{order.date}</p>
                </td>
                <td className="px-5 py-5 border-b border-gray-200 bg-white dark:bg-gray-800 text-sm">
                  <p className="text-gray-900 dark:text-gray-100 whitespace-no-wrap">${order.total.toFixed(2)}</p>
                </td>
                <td className="px-5 py-5 border-b border-gray-200 bg-white dark:bg-gray-800 text-sm">
                  <span className={`relative inline-block px-3 py-1 font-semibold leading-tight rounded-full ${getStatusColor(order.status)}`}>
                    {order.status}
                  </span>
                </td>
                <td className="px-5 py-5 border-b border-gray-200 bg-white dark:bg-gray-800 text-sm">
                  <button className="text-orange-600 hover:text-orange-900 dark:text-orange-400 dark:hover:text-orange-300">
                    <EyeIcon className="h-5 w-5" />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Orders;

