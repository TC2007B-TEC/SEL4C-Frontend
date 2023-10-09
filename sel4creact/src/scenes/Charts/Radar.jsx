import React from 'react';

import { data as RadarData, pieChartData } from '../../data/mockData';
import { ChartsHeader, Radar as RadarChart} from '../../components';
import { useTheme } from '@mui/material';


const Radar = () => {
  const theme = useTheme();
return (
  <div className='flex flex-wrap lg:flex-nowrap justify-center'>
  <div className={
    ` h-auto w-4/5 p-8 pt-6 m-2 bg-b mb-0 justify-center ${theme.palette.mode==='dark' ? ' bg-main-dark-bg': ' bg-main-bg'}`
    }>
    <ChartsHeader title="Resultados Diagnóstico"/>
    <div className="w-full justify-center">
      <RadarChart id="Radar" data={RadarData} legendVisiblity/>
    </div>
  </div>
  </div>
);}

export default Radar;
