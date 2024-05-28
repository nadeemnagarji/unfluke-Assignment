import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import "./App.css";
import LeaderBoard from "./pages/LeaderBoard";
import ScannerPage from "./pages/ScannerPage";
import Dummy from "./pages/Dummy";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LeaderBoard />} />
        <Route path="/LeaderBoard" element={<LeaderBoard />} />
        <Route path="/browse" element={<Dummy />} />
        <Route path="/historical-trading" element={<Dummy />} />
        <Route path="/historical-chart" element={<Dummy />} />
        <Route path="/Scanners" element={<ScannerPage />} />
        <Route path="/alerts" element={<Dummy />} />
        <Route path="/basic-backtest" element={<Dummy />} />
        <Route path="/advanced-backtest" element={<Dummy />} />
        <Route path="/pricing" element={<Dummy />} />
        <Route path="/earning" element={<Dummy />} />
      </Routes>
    </Router>
  );
}

export default App;
