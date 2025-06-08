import {
  AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer,
} from 'recharts';

const userData = [
  { month: 'Jan', users: 120 },
  { month: 'Feb', users: 200 },
  { month: 'Mar', users: 250 },
  { month: 'Apr', users: 320 },
  { month: 'May', users: 450 },
  { month: 'Jun', users: 600 },
  { month: 'Jul', users: 750 },
  { month: 'Aug', users: 900 },
];

const UserGrowth = () => {
  return (
    <div className="p-2">
      <h1 className="text-2xl font-semibold mb-4">User Growth Overview</h1>
      
      <div className="bg-white rounded-2xl shadow p-4">
        <h2 className="text-lg font-semibold mb-2">Monthly Sign-Ups</h2>
        <ResponsiveContainer width="100%" height={300}>
          <AreaChart data={userData} margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
            <defs>
              <linearGradient id="colorUsers" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#3b82f6" stopOpacity={0.8} />
                <stop offset="95%" stopColor="#3b82f6" stopOpacity={0} />
              </linearGradient>
            </defs>
            <XAxis dataKey="month" />
            <YAxis />
            <CartesianGrid strokeDasharray="3 3" />
            <Tooltip />
            <Area
              type="monotone"
              dataKey="users"
              stroke="#3b82f6"
              fillOpacity={1}
              fill="url(#colorUsers)"
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default UserGrowth;
