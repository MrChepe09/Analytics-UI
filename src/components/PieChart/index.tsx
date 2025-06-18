import { ResponsiveContainer, Pie, Cell, Tooltip, PieChart as RechartsPieChart } from "recharts";

const PieChart = () => {
    const pieChartData = [
        { name: 'Desktop', value: 400, color: '#3b82f6' },
        { name: 'Mobile', value: 300, color: '#8b5cf6' },
        { name: 'Tablet', value: 200, color: '#10b981' },
        { name: 'Other', value: 100, color: '#f59e0b' },
      ];
    return (
        <ResponsiveContainer width="100%" height="100%">
            <RechartsPieChart>
                <Pie
                data={pieChartData}
                cx="50%"
                cy="50%"
                outerRadius={80}
                fill="#8884d8"
                dataKey="value"
                label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                >
                {pieChartData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                ))}
                </Pie>
                <Tooltip 
                contentStyle={{ 
                    backgroundColor: 'white', 
                    border: '1px solid #374151',
                    borderRadius: '8px',
                    color: '#fff'
                }} 
                />
            </RechartsPieChart>
        </ResponsiveContainer>
    );
}

export default PieChart;