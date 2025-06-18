import React, { useState } from 'react';
import { BarChart3, LineChart, PieChart, TrendingUp, Activity, Github, Twitter, Mail, Menu, X, Copy, Check, Code2, Eye, ArrowLeft } from 'lucide-react';
import { LineChart as RechartsLineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, BarChart as RechartsBarChart, Bar, PieChart as RechartsPieChart, Cell, Pie, Area } from 'recharts';
import { Link } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import AreaChart from '@/components/AreaChart';

export default function AreaChartPage() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [copiedCode, setCopiedCode] = useState(false);
  const [activeView, setActiveView] = useState('preview'); // 'preview' or 'code'

  // Sample data for the chart
  const areaChartData = [
    { name: 'Jan', users: 4000, sessions: 2400 },
    { name: 'Feb', users: 3000, sessions: 1398 },
    { name: 'Mar', users: 2000, sessions: 9800 },
    { name: 'Apr', users: 2780, sessions: 3908 },
    { name: 'May', users: 1890, sessions: 4800 },
    { name: 'Jun', users: 2390, sessions: 3800 },
  ];

  const chartCode = `import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const data = [
  { name: 'Jan', users: 4000, sessions: 2400 },
  { name: 'Feb', users: 3000, sessions: 1398 },
  { name: 'Mar', users: 2000, sessions: 9800 },
  { name: 'Apr', users: 2780, sessions: 3908 },
  { name: 'May', users: 1890, sessions: 4800 },
  { name: 'Jun', users: 2390, sessions: 3800 },
];

export function AreaChartComponent() {
  return (
    <ResponsiveContainer width="100%" height="100%">
      <AreaChart data={data}>
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
      </AreaChart>
    </ResponsiveContainer>
  );
}`;

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(chartCode);
      setCopiedCode(true);
      setTimeout(() => setCopiedCode(false), 2000);
    } catch (err) {
      console.error('Failed to copy code:', err);
    }
  };

  const chartTypes = [
    { name: 'Line Charts', icon: TrendingUp },
    { name: 'Bar Charts', icon: BarChart3 },
    { name: 'Pie Charts', icon: PieChart },
    { name: 'Area Charts', icon: Activity },
    // { name: 'Radar Charts', icon: LineChart },
    // { name: 'Radial Charts', icon: LineChart },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Navigation */}
      <Navbar />

      {/* Main Content */}
      <main className="relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          {/* Back Button */}
          <button className="flex items-center space-x-2 text-white/80 hover:text-white transition-colors duration-200 mb-8 group">
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform duration-200" />
            <span><Link to="/charts/explore">Back to Components</Link></span>
          </button>

          {/* Chart Header */}
          <div className="mb-8">
            <div className="flex items-center space-x-4 mb-4">
              <div className="p-3 bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl">
                <TrendingUp className="w-8 h-8 text-white" />
              </div>
              <div>
                <h1 className="text-3xl sm:text-4xl font-bold text-white mb-2">Area Chart</h1>
                <p className="text-lg text-white/80">Perfect for showing trends over time</p>
              </div>
            </div>
            <p className="text-white/70 max-w-3xl leading-relaxed">
              Excellent for showing cumulative totals over time. Perfect for displaying multiple data series with emphasis on volume and trends.
            </p>
          </div>

          {/* Chart Container */}
          <div className="bg-white/5 backdrop-blur-md rounded-2xl border border-white/10 overflow-hidden">
            {/* Controls */}
            <div className="flex items-center justify-between p-4 border-b border-white/10">
              <div className="flex items-center space-x-1">
                <button
                  onClick={() => setActiveView('preview')}
                  className={`flex items-center space-x-2 px-4 py-2 rounded-lg font-medium transition-all duration-200 ${
                    activeView === 'preview'
                      ? 'bg-white/10 text-white'
                      : 'text-white/60 hover:text-white hover:bg-white/5'
                  }`}
                >
                  <Eye className="w-4 h-4" />
                  <span>Preview</span>
                </button>
                <button
                  onClick={() => setActiveView('code')}
                  className={`flex items-center space-x-2 px-4 py-2 rounded-lg font-medium transition-all duration-200 ${
                    activeView === 'code'
                      ? 'bg-white/10 text-white'
                      : 'text-white/60 hover:text-white hover:bg-white/5'
                  }`}
                >
                  <Code2 className="w-4 h-4" />
                  <span>Code</span>
                </button>
              </div>
              
              {activeView === 'code' && (
                <button
                  onClick={copyToClipboard}
                  className="flex items-center space-x-2 px-4 py-2 bg-white/10 hover:bg-white/20 text-white rounded-lg font-medium transition-all duration-200 border border-white/20"
                >
                  {copiedCode ? (
                    <>
                      <Check className="w-4 h-4 text-green-400" />
                      <span>Copied!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-4 h-4" />
                      <span>Copy Code</span>
                    </>
                  )}
                </button>
              )}
            </div>

            {/* Content */}
            <div className="p-6">
              {activeView === 'preview' ? (
                <div className="w-full h-80 bg-gray-900/50 rounded-xl p-6 border border-white/10">
                  <AreaChart />
                </div>
              ) : (
                <div className="relative">
                  <pre className="bg-gray-900/80 text-gray-300 p-6 rounded-xl overflow-x-auto text-sm leading-relaxed border border-white/10">
                    <code>{chartCode}</code>
                  </pre>
                </div>
              )}
            </div>
          </div>

          {/* Features */}
          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white/5 backdrop-blur-md rounded-xl p-6 border border-white/10">
              <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-lg flex items-center justify-center mb-4">
                <TrendingUp className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Responsive Design</h3>
              <p className="text-white/70 text-sm">Automatically adapts to any screen size and container width for perfect mobile experience.</p>
            </div>
            
            <div className="bg-white/5 backdrop-blur-md rounded-xl p-6 border border-white/10">
              <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center mb-4">
                <Activity className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Multiple Series</h3>
              <p className="text-white/70 text-sm">Support for multiple data series with different colors and styling options.</p>
            </div>
            
            <div className="bg-white/5 backdrop-blur-md rounded-xl p-6 border border-white/10">
              <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-teal-500 rounded-lg flex items-center justify-center mb-4">
                <BarChart3 className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Customizable</h3>
              <p className="text-white/70 text-sm">Easy to customize colors, styling, tooltips, and animations to match your brand.</p>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}