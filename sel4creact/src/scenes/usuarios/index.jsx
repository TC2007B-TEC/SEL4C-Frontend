import { Box, Typography, useTheme } from "@mui/material";
import {DataGrid} from "@mui/x-data-grid"
import { tokens } from "../../theme";
import AdminPanelSettingsOutlinedIcon from "@mui/icons-material/AdminPanelSettingsOutlined";
import LockOpenOutlinedIcon from "@mui/icons-material/LockOpenOutlined";
import SecurityOutlinedIcon from "@mui/icons-material/SecurityOutlined";
import Header from "../../components/Header";

const Usuarios = () => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);

    return (
        <Box>
            <Header title="Usuarios" subtitle="Datos de los usuarios" />
            <Box>
                <DataGrid
                
                />
            </Box>
        </Box>
    )
}

export default Usuarios;