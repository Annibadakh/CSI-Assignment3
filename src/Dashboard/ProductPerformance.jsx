import { useEffect, useState } from 'react';
import axios from 'axios';
import {
  PieChart, Pie, Cell, Tooltip, Legend, ResponsiveContainer,
} from 'recharts';

const COLORS = ['#3b82f6', '#10b981', '#f59e0b', '#ef4444', '#8b5cf6', '#ec4899'];

const ProductPerformance = () => {
  const [categoryData, setCategoryData] = useState([]);

  useEffect(() => {
    axios.get('https://dummyjson.com/products')
      .then(res => {
        const allProducts = res.data.products;
        const categoryMap = {};

        allProducts.forEach(product => {
          categoryMap[product.category] = (categoryMap[product.category] || 0) + 1;
        });

        const chartData = Object.keys(categoryMap).map((key) => ({
          name: key,
          value: categoryMap[key],
        }));

        setCategoryData(chartData);
      });
  }, []);

  return (
    <div className="p-2">
      <h1 className="text-2xl font-semibold mb-4">Product Performance</h1>

      <div className="bg-white rounded-2xl shadow p-4">
        <h2 className="text-lg font-semibold mb-2">Product Categories Distribution</h2>
        <ResponsiveContainer width="100%" height={300}>
          <PieChart>
            <Pie
              data={categoryData}
              dataKey="value"
              nameKey="name"
              cx="50%"
              cy="50%"
              outerRadius={110}
              fill="#8884d8"
              label
            >
              {categoryData.map((_, index) => (
                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
              ))}
            </Pie>
            <Tooltip />
            <Legend />
          </PieChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default ProductPerformance;
