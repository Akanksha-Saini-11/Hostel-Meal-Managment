import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProviderComponent } from './hooks/useTheme';
import Navbar from './components/Navbar';
import Dashboard from './pages/Dashboard';
import WeeklyMenu from './pages/WeeklyMenu';
import Attendance from './pages/Attendance';
import Feedback from './pages/Feedback';
import Notices from './pages/Notices';
import Profile from './pages/Profile';
import './App.css';

function App() {
  return (
    <ThemeProviderComponent>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/menu" element={<WeeklyMenu />} />
          <Route path="/attendance" element={<Attendance />} />
          <Route path="/feedback" element={<Feedback />} />
          <Route path="/notices" element={<Notices />} />
          <Route path="/profile" element={<Profile />} />
        </Routes>
      </Router>
    </ThemeProviderComponent>
  );
}

export default App;
