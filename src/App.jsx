import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css'
import Home from "./Dashboard/Home";
import Dashboard from "./Dashboard/Dashboard";
import SalesAnalytics from "./Dashboard/SalesAnalytics";
import UserGrowth from "./Dashboard/UserGrowth";
import ProductPerformance from "./Dashboard/ProductPerformance";
import RevenueBreakdown from "./Dashboard/RevenueBreakdown";
import TrafficSources from "./Dashboard/TrafficSources";
function App() {
  
  return (
    <div className="font-serif">
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Dashboard />}>
          <Route path="" element={<Home />}/>
          <Route path="sales" element={<SalesAnalytics />} />
          <Route path="users" element={<UserGrowth />} />
          <Route path="/products" element={<ProductPerformance />} />
          <Route path="/revenue" element={<RevenueBreakdown />} />
          <Route path="/traffic" element={<TrafficSources />} />
        </Route>
        <Route path="*" element={<h1>404 - Page Not Found</h1>} />
      </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
