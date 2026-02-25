import { useState } from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
  Link,
  useLocation,
  useNavigate,
} from 'react-router-dom';

const Home = ({ setAuthenticated }) => {
  const navigate = useNavigate();

  const handleLogout = () => {
    setAuthenticated(false);
    navigate('/');
  };

  return (
    <div>
      <h1>Home Page</h1>
      <nav>
        <Link to="/">Home</Link> | <Link to="/dashboard">Dashboard</Link> |{' '}
        <button onClick={handleLogout}>Log Out</button>
      </nav>{' '}
    </div>
  );
};

const Dashboard = () => <h1>Dashboard (Private)</h1>;

// Login Component: Displays the login page and redirects after login
const Login = ({ setAuthenticated }) => {
  const navigate = useNavigate(); // Allows navigation programmatically
  const location = useLocation(); // Access the current location
  const from = location.state?.from?.pathname || '/'; // The route the user tried to access

  const handleLogin = () => {
    setAuthenticated(true);
    navigate(from);
  };

  return (
    <div>
      <h1>Login Page</h1>
      <p>You must log in to view the page at {from}</p>
      <button onClick={handleLogin}>Log In</button>
    </div>
  );
};

const PrivateRoute = ({ isAuthenticated, children }) => {
  const location = useLocation();

  return isAuthenticated ? (
    children
  ) : (
    <Navigate to="/login" state={{ from: location }} replace />
  );
};

const App = () => {
  const [isAuthenticated, setAuthenticated] = useState(false);

  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={<Home setAuthenticated={setAuthenticated} />}
        />
        <Route
          path="/dashboard"
          element={
            <PrivateRoute isAuthenticated={isAuthenticated}>
              <Dashboard />
            </PrivateRoute>
          }
        />
        <Route
          path="/login"
          element={<Login setAuthenticated={setAuthenticated} />}
        />
      </Routes>
    </Router>
  );
};

export default App;
