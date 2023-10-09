import React from 'react';

import { pieChartData } from '../../data/mockData';
import { ChartsHeader, Pie as PieChart } from '../../components';
import { useTheme } from '@mui/material';


const Pie = () => {
  const theme = useTheme();
return (
  <div className='flex flex-wrap lg:flex-nowrap justify-center'>
  <div className={
    ` h-auto w-4/5 p-8 pt-6 m-2 bg-b mb-0 bg-center ${theme.palette.mode==='dark' ? ' bg-main-dark-bg': ' bg-main-bg'}`
    }>
    <ChartsHeader title="Resultados Diagnóstico" />
    <div className="w-full">
      <PieChart id="chart-pie" data={pieChartData} legendVisiblity height="full" />
    </div>
  </div>
  </div>
);}

export default Pie;
