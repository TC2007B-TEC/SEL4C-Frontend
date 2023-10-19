import { useContext, useState } from 'react';
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

const LOGIN_URL = 'http://20.127.122.6:8000/adminlog/'; // change this to match your Django login URL
//const LOGIN_URL = 'http://127.0.0.1:8000/adminlog/';


const Login = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const theme = useTheme();
  const navigate = useNavigate();
  const colors = tokens(theme.palette.mode);
  const [email, setEmail] = useState(''); // change this to email instead of email
  const [password, setPassword] = useState(''); // change this to password instead of pwd
  const [errMsg, setErrMsg] = useState('');


  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        LOGIN_URL, // use the constant defined above
        { email: email, password: password }, // change this to match your Django login data format
        {
          headers: { 'Content-Type': 'application/json' },
          withCredentials: false, // change this to false or allow credentials in Django
        } 
      );
    console.log(JSON.stringify(response?.data));
    if (response.status === 200) {
      setIsLoggedIn(true)
      console.log(isLoggedIn);
      localStorage.setItem('isLoggedIn', isLoggedIn)
      const { email, name, lname, role } = response.data; // change this to match your Django login response data format
      localStorage.setItem('email', email); // store the email information in local storage
      localStorage.setItem('name', name);
      localStorage.setItem('lname', lname);
      localStorage.setItem('role', role);
      // redirect to dashboard
      navigate("/Dashboard");
      
    }
    setEmail('');
    setPassword('');
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
                id="email"
                label="email"
                type="text"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                fullWidth
                margin="normal"
                variant="outlined"
              />
              <TextField
                id="password"
                label="Password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
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
