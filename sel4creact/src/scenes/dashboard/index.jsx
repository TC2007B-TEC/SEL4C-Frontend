import React from 'react';
import { useTheme, Box, IconButton } from '@mui/material';
import { pieChartData} from '../../data/mockData';
import {data} from '../../data/mockData'
import { Usuarios, Admins, getActividades } from '../../data/dataFun';
import { ChartsHeader, Pie, Radar, Stacked, Header} from '../../components';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { useNavigate } from 'react-router-dom';
import{ useState, useEffect } from 'react';


const Dashboard = () => {
  const theme = useTheme();
  const navigate = useNavigate();
  const [usuarios, setUs] = useState([]);

    useEffect(() => {
        Usuarios().then(usuarios => {
            setUs(usuarios);
        }).catch(error => {
            console.error(error);
        });
    });

  const [admins, setAdmins] = useState([]);

  useEffect(() => {
      Admins().then(admins => {
          setAdmins(admins);
      }).catch(error => {
          console.error(error);
      });
  });

  const [acts, setActs] = useState([]);

  useEffect(() => {
      getActividades().then(actividades => {
          setActs(actividades);
      }).catch(error => {
          console.error(error);
      });
  });

  const isLoggedIn = localStorage.getItem('isLoggedIn');
  if (!isLoggedIn) {
    return navigate("/");
  }

  const Actividades = [
    { x: 'Actividad 1', y: acts[0], text: 'actividades completadas' },
    { x: 'Actividad 2', y: acts[1], text: 'actividades completadas' },
    { x: 'Actividad 3', y: acts[2], text: 'actividades completadas' },
    { x: 'Actividad 4', y: acts[3], text: 'actividades completadas' },
    { x: 'Actividad 5', y: acts[4], text: 'actividades completadas' },
  
  ];

  const stackedChartData = [ 
    [
      { x: 'Actividad 1', y: acts[0], length: usuarios.length},
      { x: 'Actividad 2', y: acts[1], length: usuarios.length},
      { x: 'Actividad 3', y: acts[2], length: usuarios.length},
      { x: 'Actividad 4', y: acts[3], length: usuarios.length},
      { x: 'Actividad 5', y: acts[4], length: usuarios.length},
    ],

    [
      { x: 'Actividad 1', y: usuarios.length - acts[0], length: usuarios.length },
      { x: 'Actividad 2', y: usuarios.length - acts[1], length: usuarios.length },
      { x: 'Actividad 3', y: usuarios.length - acts[2], length: usuarios.length },
      { x: 'Actividad 4', y: usuarios.length - acts[3], length: usuarios.length },
      { x: 'Actividad 5', y: usuarios.length - acts[4], length: usuarios.length },
    ],
  
  ];
  
  return (
    <div className=''>
      <div className={
          `h  w-full lg:w-full p-4 mb-1 justify-center text-center ${theme.palette.mode==='dark' ? ' bg-main-dark-bg': ' bg-main-bg'}`}>
          <p className='text-5xl p-3'>Dashboard</p>
          <p className='text-3xl'>SEL4C | Tecnológico de Monterrey</p>    
      </div>
      <div className='flex flex-wrap lg:flex-nowrap justify-center'>
        <div className={
          `h-44  w-full lg:w-1/5 p-8 pt-6 m-3 ${theme.palette.mode==='dark' ? 'bg-main-dark-bg': ' bg-main-bg'}`
          }>
          <p className='font-bold mb-3 text-center'>Usuarios</p>
          {/* MODIFICAR CON VALORES FIJOS PARA MEJOR VISTA DEL DASHBOARD */}
          <p className='text-center mb-3 mt-5 text-5xl '>{usuarios.length}</p>
          <IconButton  onClick={() => navigate('/usuarios')}>
            <AccountCircleIcon />
          </IconButton>
        </div>
        <div className={
          `h-44 w-full lg:w-1/5 p-8 pt-6 m-3 ${theme.palette.mode==='dark' ? ' bg-main-dark-bg': ' bg-main-bg'}`
          }>
          <p className='font-bold mb-3 text-center'>Administradores</p>
          <p className='text-center mt-5 mb-5 text-5xl '>{admins[0]}</p>
          <IconButton  onClick={() => navigate('/admins')}>
            <AccountCircleIcon />
          </IconButton>
        </div>
        <div className={
          `h-44  w-full lg:w-1/5 p-8 pt-6 m-3 ${theme.palette.mode==='dark' ? ' bg-main-dark-bg': ' bg-main-bg'}`
          }>
          <p className='font-bold mb-3 text-center'>Profesores</p>
          <p className='text-center mb-3 mt-5 text-5xl '>{admins[1]}</p>
          <IconButton  onClick={() => navigate('/admins')}>
            <AccountCircleIcon />
          </IconButton>
        </div>
      </div>
      <div className={
          `h  w-full lg:w-full p-4 mb-2 justify-center text-center ${theme.palette.mode==='dark' ? ' bg-main-dark-bg': ' bg-main-bg'}`
          }>
            <p className='text-3xl p-3'>Resumen de Actividades</p>            
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
          <Stacked height="70%" width="100%" data = {stackedChartData}/>
        </div>
        <div className={
        `h-50% w-full p-8 pt-6 m-2 ${theme.palette.mode==='dark' ? ' bg-main-dark-bg': ' bg-main-bg'}`
        }>
          <h3>Usuarios que han finalizado el programa</h3>
          <p className='text-center mt-8 mb-5 text-5xl '>{acts[4]}</p>
        </div>
        </div>
      </div>
    </div>   
  )
}

export default Dashboard;
