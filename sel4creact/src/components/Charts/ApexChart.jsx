
import React from 'react'; 
import { Radar, RadarChart, PolarGrid,  
    PolarAngleAxis, PolarRadiusAxis, ResponsiveContainer, Legend } from 'recharts'; 


const Apex = () => { 
    // Sample data 
    const data = [ 
        { name: 'Liderazgo', x: 21 , y:50}, 
        { name: 'Autocontrol', x: 22, y: 70}, 
        { name: 'Conciencia y valor social', x: 40, y:50}, 
        { name: 'Innovación social y sost. financiera', x: 11, y:20}, 
        { name: 'Pensamiento sistemático', x: 20, y:80}, 
        { name: 'Pensamiento científico', x: 16, y:90}, 
    ]; 
    return ( 
        // <div style={{ justifyContent: 'center', alignItems: 'center'}}>
        <ResponsiveContainer width="100%" height="100%">
        <RadarChart
            outerRadius="80%" data={data}> 
            <PolarGrid stroke="grey"/> 
            <PolarAngleAxis  dataKey="name"/> 
            <PolarRadiusAxis angle={60} stroke='grey' /> 
            <Radar name='Diagnostico Inicial' dataKey="x" stroke="green" 
                fill="green" fillOpacity={0.5} />
            <Radar name='Diagnóstico Final' dataKey="y" stroke="blue" 
                fill="blue" fillOpacity={0.5} />
            <Legend /> 
        </RadarChart>
        </ResponsiveContainer>
        // </div>
    ); 
} 

export default Apex; 
