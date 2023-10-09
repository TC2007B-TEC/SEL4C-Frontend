import React from 'react';
import {BsCurrencyDollar} from 'react-icons/bs';
import { GoPrimitiveDot } from 'react-icons/go';
import { useTheme, Box, IconButton } from '@mui/material';
import { tokens } from '../../theme';
import axios from '../../api/axios';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import { pieChartData, Actividades } from '../../data/mockData';
import {data} from '../../data/mockData'
import { ChartsHeader, Pie, Radar, Stacked, Header} from '../../components';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { useNavigate } from 'react-router-dom';

const Dashboard = () => {
  const theme = useTheme();
  const navigate = useNavigate();

  return (
    <div className=''>
      <div className={
          `h  w-full lg:w-full p-4 mb-4 justify-center text-center ${theme.palette.mode==='dark' ? ' bg-main-dark-bg': ' bg-main-bg'}`
          }>
            <p className='text-5xl p-3'>Dashboard</p>
            <p className='text-3xl'>SEL4C | Tecnológico de Monterrey</p>
            
        </div>
      <div className='flex flex-wrap lg:flex-nowrap justify-center'>
        <div className={
          `h-44  w-full lg:w-1/5 p-8 pt-6 m-2 bg-b bg-no-repeat bg-cover bg-center ${theme.palette.mode==='dark' ? ' bg-main-dark-bg': ' bg-main-bg'}`
          }>
          <p className='font-bold mb-3 text-center'>Usuarios</p>
          <p className='text-center mb-3 mt-5 text-5xl '>320</p>
          <IconButton  onClick={() => navigate('/usuarios')}>
            <AccountCircleIcon />
          </IconButton>
        </div>
        <div className={
          `h-44 w-full lg:w-1/5 p-8 pt-6 m-2 ${theme.palette.mode==='dark' ? ' bg-main-dark-bg': ' bg-main-bg'}`
          }>
          <p className='font-bold mb-3 text-center'>Administradores</p>
          <p className='text-center mt-5 mb-5 text-5xl '>127</p>
          <IconButton  onClick={() => navigate('/admins')}>
            <AccountCircleIcon />
          </IconButton>
        </div>
      </div>
      <div className='flex flex-wrap lg:flex-nowrap justify-center'>
        <div className={
        `h-auto w-3/5 p-8 pt-6 m-2 bg-b ${theme.palette.mode==='dark' ? ' bg-main-dark-bg': ' bg-main-bg'}`
        }>
          <ChartsHeader title={"Actividades realizadas"}/>
          <Pie id="Pie" data={Actividades} legendVisiblity height="full"/>
        </div>
        <div>
        <div className={
        `h-80% w-full p-8 pt-6 m-2 ${theme.palette.mode==='dark' ? ' bg-main-dark-bg': ' bg-main-bg'}`
        }>
          <h1>Avance de actividades</h1>
          <Stacked height="70%" width="100%"/>
        </div>
        <div className={
        `h-50% w-full p-8 pt-6 m-2 ${theme.palette.mode==='dark' ? ' bg-main-dark-bg': ' bg-main-bg'}`
        }>
          <h3>Usuarios que han finalizado el programa</h3>
          <p className='text-center mt-8 mb-5 text-5xl '>30</p>
        </div>
        
        </div>
      </div>
    </div>   
  )
}

export default Dashboard;
