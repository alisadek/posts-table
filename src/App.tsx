import React from 'react';
import PostsTable from './components/PostsTable/PostsTable';
import { CssBaseline } from '@mui/material';
function App() {
  return (
    <>
      <CssBaseline />
    <div style={{width:'100vw', height: '100vh', display:'flex', justifyContent:'center', alignItems:'center'}}>
      <PostsTable />
    </div>
    </>
  );
}

export default App;
