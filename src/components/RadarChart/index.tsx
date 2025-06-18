import { data } from "react-router-dom";
import { ResponsiveContainer, PolarGrid, PolarAngleAxis, PolarRadiusAxis, Tooltip, Radar, RadarChart as RechartsRadarChart } from "recharts";

const RadarChart = () => {
    // Sample data for the chart
  const data = [
    {
      subject: 'Math',
      A: 120,
      B: 110,
    },
    {
      subject: 'Science',
      A: 98,
      B: 130,
    },
    {
      subject: 'English',
      A: 86,
      B: 130,
    },
    {
      subject: 'History',
      A: 99,
      B: 100,
    },
    {
      subject: 'Art',
      A: 85,
      B: 90,
    },
  ];
    return (
        <ResponsiveContainer width="100%" height="100%">
            <RechartsRadarChart cx="50%" cy="50%" outerRadius="80%" data={data}>
                <PolarGrid stroke="#374151" />
                <PolarAngleAxis dataKey="subject" stroke="#9ca3af" />
                <PolarRadiusAxis stroke="#9ca3af" />
                <Radar name="User A" dataKey="A" stroke="#3b82f6" fill="#3b82f6" fillOpacity={0.6} />
                <Radar name="User B" dataKey="B" stroke="#8b5cf6" fill="#8b5cf6" fillOpacity={0.6} />
                <Tooltip 
                contentStyle={{ 
                    backgroundColor: '#1f2937', 
                    border: '1px solid #374151',
                    borderRadius: '8px',
                    color: '#fff'
                }} 
                />
            </RechartsRadarChart>
        </ResponsiveContainer>
    );
}

export default RadarChart;