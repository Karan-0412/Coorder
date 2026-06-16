import { BrowserRouter } from 'react-router-dom';
import BottomNav from './components/BottomNav';
import { AuthProvider } from './context/AuthContext';
import { ThemeProvider } from './context/ThemeContext';
import AppRoutes from './routes/AppRoutes';

function App() {
  return (
    <ThemeProvider>
      <AuthProvider>
        <BrowserRouter>
          <AppRoutes />
          <BottomNav />
        </BrowserRouter>
      </AuthProvider>
    </ThemeProvider>
  );
}

export default App;
