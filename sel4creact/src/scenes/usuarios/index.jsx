// Importamos las librerías necesarias
import React, { useState, useEffect } from "react";
import axios from "axios";
import { DataGrid, GridToolbar } from "@material-ui/data-grid";
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
import { useTheme } from '@mui/material';
import { tokens } from '../../theme';
// Creamos un componente para la pantalla de usuario
function UserScreen() {
  // Definimos el estado del componente
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const [users, setUsers] = useState([]); // Un array para guardar los usuarios
  const [userActivities, setUserActivities] = useState([]); // Un array para guardar las actividades de un usuario
  const [userTests, setUserTests] = useState([]);
 // Un array para guardar los tests de un usuario
  const [userDetails, setUserDetails] = useState(null); // Un objeto para guardar la información de un usuario
  const [openActivities, setOpenActivities] = useState(false); // Un booleano para controlar si se muestra el diálogo de actividades
  const [openTests, setOpenTests] = useState(false); // Un booleano para controlar si se muestra el diálogo de tests
  const [openUserInfo, setOpenUserInfo] = useState(false); // Un booleano para controlar si se muestra el diálogo de
  const [testType, setTestType] = useState("D1");
  const [email, setEmail] = useState("");
  useEffect(() => {
    // Call the handleTests function with the current email and testType values
    console.log("Running useEffect with testType:", testType);
    handleTests(email, testType);
  }, [testType]);
  // Definimos las columnas del datagrid
  const columns = [
    { field: "name", headerName: "Nombre", width: 150},
    { field: "lname", headerName: "Apellido", width: 150 },
    {
      field: "activities",
      headerName: "Activities",
      width: 150,
      renderCell: (params) => (
        // Creamos un botón para ver las actividades de cada usuario
        <Button
          variant="contained"
          color="primary"
          onClick={() => handleActivities(params.row.email)}
        >
          Activities
        </Button>
      ),
    },
    {
      field: "tests",
      headerName: "Tests",
      width: 150,
      renderCell: (params) => (
        // Creamos un botón para ver los tests de cada usuario
        <Button
          variant="contained"
          color="secondary"
          // Pass the testType state as an argument to the handleTests function
          onClick={() => handleTests(params.row.email, testType)}
        >
          Tests
        </Button>
      ),
    },
    {
      field: "usuarios",
      headerName: "Usuarios",
      width: 150,
      renderCell: (params) => (
        // Creamos un botón para ver los tests de cada usuario
        <Button
          variant="contained"
          color="secondary"
          onClick={() => handleUserInfo(params.row.email)}
        >
          Ver usuario
        </Button>
      ),
    }
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

  // Definimos una función para obtener los tests de un usuario dado su email
  const handleTests = (email, testType) => {
    console.log("Running handleTests with email and testType:", email, testType);
    axios
      .get(
        "http://20.127.122.6:8000/getpreguntas/",
        // Aquí pasamos los parámetros como una propiedad params del objeto de opciones
        {
          params: {
            // Use the testType parameter as the test_type query
            test_type: testType,
            usuario: email,
          },
          headers: { "Content-Type": "application/json" },
        }
      )
      .then((response) => {
        // Si la solicitud al servicio web falla, limpiamos el estado de userTests
        if (!response.data) {
          setUserTests([]);
          return;
        }
  
        // Guardamos el array de preguntas en el estado
        // Aquí usamos response.data directamente, ya que es el array que nos devuelve la API
        setUserTests(response.data);
        console.log(response.data);
        // Abrimos el diálogo de tests
        setOpenTests(true);
      })
      .catch((error) => {
        // Mostramos un mensaje de error si hay algún problema
        console.error(error);
        alert("Error al obtener los tests");
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

  

  // Definimos una función para cerrar los diálogos
  const handleClose = () => {
    // Cerramos los diálogos y limpiamos el estado
    setOpenActivities(false);
    setOpenTests(false);
    setOpenUserInfo(false);
    setUserActivities([]);
    setUserTests([]);
    setUserDetails(null);
  };

  // Definimos una función para manejar el click en cada icono de descarga, que haga un get request al endpoint http://127.0.0.1:8000/filedown con el id de la actividad como parámetro.
  const handleDownload = (activity_id) => {
    window.open(`http://20.127.122.6:8000/filedown/?activity_id=${activity_id}`, '_blank');
  }
  // Retornamos el JSX del componente
  return (
    <div style={{ height: 400, width: "100%" }}>
      {/* Mostramos el datagrid con los usuarios */}
      <DataGrid
        rows={users}
        columns={columns}
        components={{
          Toolbar: GridToolbar,
        }}
        getRowId={(row) => row.email} // Usamos el email como id
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
      {/* Mostramos el diálogo de tests si está abierto */}
      {openTests ? (
        <>
          {/* Render the dialog component */}
          <Dialog open={openTests} onClose={handleClose}>
            <DialogTitle>Tests</DialogTitle>
            <DialogContent>
              {/* Render the select element inside the dialog component */}
              {/* Use the testType state as the value prop */}
              {/* Use the setTestType function as the onChange handler */}
              <select value={testType} onChange={(e) => setTestType(e.target.value)}>
                <option value="D1">D1</option>
                <option value="D2">D2</option>
                <option value="F1">F1</option>
                <option value="F2">F2</option>
              </select>
              {/* Mostramos una lista de las preguntas */}
              <ul>
                {userTests && userTests.length > 0 ? (
                  // If userTests is not null and has some elements, render them as list items
                  userTests.map((pregunta) => (
                    <li key={pregunta.id}>
                      Id pregunta: {pregunta.idpregunta}
                      <br />
                      Respuesta: {pregunta.resp}
                      <br />
                      Tipo de test: {pregunta.test_type}
                    </li>
                  ))
                ) : (
                  // If userTests is null or empty, render a message saying "Test no disponible"
                  <li>Test no disponible</li>
                )}
              </ul>
            </DialogContent>
          </Dialog>
        </>
      ) : null}

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

