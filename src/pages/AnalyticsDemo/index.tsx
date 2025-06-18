import React, { useState } from 'react';
import { LineChart as LineChartIcon, BarChart3, PieChart as PieChart3, TrendingUp, Activity, Grid3X3, Square, Maximize2, Minimize2, Menu, X, ArrowLeft, Code, Eye, Copy, Check } from 'lucide-react';
import { Link } from 'react-router-dom';
import LineChart from '@/components/LineChart';
import BarChart from '@/components/BarChart';
import PieChart from '@/components/PieChart';
import AreaChart from '@/components/AreaChart';
import RadarChart from '@/components/RadarChart';
import Footer from '@/components/Footer';
import RadialChart from '@/components/RadialChart';

export default function AnalyticsPage() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [gridLayout, setGridLayout] = useState('3x3'); // '3x3', '2x2', '1x1'
  const [fullscreenChart, setFullscreenChart] = useState(null);
  const [viewMode, setViewMode] = useState('ui'); // 'ui' or 'code'
  const [copiedCode, setCopiedCode] = useState(false);

  const chartComponents = [
    {
      id: 'line-chart',
      title: 'Revenue Trends',
      subtitle: 'Monthly revenue comparison',
      icon: TrendingUp,
      component: <LineChart />
    },
    {
      id: 'bar-chart',
      title: 'Product Performance',
      subtitle: 'Sales vs Revenue by product',
      icon: BarChart3,
      component: <BarChart />
    },
    {
      id: 'pie-chart',
      title: 'Traffic Sources',
      subtitle: 'Visitor distribution by device',
      icon: PieChart3,
      component: <PieChart />
    },
    {
      id: 'area-chart',
      title: 'User Engagement',
      subtitle: 'Weekly user activity',
      icon: Activity,
      component: <AreaChart />
    },
    {
      id: 'radar-chart',
      title: 'System Metrics',
      subtitle: 'Performance comparison',
      icon: LineChartIcon,
      component: <RadarChart />
    },
    {
      id: 'metrics-card',
      title: 'Key Metrics',
      subtitle: 'Performance indicators',
      icon: TrendingUp,
      component: <RadialChart />
    }
  ];

  const getGridClasses = () => {
    switch (gridLayout) {
      case '1x1':
        return 'grid-cols-1';
      case '2x2':
        return 'grid-cols-1 md:grid-cols-2';
      case '3x3':
      default:
        return 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3';
    }
  };

  const getCardHeight = () => {
    switch (gridLayout) {
      case '1x1':
        return 'h-96 md:h-[500px]';
      case '2x2':
        return 'h-80 md:h-96';
      case '3x3':
      default:
        return 'h-72 md:h-80';
    }
  };

  // Code for the main section
  const mainSectionCode = `
import { useState } from "react";
import { data, Link } from "react-router-dom";
import { ArrowLeft, Maximize2, TrendingUp, BarChart3, PieChart as PieChart3, Activity, LineChart as LineChartIcon } from "lucide-react";
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart";
import { ResponsiveContainer, CartesianGrid, XAxis, YAxis, Tooltip, Line, Bar, Pie, Cell, Area, PolarGrid, PolarAngleAxis, Radar, RadarChart as RechartsRadarChart, PolarRadiusAxis, RadialBarChart, Label, RadialBar, PieChart as RechartsPieChart, BarChart as RechartsBarChart, AreaChart as RechartsAreaChart, LineChart as RechartsLineChart } from "recharts";

export default function AnalyticsDashboard() {
  const [gridLayout, setGridLayout] = useState("3x3");
  const [fullscreenChart, setFullscreenChart] = useState(null);

  const lineChartData = [
    { name: 'Jan', value: 400, growth: 240 },
    { name: 'Feb', value: 300, growth: 139 },
    { name: 'Mar', value: 200, growth: 980 },
    { name: 'Apr', value: 278, growth: 390 },
    { name: 'May', value: 189, growth: 480 },
    { name: 'Jun', value: 239, growth: 380 },
  ];

  const barChartData = [
    { name: 'Mon', revenue: 2400 },
    { name: 'Tue', revenue: 1398 },
    { name: 'Wed', revenue: 9800 },
    { name: 'Thu', revenue: 3908 },
    { name: 'Fri', revenue: 4800 },
    { name: 'Sat', revenue: 3800 },
    { name: 'Sun', revenue: 4300 },
  ];

  const pieChartData = [
    { name: 'Desktop', value: 400, color: '#3b82f6' },
    { name: 'Mobile', value: 300, color: '#8b5cf6' },
    { name: 'Tablet', value: 200, color: '#10b981' },
    { name: 'Other', value: 100, color: '#f59e0b' },
  ];

  const areaChartData = [
    { name: 'Jan', users: 4000, sessions: 2400 },
    { name: 'Feb', users: 3000, sessions: 1398 },
    { name: 'Mar', users: 2000, sessions: 9800 },
    { name: 'Apr', users: 2780, sessions: 3908 },
    { name: 'May', users: 1890, sessions: 4800 },
    { name: 'Jun', users: 2390, sessions: 3800 },
  ];

  const radarChartData = [
    { subject: 'Math', A: 120, B: 110 },
    { subject: 'Science', A: 98, B: 130 },
    { subject: 'English', A: 86, B: 130 },
    { subject: 'History', A: 99, B: 100 },
    { subject: 'Art', A: 85, B: 90 },
  ];

  const chartComponents = [
    {
      id: 'line-chart',
      title: 'Revenue Trends',
      subtitle: 'Monthly revenue comparison',
      icon: TrendingUp,
      component: (
        <ResponsiveContainer width="100%" height="100%">
          <RechartsLineChart data={lineChartData}>
            <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
            <XAxis dataKey="name" stroke="#9ca3af" />
            <YAxis stroke="#9ca3af" />
            <Tooltip 
              contentStyle={{ backgroundColor: '#1f2937', border: '1px solid #374151', borderRadius: '8px', color: '#fff' }} 
            />
            <Line type="monotone" dataKey="value" stroke="#3b82f6" strokeWidth={3} dot={{ fill: '#3b82f6', strokeWidth: 2, r: 4 }} />
            <Line type="monotone" dataKey="growth" stroke="#8b5cf6" strokeWidth={3} dot={{ fill: '#8b5cf6', strokeWidth: 2, r: 4 }} />
          </RechartsLineChart>
        </ResponsiveContainer>
      )
    },
    {
      id: 'bar-chart',
      title: 'Product Performance',
      subtitle: 'Sales vs Revenue by product',
      icon: BarChart3,
      component: (
        <ResponsiveContainer width="100%" height="100%">
          <RechartsBarChart data={barChartData}>
            <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
            <XAxis dataKey="name" stroke="#9ca3af" />
            <YAxis stroke="#9ca3af" />
            <Tooltip
              cursor={{ fill: '#0000001a' }}
              contentStyle={{ backgroundColor: '#1f2937', border: '1px solid #374151', borderRadius: '8px', color: '#fff' }} 
            />
            <Bar dataKey="revenue" fill="#8b5cf6" radius={[4, 4, 0, 0]} />
          </RechartsBarChart>
        </ResponsiveContainer>
      )
    },
    {
      id: 'pie-chart',
      title: 'Traffic Sources',
      subtitle: 'Visitor distribution by device',
      icon: PieChart3,
      component: (
        <ResponsiveContainer width="100%" height="100%">
          <RechartsPieChart>
            <Pie
              data={pieChartData}
              cx="50%"
              cy="50%"
              outerRadius={80}
              fill="#8884d8"
              dataKey="value"
              label={({ name, percent }) => \`\${name} \${(percent * 100).toFixed(0)}%\`}
            >
              {pieChartData.map((entry, index) => (
                <Cell key={\`cell-\${index}\`} fill={entry.color} />
              ))}
            </Pie>
            <Tooltip 
              contentStyle={{ backgroundColor: 'white', border: '1px solid #374151', borderRadius: '8px', color: '#fff' }} 
            />
          </RechartsPieChart>
        </ResponsiveContainer>
      )
    },
    {
      id: 'area-chart',
      title: 'User Engagement',
      subtitle: 'Weekly user activity',
      icon: Activity,
      component: (
        <ResponsiveContainer width="100%" height="100%">
          <RechartsAreaChart data={areaChartData}>
            <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
            <XAxis dataKey="name" stroke="#9ca3af" />
            <YAxis stroke="#9ca3af" />
            <Tooltip 
              contentStyle={{ backgroundColor: '#1f2937', border: '1px solid #374151', borderRadius: '8px', color: '#fff' }} 
            />
            <Area type="monotone" dataKey="users" stackId="1" stroke="#3b82f6" fill="#3b82f6" fillOpacity={0.6} />
            <Area type="monotone" dataKey="sessions" stackId="1" stroke="#8b5cf6" fill="#8b5cf6" fillOpacity={0.6} />
          </RechartsAreaChart>
        </ResponsiveContainer>
      )
    },
    {
      id: 'radar-chart',
      title: 'System Metrics',
      subtitle: 'Performance comparison',
      icon: LineChartIcon,
      component: (
        <ResponsiveContainer width="100%" height="100%">
          <RechartsRadarChart cx="50%" cy="50%" outerRadius="80%" data={radarChartData}>
            <PolarGrid stroke="#374151" />
            <PolarAngleAxis dataKey="subject" stroke="#9ca3af" />
            <PolarRadiusAxis stroke="#9ca3af" />
            <Radar name="User A" dataKey="A" stroke="#3b82f6" fill="#3b82f6" fillOpacity={0.6} />
            <Radar name="User B" dataKey="B" stroke="#8b5cf6" fill="#8b5cf6" fillOpacity={0.6} />
            <Tooltip 
              contentStyle={{ backgroundColor: '#1f2937', border: '1px solid #374151', borderRadius: '8px', color: '#fff' }} 
            />
          </RechartsRadarChart>
        </ResponsiveContainer>
      )
    },
    {
      id: 'metrics-card',
      title: 'Key Metrics',
      subtitle: 'Performance indicators',
      icon: TrendingUp,
      component: (
        <ChartContainer config={{ desktop: { label: "Desktop", color: "#8b5cf6" } }} className="mx-auto flex items-center justify-center aspect-square w-full max-w-[30vh]">
          <RadialBarChart data={[{ month: "january", desktop: 1260, mobile: 570 }]} endAngle={180} innerRadius={80} outerRadius={130}>
            <ChartTooltip cursor={false} content={<ChartTooltipContent hideLabel />} />
            <PolarRadiusAxis tick={false} tickLine={false} axisLine={false}>
              <Label content={({ viewBox }) => {
                if (viewBox && "cx" in viewBox && "cy" in viewBox) {
                  const total = 1260 + 570;
                  return (
                    <text x={viewBox.cx} y={viewBox.cy} fill="white" textAnchor="middle">
                      <tspan x={viewBox.cx} y={(viewBox.cy || 0) - 16} className="fill-foreground text-2xl font-bold">{total.toLocaleString()}</tspan>
                      <tspan x={viewBox.cx} y={(viewBox.cy || 0) + 4} className="fill-muted-foreground">Visitors</tspan>
                    </text>
                  );
                }
                return null;
              }} />
            </PolarRadiusAxis>
            <RadialBar dataKey="desktop" stackId="a" cornerRadius={5} fill="var(--color-desktop)" className="stroke-transparent stroke-2" />
          </RadialBarChart>
        </ChartContainer>
      )
    }
  ];

  const getGridClasses = () => {
    switch (gridLayout) {
      case '1x1':
        return 'grid-cols-1';
      case '2x2':
        return 'grid-cols-1 md:grid-cols-2';
      case '3x3':
      default:
        return 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3';
    }
  };

  const getCardHeight = () => {
    switch (gridLayout) {
      case '1x1':
        return 'h-96 md:h-[500px]';
      case '2x2':
        return 'h-80 md:h-96';
      case '3x3':
      default:
        return 'h-72 md:h-80';
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 p-4">
      <div className="relative">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute -top-40 -right-32 w-80 h-80 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-10 animate-pulse"></div>
          <div className="absolute -bottom-40 -left-32 w-80 h-80 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-10 animate-pulse"></div>
        </div>

        <main className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="mb-8">
            <Link to="/" className="inline-flex items-center space-x-2 text-white/80 hover:text-white transition-colors duration-200 mb-8 group">
              <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform duration-200" />
              <span>Back to Home</span>
            </Link>

            <div className="flex items-center justify-between">
              <div>
                <h1 className="text-3xl sm:text-4xl font-bold text-white mb-2">Analytics Dashboard</h1>
                <p className="text-white/70 text-lg">Real-time insights and performance metrics</p>
              </div>
              <div className="hidden sm:block">
                <div className="inline-flex items-center px-4 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white/90 text-sm font-medium">
                  <span className="w-2 h-2 bg-green-400 rounded-full mr-2 animate-pulse"></span>
                  Live Data • Updated 2 min ago
                </div>
              </div>
            </div>
          </div>

          <div className={\`grid \${getGridClasses()} gap-6\`}>
            {chartComponents.map((chart) => {
              const Icon = chart.icon;
              return (
                <div key={chart.id} className={\`\${getCardHeight()} bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20 hover:bg-white/15 transition-all duration-300 group relative overflow-hidden\`}>
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center space-x-3">
                      <div className="p-2 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg group-hover:scale-110 transition-transform duration-200">
                        <Icon className="w-5 h-5 text-white" />
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-white">{chart.title}</h3>
                        <p className="text-white/60 text-sm">{chart.subtitle}</p>
                      </div>
                    </div>
                    <button onClick={() => setFullscreenChart(chart.id)} className="p-2 text-white/60 hover:text-white hover:bg-white/10 rounded-lg transition-all duration-200 opacity-0 group-hover:opacity-100" title="Expand">
                      <Maximize2 className="w-4 h-4" />
                    </button>
                  </div>
                  <div className="h-[calc(100%-80px)] relative">
                    {chart.component}
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
                </div>
              );
            })}
          </div>

          <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="bg-white/10 backdrop-blur-md rounded-xl p-6 border border-white/20 text-center">
              <div className="text-2xl font-bold text-white mb-1">6</div>
              <div className="text-white/60 text-sm">Active Charts</div>
            </div>
            <div className="bg-white/10 backdrop-blur-md rounded-xl p-6 border border-white/20 text-center">
              <div className="text-2xl font-bold text-white mb-1">Real-time</div>
              <div className="text-white/60 text-sm">Data Updates</div>
            </div>
            <div className="bg-white/10 backdrop-blur-md rounded-xl p-6 border border-white/20 text-center">
              <div className="text-2xl font-bold text-white mb-1">100%</div>
              <div className="text-white/60 text-sm">Responsive</div>
            </div>
            <div className="bg-white/10 backdrop-blur-md rounded-xl p-6 border border-white/20 text-center">
              <div className="text-2xl font-bold text-white mb-1">Customizable</div>
              <div className="text-white/60 text-sm">Layouts</div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}`;

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(mainSectionCode);
      setCopiedCode(true);
      setTimeout(() => setCopiedCode(false), 2000);
    } catch (err) {
      console.error('Failed to copy code:', err);
    }
  };

  if (fullscreenChart) {
    const chart: any = chartComponents.find(c => c.id === fullscreenChart);
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 p-4">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center justify-between mb-6">
            <button
              onClick={() => setFullscreenChart(null)}
              className="flex items-center space-x-2 text-white/80 hover:text-white transition-colors"
            >
              <ArrowLeft className="w-5 h-5" />
              <span>Back to Dashboard</span>
            </button>
            <div className="text-center">
              <h1 className="text-2xl font-bold text-white">{chart.title}</h1>
              <p className="text-white/70">{chart.subtitle}</p>
            </div>
            <div className="w-24"></div>
          </div>
          <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20 h-[calc(90vh-200px)]">
            {chart.component}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Navigation */}
      <nav className="bg-white/10 py-2 backdrop-blur-md border-b border-white/20 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <div className="flex items-center space-x-3">
              <div className="p-2 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg">
                <BarChart3 className="w-6 h-6 text-white" />
              </div>
              <span className="text-xl font-bold text-white"><Link to="/">Analytics Dashboard</Link></span>
            </div>

            {/* Desktop Layout Controls */}
            <div className="hidden md:flex items-center space-x-4">
              <div className="flex items-center space-x-2 bg-white/10 backdrop-blur-md rounded-lg p-1 border border-white/20">
                <button
                  onClick={() => setGridLayout('3x3')}
                  className={`p-2 rounded-md transition-colors ${
                    gridLayout === '3x3' 
                      ? 'bg-white/20 text-white' 
                      : 'text-white/70 hover:text-white'
                  }`}
                  title="3x3 Grid"
                >
                  <Grid3X3 className="w-4 h-4" />
                </button>
                <button
                  onClick={() => setGridLayout('2x2')}
                  className={`p-2 rounded-md transition-colors ${
                    gridLayout === '2x2' 
                      ? 'bg-white/20 text-white' 
                      : 'text-white/70 hover:text-white'
                  }`}
                  title="2x2 Grid"
                >
                  <Square className="w-4 h-4" />
                </button>
                <button
                  onClick={() => setGridLayout('1x1')}
                  className={`p-2 rounded-md transition-colors ${
                    gridLayout === '1x1' 
                      ? 'bg-white/20 text-white' 
                      : 'text-white/70 hover:text-white'
                  }`}
                  title="Single Column"
                >
                  <Maximize2 className="w-4 h-4" />
                </button>
              </div>
              <button className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-6 py-2 rounded-lg font-medium hover:from-blue-600 hover:to-purple-700 transition-all duration-200 shadow-lg hover:shadow-xl">
                Export Data
              </button>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="text-white p-2"
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>

          {/* Mobile Navigation */}
          {mobileMenuOpen && (
            <div className="md:hidden bg-white/10 backdrop-blur-md border-t border-white/20">
              <div className="px-2 pt-2 pb-3 space-y-3">
                <div className="text-white/80 text-sm font-medium px-3">Layout Options</div>
                <div className="flex space-x-2 px-3">
                  <button
                    onClick={() => {
                      setGridLayout('3x3');
                      setMobileMenuOpen(false);
                    }}
                    className={`flex-1 p-2 rounded-md transition-colors ${
                      gridLayout === '3x3' 
                        ? 'bg-white/20 text-white' 
                        : 'text-white/70'
                    }`}
                  >
                    3x3
                  </button>
                  <button
                    onClick={() => {
                      setGridLayout('2x2');
                      setMobileMenuOpen(false);
                    }}
                    className={`flex-1 p-2 rounded-md transition-colors ${
                      gridLayout === '2x2' 
                        ? 'bg-white/20 text-white' 
                        : 'text-white/70'
                    }`}
                  >
                    2x2
                  </button>
                  <button
                    onClick={() => {
                      setGridLayout('1x1');
                      setMobileMenuOpen(false);
                    }}
                    className={`flex-1 p-2 rounded-md transition-colors ${
                      gridLayout === '1x1' 
                        ? 'bg-white/20 text-white' 
                        : 'text-white/70'
                    }`}
                  >
                    1x1
                  </button>
                </div>
                <button 
                  className="w-full mt-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white px-6 py-2 rounded-lg font-medium hover:from-blue-600 hover:to-purple-700 transition-all duration-200"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Export Data
                </button>
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-32 w-80 h-80 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-10 animate-pulse"></div>
        <div className="absolute -bottom-40 -left-32 w-80 h-80 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-10 animate-pulse"></div>
      </div>

      {/* Main Content */}
      <main className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="mb-8">
          {/* Back Button */}
          <button className="flex items-center space-x-2 text-white/80 hover:text-white transition-colors duration-200 mb-8 group">
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform duration-200" />
            <span><Link to="/">Back to Home</Link></span>
          </button>
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl sm:text-4xl font-bold text-white mb-2">
                Analytics Dashboard
              </h1>
              <p className="text-white/70 text-lg">
                Real-time insights and performance metrics
              </p>
            </div>
            <div className="hidden sm:block">
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white/90 text-sm font-medium">
                <span className="w-2 h-2 bg-green-400 rounded-full mr-2 animate-pulse"></span>
                Live Data • Updated 2 min ago
              </div>
            </div>
          </div>
        </div>

        {/* UI/Code Toggle */}
        <div className="flex items-center justify-center mb-8">
          <div className="inline-flex items-center bg-white/10 backdrop-blur-md rounded-lg p-1 border border-white/20">
            <button
              onClick={() => setViewMode('ui')}
              className={`flex items-center space-x-2 px-4 py-2 rounded-md transition-colors ${
                viewMode === 'ui' 
                  ? 'bg-white/20 text-white' 
                  : 'text-white/70 hover:text-white'
              }`}
            >
              <Eye className="w-4 h-4" />
              <span>UI View</span>
            </button>
            <button
              onClick={() => setViewMode('code')}
              className={`flex items-center space-x-2 px-4 py-2 rounded-md transition-colors ${
                viewMode === 'code' 
                  ? 'bg-white/20 text-white' 
                  : 'text-white/70 hover:text-white'
              }`}
            >
              <Code className="w-4 h-4" />
              <span>Code View</span>
            </button>
          </div>
        </div>

        {/* Content based on view mode */}
        {viewMode === 'ui' ? (
          <>
            {/* Charts Grid */}
            <div className={`grid ${getGridClasses()} gap-6`}>
              {chartComponents.map((chart: any) => {
                const Icon = chart.icon;
                return (
                  <div
                    key={chart.id}
                    className={`${getCardHeight()} bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20 hover:bg-white/15 transition-all duration-300 group relative overflow-hidden`}
                  >
                    {/* Card Header */}
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center space-x-3">
                        <div className="p-2 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg group-hover:scale-110 transition-transform duration-200">
                          <Icon className="w-5 h-5 text-white" />
                        </div>
                        <div>
                          <h3 className="text-lg font-semibold text-white">{chart.title}</h3>
                          <p className="text-white/60 text-sm">{chart.subtitle}</p>
                        </div>
                      </div>
                      <button
                        onClick={() => setFullscreenChart(chart.id)}
                        className="p-2 text-white/60 hover:text-white hover:bg-white/10 rounded-lg transition-all duration-200 opacity-0 group-hover:opacity-100"
                        title="Expand"
                      >
                        <Maximize2 className="w-4 h-4" />
                      </button>
                    </div>

                    {/* Chart Content */}
                    <div className="h-[calc(100%-80px)] relative">
                      {chart.component}
                    </div>

                    {/* Hover Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
                  </div>
                );
              })}
            </div>

            {/* Bottom Stats */}
            <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-6">
              <div className="bg-white/10 backdrop-blur-md rounded-xl p-6 border border-white/20 text-center">
                <div className="text-2xl font-bold text-white mb-1">6</div>
                <div className="text-white/60 text-sm">Active Charts</div>
              </div>
              <div className="bg-white/10 backdrop-blur-md rounded-xl p-6 border border-white/20 text-center">
                <div className="text-2xl font-bold text-white mb-1">Real-time</div>
                <div className="text-white/60 text-sm">Data Updates</div>
              </div>
              <div className="bg-white/10 backdrop-blur-md rounded-xl p-6 border border-white/20 text-center">
                <div className="text-2xl font-bold text-white mb-1">100%</div>
                <div className="text-white/60 text-sm">Responsive</div>
              </div>
              <div className="bg-white/10 backdrop-blur-md rounded-xl p-6 border border-white/20 text-center">
                <div className="text-2xl font-bold text-white mb-1">Customizable</div>
                <div className="text-white/60 text-sm">Layouts</div>
              </div>
            </div>
          </>
        ) : (
          /* Code View */
          <div className="bg-gray-900 rounded-2xl p-6 border border-white/20 relative">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-white">Main Section Code</h3>
              <button
                onClick={copyToClipboard}
                className="flex items-center space-x-2 px-4 py-2 bg-white/10 hover:bg-white/20 rounded-lg transition-colors text-white/80 hover:text-white"
              >
                {copiedCode ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
                <span>{copiedCode ? 'Copied!' : 'Copy Code'}</span>
              </button>
            </div>
            <div className="relative">
              <pre className="bg-gray-900/80 text-gray-300 p-6 rounded-xl overflow-x-auto text-sm leading-relaxed border border-white/10">
                <code>{mainSectionCode}</code>
              </pre>
            </div>
          </div>
        )}
      </main>
      <Footer />
    </div>
  );
}
