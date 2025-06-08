import {
  LineChart, Line, BarChart, Bar, XAxis, YAxis, Tooltip, RadialBarChart, RadialBar, Legend, ResponsiveContainer
} from 'recharts';

const salesData = [
  { month: 'Jan', sales: 4000 },
  { month: 'Feb', sales: 3000 },
  { month: 'Mar', sales: 5000 },
  { month: 'Apr', sales: 4000 },
  { month: 'May', sales: 6000 },
  { month: 'Jun', sales: 7000 },
];

const usersData = [
  { month: 'Jan', users: 200 },
  { month: 'Feb', users: 450 },
  { month: 'Mar', users: 300 },
  { month: 'Apr', users: 500 },
  { month: 'May', users: 650 },
  { month: 'Jun', users: 800 },
];

const revenueData = [
  { name: 'Target', value: 80 },
  { name: 'Achieved', value: 65 },
];

const Home = () => {
  return (
    <div className="p-2 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {/* Sales Line Chart */}
      <div className="bg-white rounded-2xl shadow p-4">
        <h2 className="text-lg font-semibold mb-2">Monthly Sales</h2>
        <ResponsiveContainer width="100%" height={200}>
          <LineChart data={salesData}>
            <XAxis dataKey="month" />
            <YAxis />
            <Tooltip />
            <Line type="monotone" dataKey="sales" stroke="#3b82f6" strokeWidth={2} />
          </LineChart>
        </ResponsiveContainer>
      </div>

      {/* Users Bar Chart */}
      <div className="bg-white rounded-2xl shadow p-4">
        <h2 className="text-lg font-semibold mb-2">New Users</h2>
        <ResponsiveContainer width="100%" height={200}>
          <BarChart data={usersData}>
            <XAxis dataKey="month" />
            <YAxis />
            <Tooltip />
            <Bar dataKey="users" fill="#10b981" />
          </BarChart>
        </ResponsiveContainer>
      </div>

      {/* Revenue RadialBar */}
      <div className="bg-white rounded-2xl shadow p-4">
        <h2 className="text-lg font-semibold mb-2">Revenue Target</h2>
        <ResponsiveContainer width="100%" height={200}>
          <RadialBarChart innerRadius="30%" outerRadius="90%" data={revenueData} startAngle={180} endAngle={0}>
            <RadialBar background dataKey="value" fill="#6366f1" />
            <Legend verticalAlign="bottom" height={36} />
            <Tooltip />
          </RadialBarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default Home;
