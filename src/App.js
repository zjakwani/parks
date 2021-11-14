import Park from './pages/Park';
import Home from './pages/Home';
import Sidebar from './components/Sidebar';
import Activities from './pages/Activities';
import States from './pages/States';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Topics from './pages/Topics';
import Keyword from './pages/Keyword';

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

            {/* Wrapped every page with the persistent header and sidebar */}
            {/* <Header/> */}
            <Sidebar/>

            <Box
          component="main"
          sx={{ flexGrow: 1, p: 3 }}
        >
          <Toolbar />
            <Routes>
              <Route path="/" element={<Home/>}></Route>
              <Route path="/activities" element={<Activities/>}></Route>
              <Route path="/topics" element={<Topics/>}></Route>
              <Route path="/states" element={<States/>}></Route>
              <Route path="/keyword" element={<Keyword/>}></Route>
              <Route path="/:code" element={<Park/>}></Route>
            </Routes>
            </Box>
          </Router>
        </Box>
    </div>
  );
}

export default App;
