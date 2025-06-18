import React, { useState } from 'react';
import { BarChart3, LineChart, PieChart, TrendingUp, Activity, Github, Twitter, Mail, Menu, X } from 'lucide-react';
import { Link } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export default function LandingPage() {

  const chartTypes = [
    { name: 'Explore', icon: LineChart, url: '/charts/explore' },
    { name: 'Line Charts', icon: TrendingUp, url: '/charts/linechart' },
    { name: 'Bar Charts', icon: BarChart3, url: '/charts/barchart' },
    { name: 'Pie Charts', icon: PieChart, url: '/charts/piechart' },
    { name: 'Analytics Demo', icon: Activity, url: '/analytics' },
    // { name: 'Radar Charts', icon: LineChart, url: '/charts/linechart' },
    // { name: 'Radial Charts', icon: LineChart, url: '/charts/linechart' },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Navigation */}
      <Navbar />
     
      {/* Banner/Hero Section */}
      <main className="relative overflow-hidden">
        {/* Background decorative elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-32 w-80 h-80 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
          <div className="absolute -bottom-40 -left-32 w-80 h-80 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
          <div className="absolute top-40 left-1/2 w-80 h-80 bg-pink-500 rounded-full mix-blend-multiply filter blur-xl opacity-10 animate-pulse"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
          <div className="text-center">
            {/* Badge */}
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white/90 text-sm font-medium mb-8">
              <span className="w-2 h-2 bg-green-400 rounded-full mr-2 animate-pulse"></span>
              Ready to use • Copy & Paste • shadcn/ui compatible
            </div>

            {/* Main Heading */}
            <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold text-white mb-8">
              Beautiful{' '}
              <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                Analytics Charts
              </span>
              <br />
              Made Simple
            </h1>

            {/* Subheading */}
            <p className="text-xl sm:text-2xl text-white/80 mb-12 max-w-4xl mx-auto leading-relaxed">
              A comprehensive collection of pre-built, customizable chart components built with{' '}
              <span className="text-blue-400 font-semibold">shadcn/ui</span> and{' '}
              <span className="text-purple-400 font-semibold">Recharts</span>. 
              Copy, paste, and customize stunning analytics visualizations in seconds.
            </p>

            {/* Feature highlights */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12 max-w-4xl mx-auto">
              <div className="bg-white/10 backdrop-blur-md rounded-xl p-6 border border-white/20">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-lg flex items-center justify-center mb-4 mx-auto">
                  <BarChart3 className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">5+ Chart Types</h3>
                <p className="text-white/70 text-sm">Line, Bar, Pie, Area, Radar, Radial and more with endless customization options</p>
              </div>
              
              <div className="bg-white/10 backdrop-blur-md rounded-xl p-6 border border-white/20">
                <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center mb-4 mx-auto">
                  <TrendingUp className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">Copy & Paste Ready</h3>
                <p className="text-white/70 text-sm">Pre-built components ready to drop into your React projects instantly</p>
              </div>
              
              <div className="bg-white/10 backdrop-blur-md rounded-xl p-6 border border-white/20">
                <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-teal-500 rounded-lg flex items-center justify-center mb-4 mx-auto">
                  <Activity className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">Fully Responsive</h3>
                <p className="text-white/70 text-sm">Every chart adapts beautifully to any screen size and device</p>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <button className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-8 py-4 rounded-xl font-semibold text-lg hover:from-blue-600 hover:to-purple-700 transition-all duration-200 shadow-2xl hover:shadow-purple-500/25 hover:scale-105">
                <Link to="/charts/explore">Explore Components</Link>
              </button>
              <button className="bg-white/10 backdrop-blur-md border border-white/20 text-white px-8 py-4 rounded-xl font-semibold text-lg hover:bg-white/20 transition-all duration-200 flex items-center space-x-2">
                <Github className="w-5 h-5" />
                <Link target="_blank" to="https://github.com/MrChepe09/Analytics-UI">View on GitHub</Link>
              </button>
            </div>

            {/* Stats */}
            <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 max-w-2xl mx-auto">
              <div className="text-center">
                <div className="text-3xl font-bold text-white mb-1">5+</div>
                <div className="text-white/60 text-sm">Chart Types</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-white mb-1">50+</div>
                <div className="text-white/60 text-sm">Components</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-white mb-1">100%</div>
                <div className="text-white/60 text-sm">Responsive</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-white mb-1">0</div>
                <div className="text-white/60 text-sm">Dependencies</div>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
