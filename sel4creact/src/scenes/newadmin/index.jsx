import { Box, Button, TextField } from "@mui/material";
import {Formik} from "formik";
import * as yup from "yup";
import useMediaQuery from "@mui/material/useMediaQuery";
import Header from "../../components/Header";

const initialValues = {
    nombre: "",
    apellido: "",
    email: "",
    password: "",
};

const userSchema = yup.object().shape({
    nombre: yup.string().required("Obligatorio"),
    apellido: yup.string().required("Obligatorio"),
    email: yup.string().email("email no valido").required("Obligatorio"),
    password: yup.string().required("Obligatorio"),
})

const Newadmin = () => {
    const isNonMobile = useMediaQuery("(min-width:600px");
    const handleFormSubmit = (values) => {
        console.log(values);
    };

    return (
        <Box m="20px">
            <Header title ="Crear Admin" subtitle="Crear un administrador nuevo" />
            <Formik
                onSubmit={handleFormSubmit}
                initialValues={initialValues}
                validationSchema={userSchema}
            >
                {({values, errors, touched, handleBlur, handleChange, handleSubmit})=>(
                    <form onSubmit={handleSubmit}>
                        <Box 
                        display="grid" 
                        gap="30px" 
                        gridTemplateColumns="repeat(4, minmax(0,1fr))"
                        sx={{"& > div":{gridColumn: isNonMobile ? undefined : "span 4"}}}
                        >
                            <TextField 
                                fullWidth
                                variant="filled"
                                type="text"
                                label="Nombre"
                                onBlur={handleBlur}
                                onChange={handleChange}
                                value={values.nombre}
                                name="nombre"
                                error={!!touched.nombre && !!errors.nombre}
                                helperText={touched.nombre && errors.nombre}
                                sx={{gridColumn: "span 2"}}
                            />
                            <TextField 
                                fullWidth
                                variant="filled"
                                type="text"
                                label="Apellido"
                                onBlur={handleBlur}
                                onChange={handleChange}
                                value={values.apellido}
                                name="apellido"
                                error={!!touched.apellido && !!errors.apellido}
                                helperText={touched.apellido && errors.apellido}
                                sx={{gridColumn: "span 2"}}
                            />
                            <TextField 
                                fullWidth
                                variant="filled"
                                type="text"
                                label="Email"
                                onBlur={handleBlur}
                                onChange={handleChange}
                                value={values.email}
                                name="email"
                                error={!!touched.email && !!errors.email}
                                helperText={touched.email && errors.email}
                                sx={{gridColumn: "span 4"}}
                            />
                            <TextField 
                                fullWidth
                                variant="filled"
                                type="text"
                                label="Contraseña"
                                onBlur={handleBlur}
                                onChange={handleChange}
                                value={values.password}
                                name="password"
                                error={!!touched.password && !!errors.password}
                                helperText={touched.password && errors.password}
                                sx={{gridColumn: "span 4"}}
                            />
                        </Box>
                        <Box display="flex" justifyContent="end" mt="20px">
                            <Button type="submit" color="secondary" variant="contained">
                                Crear Nuevo Admin
                            </Button>
                        </Box>
                    </form>
                )}
            </Formik>
        </Box>
    )
}

export default Newadmin;