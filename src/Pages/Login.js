import React, { useState } from 'react';
import { Button, TextField, Typography, Box, Grid, Paper, Container } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    // Simulate successful login
    if (email && password) {
      navigate(`/welcome?name=${email.split('@')[0]}`);
    }
  };

  return (
    <Container maxWidth="lg">
      <Grid container spacing={2} alignItems="center" style={{ height: '100vh' }}>
        {/* Login Form Section */}
        
          <Paper elevation={6} sx={{ padding: 4 }}>
            <Typography variant="h4" gutterBottom align="center" color= '#42e695' fontWeight= 'bold'>
              Login to Your Account
            </Typography>
            <Typography variant="body1" align="center" gutterBottom>
              Login using social networks
            </Typography>
            <Box sx={{ display: 'flex', justifyContent: 'center', mb: 2 }}>
              <Button variant="contained" sx={{ backgroundColor: '#3b5998', mx: 1 }}>
                Facebook
              </Button>
              <Button variant="contained" sx={{ backgroundColor: '#db4437', mx: 1 }}>
                Google
              </Button>
              <Button variant="contained" sx={{ backgroundColor: '#0077b5', mx: 1 }}>
                LinkedIn
              </Button>
            </Box>
            <Typography variant="body1" align="center" sx={{ my: 2 }}>
              OR
            </Typography>
            <form onSubmit={handleLogin} style={{ marginTop: '20px' }}>
              <TextField
                label="Email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                fullWidth
                margin="normal"
                required
              />
              <TextField
                label="Password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                fullWidth
                margin="normal"
                required
              />
              <Button type="submit" variant="contained" color="success" fullWidth sx={{ mt: 2 }}>
                Sign In
              </Button>
            </form>
          </Paper>
        

<Grid item xs={12} md={6}>
  <Box
    sx={{
      background: 'linear-gradient(135deg, #42e695, #3bb2b8)',
      color: 'white',
      padding: 4,
      textAlign: 'center',
      height: "50vh", // Set height to full viewport height
      display: 'flex', // Use flex to center content vertically
      flexDirection: 'column', // Stack items vertically
      justifyContent: 'center', // Center items vertically
    }}
  >
    <Typography variant="h4" gutterBottom>
      New Here?
    </Typography>
    <Typography variant="body1" gutterBottom>
      Sign up and discover a great amount of new opportunities!
    </Typography>
    <Button
      variant="contained"
      sx={{ backgroundColor: 'white', color: '#3bb2b8' ,width:'200px'}}
      onClick={() => navigate('/signup')}
    >
      Sign Up
    </Button>
  </Box>
</Grid>

        </Grid>
      
    </Container>
  );
};

export default Login;
