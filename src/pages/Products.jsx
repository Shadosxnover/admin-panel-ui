import React, { useState } from 'react';
import { PlusIcon, PencilIcon, TrashIcon, XIcon } from 'lucide-react';

const initialProducts = [
  { id: 1, name: 'Laptop', category: 'Electronics', price: 999.99, stock: 50 },
  { id: 2, name: 'Smartphone', category: 'Electronics', price: 699.99, stock: 100 },
  { id: 3, name: 'Headphones', category: 'Accessories', price: 149.99, stock: 200 },
  { id: 4, name: 'Desk Chair', category: 'Furniture', price: 199.99, stock: 30 },
  { id: 5, name: 'Coffee Maker', category: 'Appliances', price: 79.99, stock: 75 },
];

const Products = () => {
  const [products, setProducts] = useState(initialProducts);
  const [searchTerm, setSearchTerm] = useState('');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentProduct, setCurrentProduct] = useState(null);

  const filteredProducts = products.filter(product =>
    product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    product.category.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleAddProduct = (newProduct) => {
    setProducts([...products, { ...newProduct, id: products.length + 1 }]);
  };

  const handleUpdateProduct = (updatedProduct) => {
    setProducts(products.map(product => product.id === updatedProduct.id ? updatedProduct : product));
  };

  const handleDeleteProduct = (id) => {
    setProducts(products.filter(product => product.id !== id));
  };

  const openModal = (product = null) => {
    setCurrentProduct(product);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setCurrentProduct(null);
    setIsModalOpen(false);
  };

  const getStockStatus = (stock) => {
    if (stock <= 10) {
      return 'bg-red-100 text-red-800 border border-red-300';
    } else if (stock <= 50) {
      return 'bg-yellow-100 text-yellow-800 border border-yellow-300';
    }
    return 'bg-green-100 text-green-800 border border-green-300';
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex justify-between items-center mb-8">
        <h2 className="text-3xl font-bold text-gray-800 dark:text-white">Inventory Management</h2>
        <button 
          onClick={() => openModal()} 
          className="bg-orange-600 hover:bg-orange-700 text-white font-bold py-2.5 px-5 rounded-lg inline-flex items-center transition-all duration-200 shadow-lg hover:shadow-xl"
        >
          <PlusIcon className="h-5 w-5 mr-2" />
          Add Product
        </button>
      </div>
      
      <div className="mb-6">
        <div className="relative">
          <input
            type="text"
            placeholder="Search by product name or category..."
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
                Product Name
              </th>
              <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 dark:text-gray-300 uppercase tracking-wider">
                Category
              </th>
              <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 dark:text-gray-300 uppercase tracking-wider">
                Price
              </th>
              <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 dark:text-gray-300 uppercase tracking-wider">
                Stock
              </th>
              <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 dark:text-gray-300 uppercase tracking-wider">
                Actions
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
            {filteredProducts.map((product) => (
              <tr key={product.id} className="hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors duration-200">
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="flex items-center">
                    <div className="ml-4">
                      <p className="text-sm font-medium text-gray-900 dark:text-white">
                        {product.name}
                      </p>
                    </div>
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <span className="px-3 py-1 text-sm rounded-full bg-gray-100 text-gray-800 border border-gray-300">
                    {product.category}
                  </span>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <p className="text-sm font-medium text-gray-900 dark:text-white">
                    ${product.price.toFixed(2)}
                  </p>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <span className={`px-3 py-1 text-sm rounded-full ${getStockStatus(product.stock)}`}>
                    {product.stock} units
                  </span>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm">
                  <div className="flex space-x-3">
                    <button 
                      onClick={() => openModal(product)}
                      className="text-orange-600 hover:text-orange-800 dark:text-orange-400 dark:hover:text-orange-300 transition-colors duration-200"
                    >
                      <PencilIcon className="h-5 w-5" />
                    </button>
                    <button 
                      onClick={() => handleDeleteProduct(product.id)}
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
        <ProductModal
          product={currentProduct}
          onClose={closeModal}
          onSave={currentProduct ? handleUpdateProduct : handleAddProduct}
        />
      )}
    </div>
  );
};

const ProductModal = ({ product, onClose, onSave }) => {
  const [formData, setFormData] = useState(
    product || { name: '', category: '', price: '', stock: '' }
  );

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSave({
      ...formData,
      price: parseFloat(formData.price),
      stock: parseInt(formData.stock),
      id: product ? product.id : undefined
    });
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm overflow-y-auto h-full w-full flex items-center justify-center">
      <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-2xl max-w-md w-full m-4">
        <div className="flex justify-between items-center mb-6">
          <h3 className="text-xl font-bold text-gray-900 dark:text-white">
            {product ? 'Edit Product' : 'Add New Product'}
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
              Product Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent dark:bg-gray-700 dark:text-white dark:border-gray-600"
              required
            />
          </div>
          <div>
            <label htmlFor="category" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              Category
            </label>
            <input
              type="text"
              id="category"
              name="category"
              value={formData.category}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent dark:bg-gray-700 dark:text-white dark:border-gray-600"
              required
            />
          </div>
          <div>
            <label htmlFor="price" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              Price ($)
            </label>
            <input
              type="number"
              id="price"
              name="price"
              value={formData.price}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent dark:bg-gray-700 dark:text-white dark:border-gray-600"
              required
              min="0"
              step="0.01"
            />
          </div>
          <div>
            <label htmlFor="stock" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              Stock
            </label>
            <input
              type="number"
              id="stock"
              name="stock"
              value={formData.stock}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent dark:bg-gray-700 dark:text-white dark:border-gray-600"
              required
              min="0"
            />
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
              {product ? 'Update' : 'Add'} Product
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Products;