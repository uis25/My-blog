import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/layout/Layout';
import HomePage from './pages/HomePage';
import PostPage from './pages/PostPage';
import WritePage from './pages/WritePage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/post/:id" element={<PostPage />} />
          <Route path="/write" element={<WritePage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;