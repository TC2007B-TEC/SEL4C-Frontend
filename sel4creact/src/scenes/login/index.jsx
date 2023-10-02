import { useState } from 'react';
import axios from '../../api/axios';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import { useTheme } from '@mui/material';
import Button from '@mui/material/Button';
import { tokens } from '../../theme';
import backlogin from './video/backlogin.mp4';
import Grid from '@mui/material/Grid';
import { useNavigate } from "react-router-dom";

const LOGIN_URL = '/auth';

const Login = () => {
  const theme = useTheme();
  const navigate = useNavigate();
  const colors = tokens(theme.palette.mode);
  const [user, setUser] = useState('');
  const [pwd, setPwd] = useState('');
  const [errMsg, setErrMsg] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        '/auth/login', // change this to match your login API endpoint
        { email: user, password: pwd }, // change this to match your login API data format
        {
          headers: { 'Content-Type': 'application/json' },
          withCredentials: true,
        }
      );
    console.log(JSON.stringify(response?.data));
    if (response.status === 200) {
      // login successful
      const { access, refresh } = response.data;
      localStorage.setItem('access', access);
      localStorage.setItem('refresh', refresh);
      // redirect to dashboard
      navigate("/Dashboard");
      
    }
    setUser('');
    setPwd('');
    } catch (err) {
      if (!err?.response) {
        setErrMsg('No Server Response');
      } else if (err.response?.status === 400) {
        setErrMsg('Usuario o contraseña faltante');
      } else if (err.response?.status === 401) {
        setErrMsg('Usuario no autorizado');
      } else {
        setErrMsg('Log in fallido');
      }
    }
  };

 

  return (
    <Grid container direction="row" style={{ height: '100vh' }}>
      <Grid item xs={6}>
        <video autoPlay loop muted style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center' }}>
          <source src={backlogin} type="video/mp4" />
        </video>
        <Typography
          variant="h7"
          align="center"
          color="#FFFFFF"
          style={{ position: 'absolute', top: '50%', left: '25%' }}
        >
          SEL4C
        </Typography>
      </Grid>
      <Grid
        item
        xs={6}
        container
        alignItems="center"
        justifyContent="center"
      >
        <Card sx={{ maxWidth: 600 }}>
          <CardContent>
            <Typography variant="h4" align="center" color="#FFFFFF">
              Sign In
            </Typography>
            <form onSubmit={handleSubmit}>
              <TextField
                id="username"
                label="Username"
                type="text"
                value={user}
                onChange={(e) => setUser(e.target.value)}
                required
                fullWidth
                margin="normal"
                variant="outlined"
              />
              <TextField
                id="password"
                label="Password"
                type="password"
                value={pwd}
                onChange={(e) => setPwd(e.target.value)}
                required
                fullWidth
                margin="normal"
                variant="outlined"
              />
              <Typography
                variant="body2"
                align="center"
                color={colors.grey[100]}
              >
                {errMsg}
              </Typography>
              <Button
                type="submit"
                variant="contained"
                color="primary"
                fullWidth
                sx={{ marginTop: 2 }}
              >
                Sign In
              </Button>
            </form>
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  );
};

export default Login;

