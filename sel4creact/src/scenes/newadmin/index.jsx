import React, { useState } from "react";
import axios from "axios";
import { Box, Button, TextField, FormControl, InputLabel, Select, MenuItem } from "@mui/material"; // Import Mui components
import { Formik } from "formik"; // Import Formik for form validation
import * as yup from "yup"; // Import yup for schema validation
import { useNavigate } from "react-router-dom";
import bcrypt from "bcryptjs";



function AddAdmin() {
  const navigate = useNavigate();
  const isLoggedIn = localStorage.getItem('isLoggedIn');
  // Define the validation schema for the input fields
  const validationSchema = yup.object({
    email: yup.string().email().required(),
    password: yup
      .string()
      .required("Please Enter your password")
      .matches(
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/,
        "Must Contain 8 Characters, One Uppercase, One Lowercase and One Number"
      ),
    name: yup.string().required(),
    lname: yup.string().required(),
    role: yup.string().oneOf(["admin", "superadmin"]).required(),
  });
  const salt = "$2a$10$Qq0n7j9g8VZyO1Qm8LZ2xO";
  // Define the handler function for the submit button
  const handleSubmit = (values) => {
    // Create an object with the input data
    console.log("si llega a handle")
    const adminData = {
      email: values.email,
      password: bcrypt.hashSync(values.password, salt),
      name: values.name,
      lname: values.lname,
      role: values.role,
    };
    console.log("si llega despues de admin data")
    if (!isLoggedIn) {
      return navigate("/");
    }
    
    
    // Make the POST request to the backend with the admin data
    console.log("si llega a post")
    axios.post('http://20.127.122.6:8000/profe/', adminData)
      .then((response) => {
        // Handle the response from the backend
        console.log(response.data);
        alert('New admin added successfully!');
      })
      .catch((error) => {
        // Handle the error from the backend
        console.log(error);
        alert('Something went wrong!');
      });
      
  };

  return (
    <div className="AddAdmin">
      <h1 className="m-8">Add a new admin</h1>
      <Formik
        initialValues={{
          email: "",
          password: "",
          name: "",
          lname: "",
          role: "admin",
        }}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {({ handleSubmit, handleChange, values, touched, errors }) => (
          <form className="justify-center m-8" onSubmit={handleSubmit}>
            <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
              <TextField
                label="Email"
                name="email"
                value={values.email}
                onChange={handleChange}
                error={touched.email && Boolean(errors.email)}
                helperText={touched.email && errors.email}
              />
              <TextField
                label="Password"
                name="password"
                type="password"
                value={values.password}
                onChange={handleChange}
                error={touched.password && Boolean(errors.password)}
                helperText={touched.password && errors.password}
              />
              <TextField
                label="Name"
                name="name"
                value={values.name}
                onChange={handleChange}
                error={touched.name && Boolean(errors.name)}
                helperText={touched.name && errors.name}
              />
              <TextField
                label="Last name"
                name="lname"
                value={values.lname}
                onChange={handleChange}
                error={touched.lname && Boolean(errors.lname)}
                helperText={touched.lname && errors.lname}
              />
              {/* Use the basic select of Mui material for the role field */}
              <FormControl fullWidth>
                <InputLabel id="role-label">Role</InputLabel>
                <Select
                  labelId="role-label"
                  id="role-select"
                  name="role"
                  value={values.role}
                  onChange={handleChange}
                  label="Role"
                  error={touched.role && Boolean(errors.role)}
                >
                  <MenuItem value="admin">Admin</MenuItem>
                  <MenuItem value="superadmin">Superadmin</MenuItem>
                </Select>
              </FormControl>
              <Button type="submit" variant="contained">
                Add
              </Button>
            </Box>
          </form>
        )}
      </Formik>
    </div>
  );
}

export default AddAdmin;