import React, { useState } from 'react';
import { BarChart3, Copy, Check, Terminal, Palette, Download, Code, Zap, ChevronRight, Monitor, Smartphone, Menu, X } from 'lucide-react';
import { Link } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export default function GetStartedPage() {
  const [copiedStep, setCopiedStep] = useState(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const copyToClipboard = (text: any, stepId: any) => {
    navigator.clipboard.writeText(text);
    setCopiedStep(stepId);
    setTimeout(() => setCopiedStep(null), 2000);
  };

  const steps = [
    {
      id: 'prerequisites',
      title: 'Install Required Libraries',
      description: 'Install shadcn/ui, lucide-react, and necessary chart dependencies using npm',
      code: `npx shadcn@latest init
npm install lucide-react`,
      language: 'bash'
    },
    {
      id: 'install',
      title: 'Install the Chart Component',
      description: 'Add the chart component to your project using the shadcn CLI',
      code: 'npx shadcn@latest add chart',
      language: 'bash'
    },
    {
      id: 'css',
      title: 'Add Chart Colors',
      description: 'Add the following color variables to your CSS file for theming support',
      code: `@layer base {
  :root {
    --chart-1: 12 76% 61%;
    --chart-2: 173 58% 39%;
    --chart-3: 197 37% 24%;
    --chart-4: 43 74% 66%;
    --chart-5: 27 87% 67%;
  }
  .dark {
    --chart-1: 220 70% 50%;
    --chart-2: 160 60% 45%;
    --chart-3: 30 80% 55%;
    --chart-4: 280 65% 60%;
    --chart-5: 340 75% 55%;
  }
}`,
      language: 'css'
    },
    {
      id: 'data',
      title: 'Define Your Data',
      description: 'Create your chart data. The data can be in any shape - use the dataKey prop to map your data',
      code: `const chartData = [
  { month: "January", desktop: 186, mobile: 80 },
  { month: "February", desktop: 305, mobile: 200 },
  { month: "March", desktop: 237, mobile: 120 },
  { month: "April", desktop: 73, mobile: 190 },
  { month: "May", desktop: 209, mobile: 130 },
  { month: "June", desktop: 214, mobile: 140 },
]`,
      language: 'javascript'
    },
    {
      id: 'config',
      title: 'Define Chart Config',
      description: 'Set up your chart configuration with labels, colors, and icons for theming',
      code: `import { type ChartConfig } from "@/components/ui/chart"

const chartConfig = {
  desktop: {
    label: "Desktop",
    color: "hsl(var(--chart-1))",
  },
  mobile: {
    label: "Mobile", 
    color: "hsl(var(--chart-2))",
  },
} satisfies ChartConfig`,
      language: 'javascript'
    },
    {
      id: 'basic',
      title: 'Build Your Basic Chart',
      description: 'Create a simple chart with the ChartContainer component',
      code: `"use client"

import { Bar, BarChart } from "recharts"
import { ChartConfig, ChartContainer } from "@/components/ui/chart"

export function Component() {
  return (
    <ChartContainer config={chartConfig} className="min-h-[200px] w-full">
      <BarChart accessibilityLayer data={chartData}>
        <Bar dataKey="desktop" fill="var(--color-desktop)" radius={4} />
        <Bar dataKey="mobile" fill="var(--color-mobile)" radius={4} />
      </BarChart>
    </ChartContainer>
  )
}`,
      language: 'javascript'
    },
    {
      id: 'enhance',
      title: 'Add Grid, Axis & Interactions',
      description: 'Enhance your chart with grid, axis, tooltips, and legend for a complete experience',
      code: `import { Bar, BarChart, CartesianGrid, XAxis } from "recharts"
import { 
  ChartContainer, 
  ChartTooltip, 
  ChartTooltipContent,
  ChartLegend,
  ChartLegendContent 
} from "@/components/ui/chart"

export function EnhancedChart() {
  return (
    <ChartContainer config={chartConfig} className="min-h-[200px] w-full">
      <BarChart accessibilityLayer data={chartData}>
        <CartesianGrid vertical={false} />
        <XAxis
          dataKey="month"
          tickLine={false}
          tickMargin={10}
          axisLine={false}
          tickFormatter={(value) => value.slice(0, 3)}
        />
        <ChartTooltip content={<ChartTooltipContent />} />
        <ChartLegend content={<ChartLegendContent />} />
        <Bar dataKey="desktop" fill="var(--color-desktop)" radius={4} />
        <Bar dataKey="mobile" fill="var(--color-mobile)" radius={4} />
      </BarChart>
    </ChartContainer>
  )
}`,
      language: 'javascript'
    }
  ];

  const features = [
    {
      icon: Zap,
      title: 'Lightning Fast Setup',
      description: 'Get started in minutes with our pre-configured components'
    },
    {
      icon: Palette,
      title: 'Theme Support',
      description: 'Built-in light/dark mode with customizable color schemes'
    },
    {
      icon: Code,
      title: 'TypeScript Ready',
      description: 'Full TypeScript support with proper type definitions'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Navigation */}
      <Navbar />

      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-20 sm:-top-40 -right-16 sm:-right-32 w-40 sm:w-80 h-40 sm:h-80 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
          <div className="absolute -bottom-20 sm:-bottom-40 -left-16 sm:-left-32 w-40 sm:w-80 h-40 sm:h-80 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-16">
          <div className="text-center mb-8 sm:mb-12 lg:mb-16">
            <div className="inline-flex items-center px-3 sm:px-4 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white/90 text-xs sm:text-sm font-medium mb-4 sm:mb-6">
              <Terminal className="w-3 h-3 sm:w-4 sm:h-4 mr-2" />
              Quick Setup Guide
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 sm:mb-6 leading-tight">
              Get Started in{' '}
              <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                Minutes
              </span>
            </h1>
            <p className="text-lg sm:text-xl text-white/80 max-w-3xl mx-auto px-4 sm:px-0 leading-relaxed">
              Follow our step-by-step guide to integrate beautiful analytics charts into your React application. 
              Built with shadcn/ui and Recharts for the best developer experience.
            </p>
          </div>

          {/* Feature Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 mb-8 sm:mb-12 lg:mb-16">
            {features.map((feature) => {
              const Icon = feature.icon;
              return (
                <div key={feature.title} className="bg-white/10 backdrop-blur-md rounded-xl p-4 sm:p-6 border border-white/20">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center mb-3 sm:mb-4">
                    <Icon className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-2">{feature.title}</h3>
                  <p className="text-white/70 text-sm leading-relaxed">{feature.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Installation Steps */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pb-12 sm:pb-16 lg:pb-20">
        <div className="space-y-6 sm:space-y-8">
          {steps.map((step, index) => (
            <div key={step.id} className="bg-white/10 backdrop-blur-md rounded-xl sm:rounded-2xl border border-white/20 overflow-hidden">
              <div className="p-4 sm:p-6 lg:p-8">
                <div className="flex flex-col sm:flex-row sm:items-start space-y-4 sm:space-y-0 sm:space-x-4">
                  <div className="flex-shrink-0 self-start">
                    <div className="w-8 h-8 sm:w-10 sm:h-10 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white font-bold text-base sm:text-lg">
                      {index + 1}
                    </div>
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="text-xl sm:text-2xl font-bold text-white mb-2">{step.title}</h3>
                    <p className="text-white/80 mb-4 sm:mb-6 text-sm sm:text-base leading-relaxed">{step.description}</p>
                    
                    <div className="relative">
                      <div className="bg-gray-900/50 rounded-xl border border-gray-700/50 overflow-hidden">
                        <div className="flex items-center justify-between px-3 sm:px-4 py-2 sm:py-3 bg-gray-800/50 border-b border-gray-700/50">
                          <div className="flex items-center space-x-2">
                            <div className="w-2 h-2 sm:w-3 sm:h-3 bg-red-500 rounded-full"></div>
                            <div className="w-2 h-2 sm:w-3 sm:h-3 bg-yellow-500 rounded-full"></div>
                            <div className="w-2 h-2 sm:w-3 sm:h-3 bg-green-500 rounded-full"></div>
                          </div>
                          <button
                            onClick={() => copyToClipboard(step.code, step.id)}
                            className="flex items-center space-x-1 sm:space-x-2 text-white/60 hover:text-white transition-colors text-xs sm:text-sm"
                          >
                            {copiedStep === step.id ? (
                              <>
                                <Check className="w-3 h-3 sm:w-4 sm:h-4" />
                                <span className="hidden sm:inline">Copied!</span>
                              </>
                            ) : (
                              <>
                                <Copy className="w-3 h-3 sm:w-4 sm:h-4" />
                                <span className="hidden sm:inline">Copy</span>
                              </>
                            )}
                          </button>
                        </div>
                        <div className="overflow-x-auto">
                          <pre className="p-3 sm:p-4 lg:p-6 text-xs sm:text-sm text-gray-300 whitespace-pre">
                            <code className={`language-${step.language}`}>{step.code}</code>
                          </pre>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Next Steps */}
        <div className="mt-12 sm:mt-16 bg-white/10 backdrop-blur-md rounded-xl sm:rounded-2xl p-6 sm:p-8 border border-white/20">
          <h3 className="text-xl sm:text-2xl font-bold text-white mb-4">🎉 You're All Set!</h3>
          <p className="text-white/80 mb-4 sm:mb-6 text-sm sm:text-base leading-relaxed">
            Congratulations! You've successfully set up the Analytics UI Library. Here's what you can do next:
          </p>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
            <a href="/charts/explore" className="flex items-center p-4 bg-white/10 rounded-xl border border-white/20 hover:bg-white/20 transition-all duration-200 group">
              <div className="w-10 h-10 bg-gradient-to-r from-green-500 to-teal-500 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                <BarChart3 className="w-5 h-5 text-white" />
              </div>
              <div className="flex-1 min-w-0">
                <h4 className="font-semibold text-white text-sm sm:text-base">Explore Chart Types</h4>
                <p className="text-white/70 text-xs sm:text-sm">Browse all available chart components</p>
              </div>
              <ChevronRight className="w-5 h-5 text-white/60 group-hover:text-white group-hover:translate-x-1 transition-all duration-200 flex-shrink-0" />
            </a>
            
            <a href="/analytics" className="flex items-center p-4 bg-white/10 rounded-xl border border-white/20 hover:bg-white/20 transition-all duration-200 group">
              <div className="w-10 h-10 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                <Code className="w-5 h-5 text-white" />
              </div>
              <div className="flex-1 min-w-0">
                <h4 className="font-semibold text-white text-sm sm:text-base">View Examples</h4>
                <p className="text-white/70 text-xs sm:text-sm">See real-world implementation examples</p>
              </div>
              <ChevronRight className="w-5 h-5 text-white/60 group-hover:text-white group-hover:translate-x-1 transition-all duration-200 flex-shrink-0" />
            </a>
          </div>
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
}
