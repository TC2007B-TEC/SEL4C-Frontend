import React, { useState, useEffect } from "react";
import { DataGrid } from "@mui/x-data-grid";
import axios from "axios";

const Admins = () => {
  const [rows, setRows] = useState([]);

  useEffect(() => {
    // Fetch data from both endpoints and combine them into one array
    axios
      .all([
        axios.get("http://127.0.0.1:8000/admin/"),
      ])
      .then(
        axios.spread((res1) => {
          // res1.data is an array of usuarios
          // res2.data is an array of tests
          // Map each usuario to a test with the same author
          const data = res1.data.map((admin) => {
            // Return an object with the fields you want to display
            return {
              name: admin.name,
              email: admin.email,
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
    { field: "email", headerName: "Email", width: 150 },
  ];



  return (
    <div>
      <DataGrid
        columns={columns}
        rows={rows}
        height={300}
        width="100%"
        pagination
        sortingMode="server"
      />
    </div>
  );
};

export default Admins;
