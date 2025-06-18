import { ResponsiveContainer, CartesianGrid, XAxis, YAxis, Tooltip, Line, LineChart as RechartsLineChart } from "recharts";

const LineChart = () => {
    const chartData = [
        { name: 'Jan', value: 400, growth: 240 },
        { name: 'Feb', value: 300, growth: 139 },
        { name: 'Mar', value: 200, growth: 980 },
        { name: 'Apr', value: 278, growth: 390 },
        { name: 'May', value: 189, growth: 480 },
        { name: 'Jun', value: 239, growth: 380 },
      ];
    return (
        <ResponsiveContainer width="100%" height="100%">
        <RechartsLineChart data={chartData}>
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
            <Line 
            type="monotone" 
            dataKey="value" 
            stroke="#3b82f6" 
            strokeWidth={3} 
            dot={{ fill: '#3b82f6', strokeWidth: 2, r: 4 }} 
            />
            <Line 
            type="monotone" 
            dataKey="growth" 
            stroke="#8b5cf6" 
            strokeWidth={3} 
            dot={{ fill: '#8b5cf6', strokeWidth: 2, r: 4 }} 
            />
        </RechartsLineChart>
        </ResponsiveContainer>
    );
}

export default LineChart;