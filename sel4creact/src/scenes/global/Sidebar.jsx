import { useState } from 'react';
import {ProSidebar, Menu, MenuItem} from 'react-pro-sidebar';
import 'react-pro-sidebar/dist/css/styles.css';
import {Box, IconButton, Typography, useTheme} from '@mui/material';
import { Link } from "react-router-dom";
import {tokens} from "../../theme";
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import PeopleOutlinedIcon from "@mui/icons-material/PeopleOutlined";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";

const Item = ({title, to, icon,selected, setSelected}) => {
    const theme = useTheme();
    const colors = tokens (theme.palette.mode);
    return (
        <MenuItem active ={selected === title} style={{color: colors.tec[100]}} onClick={()=> setSelected(title)} icon={icon}>
            <Typography>{title}</Typography>
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
            <Menu iconShape="square">
                <MenuItem
                    onClick={() => setIsCollapsed(!isCollapsed)}
                    icon={isCollapsed ? <MenuOutlinedIcon /> : undefined}
                    stylr={{
                        margin: "10px 0 20px 0",
                        color: colors.tec[500],
                    }}                
                >
                    {!isCollapsed && (
                        <Box
                            display= "flex"
                            justifyContent="space-between"
                            alignItems="center"
                            ml="15px"
                        >
                            <Typography variant="h3" color={colors.grey[100]}>
                                SEL4C
                            </Typography>
                            <IconButton onClick={() => setIsCollapsed(!isCollapsed)}>
                                <MenuOutlinedIcon />
                            </IconButton>
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