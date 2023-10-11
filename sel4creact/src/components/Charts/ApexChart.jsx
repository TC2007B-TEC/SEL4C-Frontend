
import React from 'react'; 
import { Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, ResponsiveContainer, Legend } from 'recharts'; 
import {Datos} from '../../data/dataFun';

import{ useState, useEffect } from 'react';

const Apex = (usuario) => {  
    const [data, setData] = useState([]);

    useEffect(() => {
        Datos(usuario).then(data => {
            setData(data);
        }).catch(error => {
            console.error(error);
        });
    }, [usuario]);

    return ( 
        <ResponsiveContainer width="100%" height="100%">
        <RadarChart
            outerRadius="80%" 
            data={data}
        > 
            <PolarGrid stroke="grey"/> 
            <PolarAngleAxis  dataKey="label"/> 
            <PolarRadiusAxis angle={67.5} stroke='grey' min={0} max={100} tickCount={6}/> 
            <Radar 
                name='Diagnostico Inicial' 
                dataKey="x"              
                stroke="green" 
                fill="green" fillOpacity={0.5}
            />
            <Radar 
                name='Diagnóstico Final' 
                dataKey="y"  
                stroke="blue" 
                fill="blue" 
                fillOpacity={0.5} 
            />
            <Legend/> 
        </RadarChart>
        </ResponsiveContainer>

        
    ); 
} 

export default Apex; 
