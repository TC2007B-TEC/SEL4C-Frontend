import React from 'react';
import { ChartsHeader, Apex as ApexChart, Info } from '../../components';
import { useTheme } from '@mui/material';
import { useParams } from 'react-router-dom';


const Apex = () => {
  let {user}= useParams();
  console.log(user)
  const theme = useTheme();
return (
  <div>
  <div className='flex flex-wrap lg:flex-nowrap justify-center content-center bg-white'>
    <div className={
      `h-auto w-4/5 p-8 pt-6 m-2 bg-b mb-0 rounded-xl bg-center bg-azul-tec content-center justify-center`
      }>
      <ChartsHeader title="Resultados Diagnóstico"/>
      <div className="w-full h-96 justify-center content-center">
        <ApexChart usuario={user}/>
      </div>
    </div>
  </div>
  <div className='flex flex-wrap lg:flex-nowrap justify-center bg-white'>
  <div className={
      `h-auto w-4/5 p-8 pt-6 m-2 bg-b rounded-xl bg-center  mb-4 bg-azul-tec`
      }>
        <div className="w-full h-130 justify-center content-center text-white">
          <Info usuario={user}/>
        </div>
    </div>
    </div>
    </div>
);}

export default Apex;