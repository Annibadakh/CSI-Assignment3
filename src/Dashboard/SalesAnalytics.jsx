import { useEffect, useState } from 'react';
import axios from 'axios';
import {
  BarChart, Bar, LineChart, Line, XAxis, YAxis, Tooltip, CartesianGrid, ResponsiveContainer, Legend,
} from 'recharts';

const SalesAnalytics = () => {
  const [productData, setProductData] = useState([]);

  useEffect(() => {
    axios.get('https://dummyjson.com/products')
      .then(res => {
        // Get top 5 by stock
        const sorted = res.data.products.sort((a, b) => b.stock - a.stock).slice(0, 5);
        setProductData(sorted);
      });
  }, []);

  return (
    <div className="p-2">
      <h1 className="text-2xl font-semibold mb-4">Sales Analytics</h1>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Bar Chart: Top Products by Stock */}
        <div className="bg-white shadow rounded-2xl p-4">
          <h2 className="text-lg font-semibold mb-2">Top 5 Products by Stock</h2>
          <ResponsiveContainer width="100%" height={250}>
            <BarChart data={productData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="title" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar dataKey="stock" fill="#3b82f6" />
            </BarChart>
          </ResponsiveContainer>
        </div>

        {/* Line Chart: Price Distribution */}
        <div className="bg-white shadow rounded-2xl p-4">
          <h2 className="text-lg font-semibold mb-2">Price Comparison</h2>
          <ResponsiveContainer width="100%" height={250}>
            <LineChart data={productData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="title" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Line type="monotone" dataKey="price" stroke="#10b981" />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
};

export default SalesAnalytics;
