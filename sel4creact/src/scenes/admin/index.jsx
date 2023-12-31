import React, { useState, useEffect } from 'react';
import { DataGrid } from '@mui/x-data-grid'; // import the DataGrid component
import axios from 'axios'; // import axios for making HTTP requests
import { useTheme } from '@mui/material';
import { useNavigate } from 'react-router-dom';


// define the columns for the data grid
const columns = [
  { field: 'name', headerName: 'Name', width: 150 },
  { field: 'lname', headerName: 'Last Name', width: 150 },
  { field: 'role', headerName: 'Role', width: 150 },
  
];

// define the component that renders the data grid
const Admins = () => {
  const theme = useTheme()
  const [rows, setRows] = useState([]); // use state to store the rows of data
  const navigate = useNavigate();
  const isLoggedIn = localStorage.getItem('isLoggedIn');
  

  // use effect to fetch the data from the backend
  useEffect(() => {
    if (!isLoggedIn) {
      return navigate("/");
    }
    // make a get request to http://127.0.0.1:8000/profe/
    axios
      .get('http://20.127.122.6:8000/profe/', {
        headers: { 'Content-Type': 'application/json' },
      })
      .then((response) => {
        // if the response is successful, set the rows state with the data
        setRows(response.data);
      })
      .catch((error) => {
        // if there is an error, log it to the console
        console.error(error);
      });
  }, []); // run only once when the component mounts

  return (
    <div className='m-6' style={{ height: 300}}>
      <DataGrid
        getRowId={(row) => row.email} // use the email field as the id
        rows={rows}
        columns={columns}
      /> 
      
    </div>
  );
};

export default Admins; // export the component

