import React from 'react';
import { ChartsHeader, Apex as ApexChart } from '../../components';
import { useTheme } from '@mui/material';


const Apex = () => {
  let user = "roman@fev.com.mx"
  const theme = useTheme();
return (
  <div className='flex flex-wrap lg:flex-nowrap justify-center'>
    <div className={
      `h-auto w-4/5 p-8 pt-6 m-2 bg-b mb-0 bg-center ${theme.palette.mode==='dark' ? ' bg-main-dark-bg': ' bg-main-bg'}`
      }>
      <ChartsHeader title="Resultados Diagnóstico" />
      <div className="w-full h-96 justify-center content-center">
        <ApexChart usuario={user}/>
      </div>
    </div>
  </div>
);}

export default Apex;