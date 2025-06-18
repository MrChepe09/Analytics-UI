import React, { useState } from 'react';
import { BarChart3, LineChart, PieChart, TrendingUp, Activity, Github, Twitter, Mail, Menu, X, Search, Filter, ArrowRight, Zap, Target, Layers, BarChart2, CircleDot, Radio, ChartCandlestick } from 'lucide-react';
import { Link, Navigate, useNavigate } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export default function ComponentsPage() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const navigate = useNavigate()

  const chartTypes = [
    { name: 'Explore', icon: LineChart, url: '/charts/explore' },
    { name: 'Line Charts', icon: TrendingUp, url: '/charts/linechart' },
    { name: 'Bar Charts', icon: BarChart3, url: '/charts/barchart' },
    { name: 'Pie Charts', icon: PieChart, url: '/charts/piechart' },
    { name: 'Area Charts', icon: Activity, url: '/charts/areachart' },
  ];

  const categories = ['All', 'Trending', 'Comparison', 'Distribution', 'Composition', 'Relationship'];

  const components = [
    {
      id: 'line-chart',
      title: 'Line Chart',
      description: 'Perfect for showing trends over time with smooth animations and multiple data series support.',
      category: 'Trending',
      icon: TrendingUp,
      difficulty: 'Easy',
      isNew: false,
      isPopular: true,
      color: 'from-blue-500 to-cyan-500',
      url: '/charts/linechart'
    },
    {
      id: 'bar-chart',
      title: 'Bar Chart',
      description: 'Ideal for comparing different categories with customizable colors and responsive design.',
      category: 'Comparison',
      icon: BarChart3,
      difficulty: 'Easy',
      isNew: false,
      isPopular: true,
      color: 'from-purple-500 to-pink-500',
      url: '/charts/barchart'
    },
    {
      id: 'pie-chart',
      title: 'Pie Chart',
      description: 'Great for showing proportions and percentages with interactive labels and tooltips.',
      category: 'Distribution',
      icon: PieChart,
      difficulty: 'Medium',
      isNew: false,
      isPopular: false,
      color: 'from-green-500 to-teal-500',
      url: '/charts/piechart'
    },
    {
      id: 'area-chart',
      title: 'Area Chart',
      description: 'Excellent for showing cumulative totals over time with filled areas and gradients.',
      category: 'Trending',
      icon: Activity,
      difficulty: 'Easy',
      isNew: true,
      isPopular: false,
      color: 'from-orange-500 to-red-500',
      url: '/charts/areachart'
    },
    {
      id: 'radar-chart',
      title: 'Radar Chart',
      description: 'Multi-dimensional data visualization perfect for comparing multiple metrics.',
      category: 'Comparison',
      icon: Radio,
      difficulty: 'Hard',
      isNew: true,
      isPopular: false,
      color: 'from-violet-500 to-purple-500',
      url: '/charts/radarchart'
    },
    {
        id: 'radial-chart',
        title: 'Radial Chart',
        description: 'Multi-dimensional data visualization perfect for comparing multiple metrics.',
        category: 'Comparison',
        icon: ChartCandlestick,
        difficulty: 'Hard',
        isNew: true,
        isPopular: false,
        color: 'from-violet-500 to-purple-500',
        url: '/charts/radialchart'
      }
  ];

  const filteredComponents = components.filter(component => {
    const matchesSearch = component.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         component.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'All' || component.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const getDifficultyColor = (difficulty: any) => {
    switch (difficulty) {
      case 'Easy': return 'text-green-400 bg-green-400/10';
      case 'Medium': return 'text-yellow-400 bg-yellow-400/10';
      case 'Hard': return 'text-red-400 bg-red-400/10';
      default: return 'text-gray-400 bg-gray-400/10';
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Navigation */}
      <Navbar />

      {/* Main Content */}
      <main className="relative overflow-hidden">
        {/* Background decorative elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-32 w-80 h-80 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
          <div className="absolute -bottom-40 -left-32 w-80 h-80 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
              Chart{' '}
              <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                Components
              </span>
            </h1>
            <p className="text-xl text-white/80 mb-8 max-w-3xl mx-auto">
              Discover our comprehensive collection of beautiful, responsive chart components. 
              Each component is crafted with attention to detail and optimized for performance.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-2xl mx-auto mb-8">
              <div className="bg-white/10 backdrop-blur-md rounded-lg p-4 border border-white/20">
                <div className="text-2xl font-bold text-white">{components.length}</div>
                <div className="text-white/60 text-sm">Components</div>
              </div>
              <div className="bg-white/10 backdrop-blur-md rounded-lg p-4 border border-white/20">
                <div className="text-2xl font-bold text-white">{categories.length - 1}</div>
                <div className="text-white/60 text-sm">Categories</div>
              </div>
              <div className="bg-white/10 backdrop-blur-md rounded-lg p-4 border border-white/20">
                <div className="text-2xl font-bold text-white">{components.filter(c => c.isNew).length}</div>
                <div className="text-white/60 text-sm">New</div>
              </div>
              <div className="bg-white/10 backdrop-blur-md rounded-lg p-4 border border-white/20">
                <div className="text-2xl font-bold text-white">{components.filter(c => c.isPopular).length}</div>
                <div className="text-white/60 text-sm">Popular</div>
              </div>
            </div>
          </div>

          {/* Search and Filter */}
          <div className="flex flex-col md:flex-row gap-4 mb-8">
            {/* Search */}
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-white/40" />
              <input
                type="text"
                placeholder="Search components..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 bg-white/10 backdrop-blur-md border border-white/20 rounded-lg text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>

            {/* Category Filter */}
            <div className="relative">
              <Filter className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-white/40" />
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="pl-10 pr-8 py-3 bg-white/10 backdrop-blur-md border border-white/20 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent appearance-none cursor-pointer min-w-[150px]"
              >
                {categories.map(category => (
                  <option key={category} value={category} className="bg-gray-900 text-white">
                    {category}
                  </option>
                ))}
              </select>
            </div>
          </div>

          {/* Components Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredComponents.map((component) => {
              const Icon = component.icon;
              return (
                <div
                  key={component.id}
                  className="group bg-white/5 backdrop-blur-md rounded-xl border border-white/10 overflow-hidden hover:bg-white/10 hover:border-white/20 transition-all duration-300 cursor-pointer hover:scale-105"
                  onClick={() => {
                    navigate(component.url);
                    // Navigate to component page - replace with your routing logic
                    console.log(`Navigate to ${component.id}`);
                  }}
                >
                  {/* Card Header */}
                  <div className="p-6 pb-4">
                    <div className="flex items-start justify-between mb-4">
                      <div className={`p-3 bg-gradient-to-r ${component.color} rounded-xl`}>
                        <Icon className="w-8 h-8 text-white" />
                      </div>
                      <div className="flex items-center space-x-2">
                        {component.isNew && (
                          <span className="px-2 py-1 bg-green-500/20 text-green-400 text-xs font-medium rounded-full border border-green-500/30">
                            New
                          </span>
                        )}
                        {component.isPopular && (
                          <span className="px-2 py-1 bg-orange-500/20 text-orange-400 text-xs font-medium rounded-full border border-orange-500/30 flex items-center space-x-1">
                            <Zap className="w-3 h-3" />
                            <span>Popular</span>
                          </span>
                        )}
                      </div>
                    </div>

                    <h3 className="text-xl font-bold text-white mb-2 group-hover:text-blue-400 transition-colors">
                      {component.title}
                    </h3>
                    <p className="text-white/70 text-sm leading-relaxed mb-4">
                      {component.description}
                    </p>

                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-3">
                        <span className="text-white/60 text-xs">Category:</span>
                        <span className="text-white/80 text-xs font-medium">{component.category}</span>
                      </div>
                      <span className={`px-2 py-1 text-xs font-medium rounded-full ${getDifficultyColor(component.difficulty)}`}>
                        {component.difficulty}
                      </span>
                    </div>
                  </div>

                  {/* Card Footer */}
                  <div className="px-6 py-4 bg-white/5 border-t border-white/10">
                    <div className="flex items-center justify-between">
                      <span className="text-white/60 text-sm">Click to view component</span>
                      <ArrowRight className="w-4 h-4 text-white/40 group-hover:text-white group-hover:translate-x-1 transition-all duration-200" />
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* No Results */}
          {filteredComponents.length === 0 && (
            <div className="text-center py-12">
              <div className="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Search className="w-8 h-8 text-white/40" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">No components found</h3>
              <p className="text-white/60">Try adjusting your search terms or filters</p>
            </div>
          )}
        </div>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}