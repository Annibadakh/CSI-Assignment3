import {
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer,
} from 'recharts';

const revenueData = [
  { month: 'Jan', revenue: 5000, expenses: 3000 },
  { month: 'Feb', revenue: 6000, expenses: 3500 },
  { month: 'Mar', revenue: 7500, expenses: 4200 },
  { month: 'Apr', revenue: 7000, expenses: 3800 },
  { month: 'May', revenue: 8000, expenses: 4500 },
  { month: 'Jun', revenue: 8500, expenses: 4700 },
];

const RevenueBreakdown = () => {
  return (
    <div className="p-2">
      <h1 className="text-2xl font-semibold mb-4">Revenue Breakdown</h1>

      <div className="bg-white rounded-2xl shadow p-4">
        <h2 className="text-lg font-semibold mb-2">Monthly Revenue vs Expenses</h2>
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={revenueData} margin={{ top: 10, right: 30, left: 0, bottom: 5 }}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="month" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="revenue" stackId="a" fill="#10b981" />
            <Bar dataKey="expenses" stackId="a" fill="#ef4444" />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default RevenueBreakdown;
