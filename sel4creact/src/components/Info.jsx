import React from 'react';
import{ useState, useEffect } from 'react';
import {Datos} from '../data/dataFun';

const Info = (usuario, valor) => {  
    const [data, setData] = useState([]);
    
    useEffect(() => {
        Datos(usuario).then(data => {
            setData(data);
        }).catch(error => {
            console.error(error);
        });
    }, [usuario]);

    return ( 
        0
    ); 
}; 

export default Info; 
