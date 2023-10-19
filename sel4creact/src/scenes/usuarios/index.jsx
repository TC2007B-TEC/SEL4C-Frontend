// Importamos las librerías necesarias
import React, { useState, useEffect } from "react";
import axios from "axios";
import { DataGrid, GridToolbar, GridToolbarColumnsButton, GridToolbarExport, GridToolbarDensitySelector, GridToolbarFilterButton, GridToolbarContainer } from "@material-ui/data-grid";
import {
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  List,
  ListItem,
  ListItemText,
  ListItemIcon,
} from "@material-ui/core";
import Typography from '@mui/material/Typography'
import DownloadOutlinedIcon from "@mui/icons-material/DownloadOutlined";
import { ThemeProvider, useTheme } from '@mui/material';
import { tokens } from '../../theme';
// Creamos un componente para la pantalla de usuario
function UserScreen() {
  // Definimos el estado del componente
  const theme = useTheme();
  const [users, setUsers] = useState([]); // Un array para guardar los usuarios
  const [userActivities, setUserActivities] = useState([]); // Un array para guardar las actividades de un usuario
  const [userDetails, setUserDetails] = useState(null); // Un objeto para guardar la información de un usuario
  const [openActivities, setOpenActivities] = useState(false); // Un booleano para controlar si se muestra el diálogo de actividades
  const [openUserInfo, setOpenUserInfo] = useState(false); // Un booleano para controlar si se muestra el diálogo de
  
  let color = ''
  let bcolor =''
  if (theme.palette.mode==='dark'){
    color = 'white'
  }
  else{
    color = 'black'
  }

  if (theme.palette.mode==='dark'){
    bcolor = '#6c6c6c'
  }
  else{
    bcolor = '#e0e0e0'
  }
  // Definimos las columnas del datagrid

  const columns = [
    { 
      field: "name", 
      headerName: "Nombre", 
      width: 150, 
    },

    { 
      field: "lname", 
      headerName: "Apellido", 
      width: 150, 
    },

    {
      field: "activities",
      headerName: "Actividad",
      width: 150,
      renderCell: (params) => (
        // Creamos un botón para ver las actividades de cada usuario
        <Button style={{color:color, background: bcolor}} 
          variant="contained"
          onClick={() => handleActivities(params.row.email)}
        >
          <p>Actividades</p>
        </Button>
      ),
    },
    {
      field: "usuarios",
      headerName: "Usuarios",
      width: 150,
      renderCell: (params) => (
        <Button style={{color:color, background: bcolor}}
          variant="contained"
          color={color}
          text-color="white"
          onClick={() => handleUserInfo(params.row.email)}
        >
          Ver usuario
        </Button>
      ),
    },
    {
      field: "resultados",
      headerName: "Resultados",
      width: 150,
      renderCell: (params) => (
        <Button style={{color:color, background: bcolor}}
          variant="contained"
          color={color}
          text-color="white"
          onClick={() => handleUserResultados(params.row.email)}
        >
          Resultados
        </Button>
      ),
    },
  ];


  // Definimos una función para obtener los usuarios al montar el componente
  useEffect(() => {
    axios
      .get("http://20.127.122.6:8000/usuario/")
      .then((response) => {
        // Guardamos los usuarios en el estado
        setUsers(response.data);
      })
      .catch((error) => {
        // Mostramos un mensaje de error si hay algún problema
        console.error(error);
        alert("Error al obtener los usuarios");
      });
  }, []);

  // Definimos una función para obtener las actividades de un usuario dado su email
  const handleActivities = (email) => {
    axios
      .post(
        "http://20.127.122.6:8000/activity/",
        { email }, // El json con el email del usuario
        { headers: { "Content-Type": "application/json" } } // El header para indicar el tipo de contenido
      )
      .then((response) => {
        // Guardamos las actividades en el estado
        setUserActivities(response.data); // Guardamos el array completo de actividades en userActivities
        // Abrimos el diálogo de actividades
        setOpenActivities(true);
      })
      .catch((error) => {
        // Mostramos un mensaje de error si hay algún problema
        console.error(error);
        alert("Error al obtener las actividades");
      });
  };
  
  

  // Definimos una función para obtener la información de un usuario dado su email
  const handleUserInfo = (email) => {
    axios
      .post(
        "http://20.127.122.6:8000/unusuario/",
        { email }, // El json con el email del usuario
        { headers: { "Content-Type": "application/json" } } // El header para indicar el tipo de contenido
      )
      .then((response) => {
        // Guardamos la información en el estado
        setUserDetails(response.data[0]); // Accedemos al primer elemento del array y lo guardamos en userDetails
        // Abrimos el diálogo de información
        setOpenUserInfo(true);
      })
      .catch((error) => {
        // Mostramos un mensaje de error si hay algún problema
        console.error(error);
        alert("Error al obtener la información");
      });
  };
  const handleUserResultados = (email) => {
    window.open(`http://74.208.39.10:3000/radar/${email}`, '_blank');
  };

  

  // Definimos una función para cerrar los diálogos
  const handleClose = () => {
    // Cerramos los diálogos y limpiamos el estado
    setOpenActivities(false);
    setOpenUserInfo(false);
    setUserActivities([]);
    setUserDetails(null);
  };

  // Definimos una función para manejar el click en cada icono de descarga, que haga un get request al endpoint http://127.0.0.1:8000/filedown con el id de la actividad como parámetro.
  const handleDownload = (activity_id) => {
    window.open(`http://20.127.122.6:8000/filedown/?activity_id=${activity_id}`, '_blank');
  }
  // Retornamos el JSX del componente
  return (
    <div className='m-6' style={{ height: 500, color:color}}>
      <DataGrid style={{color:color}}
        rows={users}
        columns={columns}
        components={{
          Toolbar: GridToolbar,
        }}
        Gri
        getRowId={(row) => row.email}
        // Usamos el email como id
        sx={{
          '& .MuiDataGrid-columnHeader, & .MuiDataGrid-cell': {
            color: color,
          },
        }}
      />
      {/* Mostramos el diálogo de actividades si está abierto */}
      <Dialog open={openActivities} onClose={handleClose}>
        <DialogTitle>Activities</DialogTitle>
        <DialogContent>
          {/* Mostramos una lista con los nombres de las actividades y los iconos de descarga */}
          <List>
            {userActivities.map((activity) => (
              <ListItem key={activity.id}>
                <ListItemText primary={activity.name} />
                <ListItemIcon>
                  <DownloadOutlinedIcon onClick={() => handleDownload(activity.id)} />
                </ListItemIcon>
              </ListItem>
            ))}
          </List>
        </DialogContent>
      </Dialog>
      

      {/* Mostramos el diálogo de información si está abierto */}
      <Dialog open={openUserInfo} onClose={handleClose}>
        <DialogTitle>Information</DialogTitle>
        <DialogContent>
          {/* Mostramos la información del usuario */}
          {userDetails && (
            <>
              <Typography>Email: {userDetails.email}</Typography>
              <Typography>Nombre: {userDetails.name}</Typography>
              <Typography>Apellido: {userDetails.lname}</Typography>
              <Typography>Gender: {userDetails.gender}</Typography>
              <Typography>Age: {userDetails.age}</Typography>
              <Typography>Country: {userDetails.country}</Typography>
              <Typography>Discipline: {userDetails.discipline}</Typography>
              <Typography>School: {userDetails.school}</Typography>
            </>
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
}

export default UserScreen;

