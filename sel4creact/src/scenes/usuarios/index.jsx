import React, { useState, useEffect } from 'react';
import { DataGrid } from "@mui/x-data-grid";
import Checkbox from '@mui/material/Checkbox';
import axios from 'axios';

const columns = [
  { field: 'name', headerName: 'Name', width: 150 },
  { field: 'lname', headerName: 'Last Name', width: 150 },
  { field: 'activity1', headerName: 'Activity 1', width: 150, renderCell: (params) => (
    <Checkbox checked={params.value} disabled />
  )},
  { field: 'activity2', headerName: 'Activity 2', width: 150, renderCell: (params) => (
    <Checkbox checked={params.value} disabled />
  )},
  { field: 'activity3', headerName: 'Activity 3', width: 150, renderCell: (params) => (
    <Checkbox checked={params.value} disabled />
  )},
  { field: 'activity4', headerName: 'Activity 4', width: 150, renderCell: (params) => (
    <Checkbox checked={params.value} disabled />
  )},
  { field: 'finalActivity', headerName: 'Final Activity', width: 150, renderCell: (params) => (
    <Checkbox checked={params.value} disabled />
  )}
];

function UsuariosDataGrid() {
  const [rows, setRows] = useState([]);

  useEffect(() => {
    // Fetch data from backend using axios
    axios.get('http://20.127.122.6:8000/usuario/')
      .then(res => {
        // Map data to rows
        const rows = res.data.map(usuario => {
          return {
            id: usuario.email,
            name: usuario.name,
            lname: usuario.lname,
            activity1: usuario.activities?.find(activity => activity.name === 'Activity 1')?.completed_space ?? false,
            activity2: usuario.activities?.find(activity => activity.name === 'Activity 2')?.completed_space ?? false,
            activity3: usuario.activities?.find(activity => activity.name === 'Activity 3')?.completed_space ?? false,
            activity4: usuario.activities?.find(activity => activity.name === 'Activity 4')?.completed_space ?? false,
            finalActivity: usuario.activities?.find(activity => activity.name === 'Final Activity')?.completed_space ?? false
          };
        });
        
        // Set rows state
        setRows(rows);
      })
      .catch(err => {
        // handle error
        console.error(err);
      });
  }, []);

  return (
    <div style={{ height: 500, width: '100%' }}>
      <DataGrid
        rows={rows}
        columns={columns}
        pageSize={10}
        checkboxSelection
        disableSelectionOnClick
      />
    </div>
  );
}

export default UsuariosDataGrid;
