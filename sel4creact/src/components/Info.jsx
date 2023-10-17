import React from 'react';
import{ useState, useEffect } from 'react';
import {Datos} from '../data/dataFun';

const Info = (usuario) => {  
    const [data, setData] = useState([]);
    
    useEffect(() => {
        Datos(usuario).then(data => {
            setData(data);
        })
        .catch(error => {
            console.error(error);
        });
    }, [usuario]);
    console.log(data)
    // Comprueba si data está vacío antes de intentar acceder a data[0].x
    let porcentajes = []
    let porcentajesf = []
    if (data.length > 0) {
        for(let i = 0; i <data.length;i++){
            porcentajes[i] = data[i].x;
            porcentajesf[i] = data[i].y;
        }
    }
    return (
    <div className='mb-5 content-center justify-center'>
        <div className='flex flex-col items-center'>
            <h2 className='text-3xl mb-5'>Diagnóstico inicial</h2>
            <table style={{borderCollapse: 'collapse'}}>
                <tr className=" m-3 b" style={{border: '1px white'}}>
                    <th>Nombre</th>
                    <th>%</th>
                </tr>
                <tr style={{border: '1px solid white'}}>
                    <td>Autocontrol (AC)</td>
                    <td>{porcentajes[0]}%</td>
                </tr>
                <tr style={{border: '1px solid white'}}>
                    <td>Liderazgo (Lid)</td>
                    <td>{porcentajes[1]}%</td>
                </tr>
                <tr style={{border: '1px solid white'}}>
                    <td>Conciencia y Valor social (CVS)</td>
                    <td>{porcentajes[2]}%</td>
                </tr>
                <tr style={{border: '1px solid white'}}>
                    <td>Innovación social y sostenibilidad financiera (ISSF)</td>
                    <td>{porcentajes[3]}%</td>
                </tr>
                <tr style={{border: '1px solid white'}}>
                    <td>Pensamiento sistemático (PS)</td>
                    <td>{porcentajes[4]}%</td>
                </tr>
                <tr style={{border: '1px solid white'}}>
                    <td>Pensamiento científico (PCi)</td>
                    <td>{porcentajes[5]}%</td>
                </tr>
                <tr style={{border: '1px solid white'}}>
                    <td>Pensamiento crítico (PCr)</td>
                    <td>{porcentajes[6]}%</td>
                </tr>
                <tr style={{border: '1px solid white'}}>
                    <td>Pensamiento innovador (PI)</td>
                    <td>{porcentajes[7]}%</td>
                </tr>        
            </table>    
        </div>
        <div className='flex flex-col items-center'>
            <h2 className='text-3xl p-3'>Diagnóstico Final</h2>
            <table style={{borderCollapse: 'collapse'}}>
                <tr className=" m-3" style={{border: '1px white'}}>
                    <th>Nombre</th>
                    <th>%</th>
                </tr>
                <tr style={{border: '1px solid white'}}>
                    <td>Autocontrol (AC)</td>
                    <td>{porcentajesf[0]}%</td>
                </tr>
                <tr style={{border: '1px solid white'}}>
                    <td>Liderazgo (Lid)</td>
                    <td>{porcentajesf[1]}%</td>
                </tr>
                <tr style={{border: '1px solid white'}}>
                    <td>Conciencia y Valor social (CVS)</td>
                    <td>{porcentajesf[2]}%</td>
                </tr>
                <tr style={{border: '1px solid white'}}>
                    <td>Innovación social y sostenibilidad financiera (ISSF)</td>
                    <td>{porcentajesf[3]}%</td>
                </tr>
                <tr style={{border: '1px solid white'}}>
                    <td>Pensamiento sistemático (PS)</td>
                    <td>{porcentajesf[4]}%</td>
                </tr>
                <tr style={{border: '1px solid white'}}>
                    <td>Pensamiento científico (PCi)</td>
                    <td>{porcentajesf[5]}%</td>
                </tr>
                <tr style={{border: '1px solid white'}}>
                    <td>Pensamiento crítico (PCr)</td>
                    <td>{porcentajesf[6]}%</td>
                </tr>
                <tr style={{border: '1px solid white'}}>
                    <td>Pensamiento innovador (PI)</td>
                    <td>{porcentajesf[7]}%</td>
                </tr>        
            </table>    
        </div>
    </div>




    ); 
}; 

export default Info;  
