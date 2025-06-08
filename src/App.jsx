import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css'
import Home from "./Dashboard/Home";
import Dashboard from "./Dashboard/Dashboard";
function App() {
  
  return (
    <div className="font-serif">
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Dashboard />}>
          <Route path="" element={<Home />}/>
        </Route>
        <Route path="*" element={<h1>404 - Page Not Found</h1>} />
      </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
