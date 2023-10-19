import { Box, Button, IconButton,useTheme} from "@mui/material";
import {useContext} from "react";
import { ColorModeContext,tokens } from "../../theme";
import LightModeOutlinedIcon from "@mui/icons-material/LightModeOutlined";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import NotificationsOutlinedIcon from "@mui/icons-material/NotificationsOutlined";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";


const Topbar = () => {
    const theme = useTheme();
    const colorMode = useContext(ColorModeContext);
    const colors = tokens(theme.palette.mode)
    let color = ''
    if(theme.palette.mode === 'dark'){
        color = 'white'
    }else{
        color = 'black'
    }

    return (<Box display="flex" justifyContent="space-between" p={2}>

        <Box
            display="flex"
            borderRadius="3px"
        >
        </Box>

        <Box display="flex">
            <Button style={{color:color}} onClick={colorMode.toggleColorMode}>
                {theme.palette.mode === "dark" ?(
                    <DarkModeOutlinedIcon/>
                ):(
                    <LightModeOutlinedIcon/>
                )}
            </Button>
            <Button style={{color:color}}>
                <PersonOutlinedIcon />
            </Button>
        </Box>
    </Box>)
}

export default Topbar;