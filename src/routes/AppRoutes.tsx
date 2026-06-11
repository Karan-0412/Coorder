import { Route, Routes } from 'react-router-dom';
import ChatPage from '../pages/ChatPage';
import GroupDetailsPage from '../pages/GroupDetailsPage';
import HomePage from '../pages/HomePage';
import MapPage from '../pages/MapPage';
import ProfilePage from '../pages/ProfilePage';
import { routes } from './paths';

export default function AppRoutes() {
  return (
    <Routes>
      <Route path={routes.home} element={<HomePage />} />
      <Route path={routes.chat} element={<ChatPage />} />
      <Route path={routes.profile} element={<ProfilePage />} />
      <Route path={routes.groupDetails} element={<GroupDetailsPage />} />
      <Route path={routes.map} element={<MapPage />} />
    </Routes>
  );
}
