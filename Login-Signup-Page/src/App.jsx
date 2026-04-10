import { BrowserRouter, Routes, Route } from 'react-router-dom';

// 1. Ensure 'Pages' starts with a Capital 'P' to match your folder
import Login from './pages/Login';
import UserRegister from './Pages/UserRegister';
import UserDashboard from './Pages/UserDashboard';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* 2. Components must start with Capital letters: <Login /> not <login /> */}
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<UserRegister />} />
        <Route path="/dashboard" element={<UserDashboard />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;