import { ColorModeContext, useMode } from "./theme";
import { CssBaseline,ThemeProvider } from "@mui/material";
import Topbar from "./scenes/global/Topbar";
import Dashboard from "./scenes/dashboard";
import Usuarios from "./scenes/usuarios";
import Login from "./scenes/login";
// import Administradores from "./scenes/admins";
import Newadmin from "./scenes/newadmin";
import Sidebar from "./scenes/global/Sidebar";
import {Routes, Route, useLocation} from "react-router-dom";

function App() {
  const [theme, colorMode] = useMode();
  const location = useLocation(); // get the current location
  const isLogin = location.pathname === "/"; 
  
  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <div className="app">
          {!isLogin && <Sidebar />}
          <main className="content">
            {!isLogin && <Topbar />}
            <Routes>
              <Route path="/" element={<Login />}></Route>
              <Route path="/Dashboard" element={<Dashboard />}></Route>
              <Route path="/usuarios" element={<Usuarios />}></Route>
              {/* <Route path="/admins" element={<Administradores />}></Route> */}
              <Route path="/newadmin" element={<Newadmin />}></Route>
            </Routes>
          </main>
        </div>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default App;
