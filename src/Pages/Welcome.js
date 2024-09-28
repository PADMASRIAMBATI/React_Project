import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { Box, Typography, Button, Container, Paper } from '@mui/material';

const Welcome = () => {
  const search = new URLSearchParams(useLocation().search);
  const name = search.get('name') || 'Guest';
  const navigate = useNavigate();

  const handleLogout = () => {
    // Add logic for logout if needed, for now, it redirects to login
    navigate('/');
  };

  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
        background: 'linear-gradient(135deg, #42e695, #3bb2b8)',
        animation: 'fadeIn 1s ease-in',
      }}
    >
      <Container maxWidth="sm">
        <Paper elevation={6} sx={{ padding: '40px', borderRadius: '15px', textAlign: 'center', animation: 'slideUp 0.8s ease-out' }}>
          <Typography variant="h3" color="primary" gutterBottom>
            Welcome, <span style={{ color: '#42e695', fontWeight: 'bold' }}>{name}</span>!
          </Typography>
          <Typography variant="body1" color="textSecondary" sx={{ marginBottom: '30px' }}>
            We're thrilled to have you here. Discover all the new opportunities we have waiting for you!
          </Typography>
          <Button
            variant="contained"
            color="primary"
            sx={{ padding: '10px 30px', borderRadius: '30px' }}
            onClick={handleLogout}
          >
            Log Out
          </Button>
        </Paper>
      </Container>
    </Box>
  );
};

export default Welcome;
