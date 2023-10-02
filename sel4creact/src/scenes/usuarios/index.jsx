import React, { useState, useEffect } from "react";
import { DataGrid } from "@mui/x-data-grid";
import axios from "axios";

const Usuarios = () => {
  const [rows, setRows] = useState([]);

  useEffect(() => {
    // Fetch data from both endpoints and combine them into one array
    axios
      .all([
        axios.get("http://127.0.0.1:8000/usuario/"),
        axios.get("http://127.0.0.1:8000/tests/"),
      ])
      .then(
        axios.spread((res1, res2) => {
          // res1.data is an array of usuarios
          // res2.data is an array of tests
          // Map each usuario to a test with the same author
          const data = res1.data.map((usuario) => {
            const test = res2.data.find(
              (test) => test.author === usuario.email
            );
            // Return an object with the fields you want to display
            return {
              id: usuario.email,
              name: usuario.name,
              autocontrol: test.autocontrol,
              liderazgo: test.liderazgo,
              conciencia: test.conciencia,
              innovacion: test.innovacion,
              sistemico: test.sistemico,
              cientifico: test.cientifico,
            };
          });
          // Set the state with the fetched data
          setRows(data);
        })
      )
      .catch((error) => {
        // Handle errors
        console.log(error);
      });
  }, []);

  // Define the columns for the data grid
  const columns = [
    { field: "name", headerName: "Name", width: 150 },
    { field: "autocontrol", headerName: "Autocontrol", width: 120, sortable: true },
    { field: "liderazgo", headerName: "Liderazgo", width: 120, sortable: true },
    { field: "conciencia", headerName: "Conciencia", width: 120, sortable: true },
    { field: "innovacion", headerName: "Innovacion", width: 120, sortable: true },
    { field: "sistemico", headerName: "Sistemico", width: 120, sortable: true },
    { field: "cientifico", headerName: "Cientifico", width: 120, sortable: true },
  ];

  // Define the sort model for the data grid
  const [sortModel, setSortModel] = useState([
    {
      field: "autocontrol",
      sort: "asc",
    },
  ]);

  return (
    <div>
      <DataGrid
        columns={columns}
        rows={rows}
        height={300}
        width="100%"
        pagination
        sortingMode="server"
        sortModel={sortModel}
        onSortModelChange={(model) => setSortModel(model)}
      />
    </div>
  );
};

export default Usuarios;
