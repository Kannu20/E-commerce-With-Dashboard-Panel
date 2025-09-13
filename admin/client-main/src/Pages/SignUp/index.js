// SignUp.js

import React, { useState } from 'react';
import {
  Box,
  Button,
  Checkbox,
  Container,
  FormControlLabel,
  TextField,
  Typography,
  Paper,
  Link,
} from '@mui/material';

const SignUp = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
    termsAccepted: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Submit logic here
    console.log('Form Data:', formData);
  };

  return (
    <Box
      sx={{
        background: 'linear-gradient(to right, #314769ff, #c2e9fb)',
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <Paper elevation={6} sx={{ p: 5, width: 400 }}>
        <Typography variant="h5" fontWeight="bold" textAlign="center" mb={3}>
          SIGN UP
        </Typography>
        <form onSubmit={handleSubmit}>
          <TextField
            fullWidth
            label="Name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            margin="normal"
            required
          />
          <TextField
            fullWidth
            label="Your Email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            margin="normal"
            required
            type="email"
          />
          <TextField
            fullWidth
            label="Password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            type="password"
            margin="normal"
            required
          />
          <TextField
            fullWidth
            label="Repeat your password"
            name="confirmPassword"
            value={formData.confirmPassword}
            onChange={handleChange}
            type="password"
            margin="normal"
            required
          />
          <FormControlLabel
            control={
              <Checkbox
                name="termsAccepted"
                checked={formData.termsAccepted}
                onChange={handleChange}
                required
              />
            }
            label={
              <Typography variant="body2">
                I agree all statements in{' '}
                <Link href="#" underline="hover">
                  Terms of service
                </Link>
              </Typography>
            }
          />
          <Button
            type="submit"
            variant="contained"
            fullWidth
            sx={{
              mt: 2,
              background: 'linear-gradient(to right, #667eea, #64b6ff)',
              color: '#fff',
            }}
          >
            SIGN UP
          </Button>
          <Typography textAlign="center" mt={2} variant="body2">
            Have already an account?{' '}
            <a href="/SignIn">
              SignIn
            </a>
        
          </Typography>
        </form>
      </Paper>
    </Box>
  );
};

export default SignUp;
