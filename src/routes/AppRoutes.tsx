import { Route, Routes } from 'react-router-dom';
import ProtectedRoute from '../components/ProtectedRoute';
import ChatPage from '../pages/ChatPage';
import ConversationDetailPage from '../pages/ConversationDetailPage';
import GroupDetailsPage from '../pages/GroupDetailsPage';
import HomePage from '../pages/HomePage';
import LandingPage from '../pages/LandingPage';
import LoginPage from '../pages/LoginPage';
import MapPage from '../pages/MapPage';
import PostDealPage from '../pages/PostDealPage';
import ProfilePage from '../pages/ProfilePage';
import RegisterPage from '../pages/RegisterPage';
import { routes } from './paths';

export default function AppRoutes() {
  return (
    <Routes>
      {/* Public */}
      <Route path={routes.landing}      element={<LandingPage />} />
      <Route path={routes.groupDetails} element={<GroupDetailsPage />} />
      <Route path={routes.map}          element={<MapPage />} />
      <Route path={routes.login}        element={<LoginPage />} />
      <Route path={routes.register}     element={<RegisterPage />} />

      {/* Protected */}
      <Route path={routes.home} element={
        <ProtectedRoute><HomePage /></ProtectedRoute>
      } />
      <Route path={routes.chat} element={
        <ProtectedRoute><ChatPage /></ProtectedRoute>
      } />
      <Route path={routes.conversationDetail} element={
        <ProtectedRoute><ConversationDetailPage /></ProtectedRoute>
      } />
      <Route path={routes.profile} element={
        <ProtectedRoute><ProfilePage /></ProtectedRoute>
      } />
      <Route path={routes.postDeal} element={
        <ProtectedRoute><PostDealPage /></ProtectedRoute>
      } />
    </Routes>
  );
}
