import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  useParams,
} from 'react-router-dom';

const BlogArticle = () => {
  const { blogId } = useParams();

  return (
    <div>
      <h1>Blog</h1>
      <p>Blog ID: {blogId}</p>
    </div>
  );
};

const App = () => {
  return (
    <Router>
      <nav>
        <Link to="/blog/1">Blog 1</Link> | <Link to="/blog/2">Blog 2</Link>
      </nav>

      <Routes>
        <Route path="/blog/:blogId" element={<BlogArticle />} />
      </Routes>
    </Router>
  );
};

export default App;
