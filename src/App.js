import Home from './pages/Home';
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
          <Header/>
          <Sidebar/>
          <CssBaseline/>
          <Box
        component="main"
        sx={{ flexGrow: 1, bgcolor: 'background.default', p: 3 }}
      >
        <Toolbar />
          <Routes>
            <Route path="/" element={<Activities/>}></Route>
          </Routes>
          </Box>
        </Router>
      </Box>
    </div>
  );
}

export default App;
