import React from 'react';
import {
  TextField,
  Button,
  Paper,
  Typography,
  Box,
  Avatar,
  Divider,
} from '@mui/material';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import { useForm } from 'react-hook-form';
import FacebookIcon from '@mui/icons-material/Facebook';
import GoogleIcon from '@mui/icons-material/Google';

const SignIn = () => {
  const { register, handleSubmit } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  const handleGoogleSignIn = () => {
    console.log("Sign in with Google clicked");
    // Add your Google auth logic here
  };

  const handleFacebookSignIn = () => {
    console.log("Sign in with Facebook clicked");
    // Add your Facebook auth logic here
  };

  return (
    <Box className="signin-container">
      <Paper elevation={10} className="signin-paper">
        <Box className="signin-header">
          <Avatar className="signin-avatar">
            <LockOutlinedIcon />
          </Avatar>
          <Typography variant="h5">Sign In</Typography>
        </Box>

        <form onSubmit={handleSubmit(onSubmit)} className="signin-form">
          <TextField
            {...register('email')}
            label="Email"
            fullWidth
            variant="outlined"
            margin="normal"
            required
          />
          <TextField
            {...register('password')}
            label="Password"
            type="password"
            fullWidth
            variant="outlined"
            margin="normal"
            required
          />

          {/* Forgot Password Button */}
          <Box textAlign="right" mb={1}>
            <Button size="small" color="primary" href="/forgot-password">
              Forgot Password?
            </Button>
          </Box>

          <Button
            type="submit"
            variant="contained"
            color="primary"
            fullWidth
            className="signin-btn"
          >
            Sign In
          </Button>

          <Divider className="divider" style={{ margin: '20px 0' }} />

          <Button
            fullWidth
            className="google-btn"
            onClick={handleGoogleSignIn}
            startIcon={<GoogleIcon />}
            variant="outlined"
          >
            Sign in with Google
          </Button>

          <Button
            fullWidth
            className="facebook-btn"
            onClick={handleFacebookSignIn}
            startIcon={<FacebookIcon />}
            variant="outlined"
            style={{ marginTop: '10px' }}
          >
            Sign in with Facebook
          </Button>

          <Divider style={{ margin: '20px 0' }} />

          <Typography className="signin-link" align="center">
            Don't have an account? <a href="/Signup">Sign-Up</a>
          </Typography>
        </form>
      </Paper>
    </Box>
  );
};

export default SignIn;
