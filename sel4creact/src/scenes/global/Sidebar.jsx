import { useState } from 'react';
import {ProSidebar, Menu, MenuItem} from 'react-pro-sidebar';
import 'react-pro-sidebar/dist/css/styles.css';
import {Box, Button, IconButton, Typography, useTheme} from '@mui/material';
import { Link } from "react-router-dom";
import {tokens} from "../../theme";
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import PeopleOutlinedIcon from "@mui/icons-material/PeopleOutlined";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import TaskOutlinedIcon from "@mui/icons-material/TaskOutlined";

const Item = ({title, to, icon,selected, setSelected}) => {
    const theme = useTheme();
    const colors = tokens (theme.palette.mode);
    return (
        <MenuItem active ={selected === title} style={{color: colors.tec[100]}} onClick={()=> setSelected(title)} icon={icon}>
            <p className=' text-xs'>{title}</p>
            <Link to={to} />
        </MenuItem>
    )
}


const Sidebar = () => {
    const theme= useTheme();
    const colors = tokens(theme.palette.mode)
    const [isCollapsed, setIsCollapsed] = useState(false);
    const [selected, setSelected] = useState("Dashboard");

    return <Box
        sx={{
            height:"122%",       
            "& .pro-sidebar-inner":{
                background: `${colors.tec[400]} !important`
            },
            "& . pro-icon-wrapper": {
                backgroundColor: "transparent !important"
            },
            "& .pro-inner-item": {
                padding: "5px 35px 5px 20px !important"
            },
            "& .pro-inner-item:hover": {
                color: "#868dfb !important"
            },
            "& .pro-menu-item.active": {
                color: `${colors.tec[100]} !important`
            }
        }}
    >
        <ProSidebar collapsed={isCollapsed}>
            <Menu iconShape="transparent">
                <MenuItem
                    onClick={() => setIsCollapsed(!isCollapsed)}
                    icon={isCollapsed ? <MenuOutlinedIcon /> : undefined}
                    style={{
                        margin: "10px 0 20px 0",
                        color: 'white',
                    }}                
                >
                    {!isCollapsed && (
                        <Box
                            display= "flex"
                            justifyContent="space-between"
                            alignItems="center"
                            ml="15px"
                            height="full"
                        >
                            <h1 className='text-white text-4xl'>SEL4C</h1>
                            <Button style={{color:'white'}} onClick={() => setIsCollapsed(!isCollapsed)}>
                                <MenuOutlinedIcon />
                            </Button>
                        </Box>
                    )}
                </MenuItem>
                {/* Items for menu */}
                <Box paddingLeft={isCollapsed ? undefined : "10%"}>
                    <Item 
                        title="Dashboard"
                        to="/Dashboard"
                        icon={<HomeOutlinedIcon />}
                        selected={selected}
                        setSelected={setSelected}                    
                    />
                    <Item 
                        title="Usuarios"
                        to="/usuarios"
                        icon={<PeopleOutlinedIcon />}
                        selected={selected}
                        setSelected={setSelected}           
                    />
                    <Item 
                        title="TestsUsuarios"
                        to="/usuariostests"
                        icon={<TaskOutlinedIcon />}
                        selected={selected}
                        setSelected={setSelected}           
                    />
                    <Item 
                        title="Administradores"
                        to="/admins"
                        icon={<PersonOutlinedIcon />}
                        selected={selected}
                        setSelected={setSelected}                   
                    />
                    <Item 
                        title="Nuevo Administrador"
                        to="/newadmin"
                        icon={<PersonOutlinedIcon />}
                        selected={selected}
                        setSelected={setSelected}                    
                    />
                </Box>
            </Menu>
        </ProSidebar>
    </Box>
}

export default Sidebar;