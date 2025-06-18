import { ResponsiveContainer, CartesianGrid, XAxis, YAxis, Tooltip, Area, AreaChart as RechartsAreaChart } from "recharts";

const AreaChart = () => {
    const areaChartData = [
        { name: 'Jan', users: 4000, sessions: 2400 },
        { name: 'Feb', users: 3000, sessions: 1398 },
        { name: 'Mar', users: 2000, sessions: 9800 },
        { name: 'Apr', users: 2780, sessions: 3908 },
        { name: 'May', users: 1890, sessions: 4800 },
        { name: 'Jun', users: 2390, sessions: 3800 },
      ];
    return (
        <ResponsiveContainer width="100%" height="100%">
            <RechartsAreaChart data={areaChartData}>
                <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
                <XAxis dataKey="name" stroke="#9ca3af" />
                <YAxis stroke="#9ca3af" />
                <Tooltip 
                contentStyle={{ 
                    backgroundColor: '#1f2937', 
                    border: '1px solid #374151',
                    borderRadius: '8px',
                    color: '#fff'
                }} 
                />
                <Area type="monotone" dataKey="users" stackId="1" stroke="#3b82f6" fill="#3b82f6" fillOpacity={0.6} />
                <Area type="monotone" dataKey="sessions" stackId="1" stroke="#8b5cf6" fill="#8b5cf6" fillOpacity={0.6} />
            </RechartsAreaChart>
        </ResponsiveContainer>
    );
}

export default AreaChart;