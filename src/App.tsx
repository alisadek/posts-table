import React from 'react';
import PostsTable from './components/PostsTable/PostsTable';
import { CssBaseline } from '@mui/material';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import PostDetails from './components/PostDetails/PostDetails';
function App() {
  return (
    <>
      <CssBaseline />
      <Router basename={process.env.PUBLIC_URL}>
      <Routes>
        <Route index path="/" element={<PostsTable />}/>
        <Route  path="/:postId" element={<PostDetails />} />
      </Routes>
    </Router>
    </>
  );
}

export default App;
