import { ColorModeContext, useMode } from "./theme";
import { CssBaseline,ThemeProvider } from "@mui/material";
import Topbar from "./scenes/global/Topbar";
import Usuarios from "./scenes/usuarios";
import Login from "./scenes/login";
import Admins from "./scenes/admin";
import AddAdmin from "./scenes/newadmin";
import Sidebar from "./scenes/global/Sidebar";
import UserActivity from "./scenes/useractivity/UserActivity";
import {Routes, Route, useLocation} from "react-router-dom";
import ProtectedRoute from './components/ProtectedRoute';
import Dashboard from './scenes/dashboard';
import Pie from './scenes/Charts/Pie';
import Apex from './scenes/Charts/Radar'

function App() {
  const [theme, colorMode] = useMode();
  const location = useLocation(); // get the current location
  const isLogin = location.pathname === "/"; 
  
  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <div className="app">
          {!isLogin && <Sidebar/>}
          <main className="content">
            {!isLogin && <Topbar />}
            <Routes>
              <Route path="/" element={<Login />}></Route>
              <Route path="/Dashboard" element={<Dashboard />}></Route>
              <Route path="/usuarios" element={<Usuarios />}></Route>
              <Route path="/usuarioactivity" element={<UserActivity />}></Route>
              <Route path="/admins" element={<Admins />}></Route>
              <Route path="/newadmin" element={<AddAdmin />}></Route>
              <Route path="/pie" element={<Pie/>} />
              <Route path="/radar" element={<Apex/>} />
            </Routes>
          </main>
        </div>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default App;
