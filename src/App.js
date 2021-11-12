import Park from './pages/Park';
import Sidebar from './components/Sidebar';
import Activities from './pages/Activities';
import Header from './components/Header';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import CssBaseline from '@mui/material/CssBaseline';

// Use react-router library for nested routes
import {
  Routes,
  BrowserRouter as Router,
  Route,
} from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Box sx={{ display: 'flex' }}>
        <Router>

          {/* Wrapped every route with the persistent header and sidebar */}
          <Header/>
          <Sidebar/>

          {/* Baseline styling from Material UI */}
          <CssBaseline/>
          <Box
        component="main"
        sx={{ flexGrow: 1, bgcolor: 'background.default', p: 3 }}
      >
        <Toolbar />
          <Routes>
            <Route path="/" element={<Activities/>}></Route>
            <Route path="/:code" element={<Park/>}></Route>
          </Routes>
          </Box>
        </Router>
      </Box>
    </div>
  );
}

export default App;
