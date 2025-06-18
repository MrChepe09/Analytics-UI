import { BarChart3, X, Menu, Activity, LineChart, PieChart, TrendingUp } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

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
        <nav className="bg-white/10 py-2 backdrop-blur-md border-b border-white/20 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <div className="flex items-center space-x-3">
              <div className="p-2 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg">
                <BarChart3 className="w-6 h-6 text-white" />
              </div>
              <span className="text-xl font-bold text-white"><Link to="/">Analytics UI Library</Link></span>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              {chartTypes.map((chart) => {
                const Icon = chart.icon;
                return (
                  <a
                    key={chart.name}
                    href={`${chart.url}`}
                    className="flex items-center space-x-2 text-white/80 hover:text-white transition-colors duration-200 group"
                  >
                    <Icon className="w-4 h-4 group-hover:scale-110 transition-transform duration-200" />
                    <span>{chart.name}</span>
                  </a>
                );
              })}
              <button className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-6 py-2 rounded-lg font-medium hover:from-blue-600 hover:to-purple-700 transition-all duration-200 shadow-lg hover:shadow-xl">
                <Link to="/getstarted">Get Started</Link>
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
              <div className="px-2 pt-2 pb-3 space-y-1">
                {chartTypes.map((chart) => {
                  const Icon = chart.icon;
                  return (
                    <a
                      key={chart.name}
                      href={`${chart.url}`}
                      className="flex items-center space-x-2 text-white/80 hover:text-white block px-3 py-2 rounded-md transition-colors duration-200"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      <Icon className="w-4 h-4" />
                      <span>{chart.name}</span>
                    </a>
                  );
                })}
                <button className="w-full mt-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white px-6 py-2 rounded-lg font-medium hover:from-blue-600 hover:to-purple-700 transition-all duration-200">
                  <Link to="/getstarted">Get Started</Link>
                </button>
              </div>
            </div>
          )}
        </div>
      </nav>
    );
}

export default Navbar;