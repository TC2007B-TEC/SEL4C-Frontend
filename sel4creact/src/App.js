import { ColorModeContext, useMode } from "./theme";
import { CssBaseline,ThemeProvider } from "@mui/material";
import Topbar from "./scenes/global/Topbar";
import UserScreen from "./scenes/usuarios";
import UserResultadoScreen from "./scenes/testsusuario";
import Login from "./scenes/login";
import Admins from "./scenes/admin";
import AddAdmin from "./scenes/newadmin";
import Sidebar from "./scenes/global/Sidebar";
import {Routes, Route, useLocation, Outlet} from "react-router-dom";
import Dashboard from './scenes/dashboard';
import Pie from './scenes/Charts/Pie';
import Apex from './scenes/Charts/Radar';


function App() {
  const [theme, colorMode] = useMode();
  const location = useLocation(); // get the current location
  const isLogin = location.pathname === "/"; 
  const individual = location.pathname.startsWith("/radar/"); 
  
  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <div className="app">
          {!isLogin && !individual && <Sidebar/>}
          <main className="content">
            {!isLogin && !individual && <Topbar />}
            <Routes>
              <Route path="/" element={<Login />}></Route>
              <Route path="/Dashboard" element={<Dashboard />}></Route>
              <Route path="/usuarios" element={<UserScreen />}></Route>
              <Route path="/usuariostests" element={<UserResultadoScreen />}></Route>
              <Route path="/admins" element={<Admins />}></Route>
              <Route path="/newadmin" element={<AddAdmin />}></Route>
              <Route path="/pie" element={<Pie/>} />
              <Route path="/radar/:user" element={<Apex/>} />
            </Routes>
          </main>
        </div>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default App;
