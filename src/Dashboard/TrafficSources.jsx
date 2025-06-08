import {
  PieChart, Pie, Cell, Tooltip, Legend, ResponsiveContainer,
} from 'recharts';

const trafficData = [
  { name: 'Direct', value: 400 },
  { name: 'Referral', value: 300 },
  { name: 'Organic Search', value: 500 },
  { name: 'Social Media', value: 200 },
  { name: 'Email Campaigns', value: 100 },
];

const COLORS = ['#3b82f6', '#10b981', '#f59e0b', '#ef4444', '#8b5cf6'];

const TrafficSources = () => {
  return (
    <div className="p-2">
      <h1 className="text-2xl font-semibold mb-4">Traffic Sources</h1>

      <div className="bg-white rounded-2xl shadow p-4">
        <h2 className="text-lg font-semibold mb-2">Website Traffic by Source</h2>
        <ResponsiveContainer width="100%" height={300}>
          <PieChart>
            <Pie
              data={trafficData}
              dataKey="value"
              nameKey="name"
              cx="50%"
              cy="50%"
              innerRadius={60}
              outerRadius={100}
              paddingAngle={5}
              fill="#8884d8"
              label
            >
              {trafficData.map((_, index) => (
                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
              ))}
            </Pie>
            <Tooltip />
            <Legend verticalAlign="bottom" height={36} />
          </PieChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default TrafficSources;
