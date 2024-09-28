import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { CssBaseline,  Box } from '@mui/material';
import Login from './Pages/Login';
import Welcome from './Pages/Welcome';

function App() {
  return (
    <Router>
      <CssBaseline />
      
        <Box sx={{ textAlign: 'center', marginTop: 8 }}>
          
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/welcome" element={<Welcome />} />
          </Routes>
        </Box>
  
    </Router>
  );
}

export default App;

