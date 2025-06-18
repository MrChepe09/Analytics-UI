import { BarChart3, Github, Twitter, Mail, Activity, LineChart, PieChart, TrendingUp } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {

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
        <footer className="bg-black/20 backdrop-blur-md border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {/* Brand */}
            <div className="md:col-span-2">
              <div className="flex items-center space-x-3 mb-4">
                <div className="p-2 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg">
                  <BarChart3 className="w-6 h-6 text-white" />
                </div>
                <span className="text-xl font-bold text-white"><Link to="/">Analytics UI Library</Link></span>
              </div>
              <p className="text-white/70 max-w-md">
                The most comprehensive collection of beautiful, responsive analytics charts for React applications. 
                Built with modern web standards and best practices.
              </p>
              <div className="flex space-x-4 mt-6">
                <a href="#" className="text-white/60 hover:text-white transition-colors">
                  <Github className="w-5 h-5" />
                </a>
                <a href="#" className="text-white/60 hover:text-white transition-colors">
                  <Twitter className="w-5 h-5" />
                </a>
                <a href="#" className="text-white/60 hover:text-white transition-colors">
                  <Mail className="w-5 h-5" />
                </a>
              </div>
            </div>

            {/* Chart Types */}
            <div>
              <h3 className="text-white font-semibold mb-4">Chart Types</h3>
              <ul className="space-y-2">
                {chartTypes.map((chart) => (
                  <li key={chart.name}>
                    <a href={`${chart.url}`} className="text-white/70 hover:text-white transition-colors">
                      {chart.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Resources */}
            <div>
              <h3 className="text-white font-semibold mb-4">Resources</h3>
              <ul className="space-y-2">
                <li><a href="/getstarted" className="text-white/70 hover:text-white transition-colors">Documentation</a></li>
                <li><a href="/charts/explore" className="text-white/70 hover:text-white transition-colors">Examples</a></li>
                <li><a href="#" className="text-white/70 hover:text-white transition-colors">GitHub</a></li>
                <li><a href="#" className="text-white/70 hover:text-white transition-colors">Support</a></li>
              </ul>
            </div>
          </div>

          <div className="border-t border-white/10 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-white/60 text-sm">© 2025 Analytics UI Library. All rights reserved.</p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="text-white/60 hover:text-white text-sm transition-colors">Privacy Policy</a>
              <a href="#" className="text-white/60 hover:text-white text-sm transition-colors">Terms of Service</a>
            </div>
          </div>
        </div>
      </footer>
    )
}

export default Footer;