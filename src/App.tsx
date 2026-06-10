import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Pages
import HomePage from './pages/HomePage';
import ChatPage from './pages/ChatPage';
import ProfilePage from './pages/ProfilePage';
import GroupDetailsPage from './pages/GroupDetailsPage';
import MapPage from './pages/MapPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/chat" element={<ChatPage />} />
        <Route path="/profile" element={<ProfilePage />} />
        <Route path="/group/:id" element={<GroupDetailsPage />} />
        <Route path="/map" element={<MapPage />} />
      </Routes>
    </Router>
  );
}

export default App;
