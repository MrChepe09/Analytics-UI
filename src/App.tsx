import { Routes, Route } from 'react-router-dom'
import './App.css'
import LandingPage from './pages/landingPage'
import GetStartedPage from './pages/GetStarted'
import LineChartPage from './pages/Charts/Linechart'
import ComponentsPage from './pages/Charts/Explore'
import BarChartPage from './pages/Charts/Barchart'
import PieChartPage from './pages/Charts/Piechart'
import AreaChartPage from './pages/Charts/Areachart'
import AnalyticsPage from './pages/AnalyticsDemo'
import RadarChartPage from './pages/Charts/Radarchart'
import RadialChartPage from './pages/Charts/Radialchart'

function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/getstarted" element={<GetStartedPage />} />
        <Route path="/analytics" element={<AnalyticsPage />} />
        <Route path="/charts/explore" element={<ComponentsPage />} />
        <Route path="/charts/linechart" element={<LineChartPage />} />
        <Route path="/charts/barchart" element={<BarChartPage />} />
        <Route path="/charts/piechart" element={<PieChartPage />} />
        <Route path="/charts/areachart" element={<AreaChartPage />} />
        <Route path="/charts/radarchart" element={<RadarChartPage />} />
        <Route path="/charts/radialchart" element={<RadialChartPage />} />
      </Routes>
    </>
  )
}

export default App
