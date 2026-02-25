import {
  BrowserRouter as Router,
  Routes,
  Route,
  useNavigate,
} from 'react-router-dom';

const Home = () => {
  const navigate = useNavigate();

  return (
    <div>
      <h1>Home Page</h1>
      <button onClick={() => navigate('/about')}>Go to About Page</button>
    </div>
  );
};

const About = () => {
  const navigate = useNavigate();

  return (
    <div>
      <h1>About Page</h1>
      <button onClick={() => navigate('/')}>Go to Home Page</button>
    </div>
  );
};

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </Router>
  );
}
