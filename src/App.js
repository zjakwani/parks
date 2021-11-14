import Park from './pages/Park';
import Home from './pages/Home';
import Sidebar from './components/Sidebar';
import Activities from './pages/Activities';
import States from './pages/States';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Topics from './pages/Topics';
import Keyword from './pages/Keyword';
import About from './pages/About';

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
          <Router basename={process.env.PUBLIC_URL}>

            {/* Wrapped every page with the persistent header and sidebar */}
            {/* <Header/> */}
            <Sidebar/>

            <Box
          component="main"
          sx={{ flexGrow: 1, p: 3 }}
        >
          <Toolbar />
            <Routes>
              <Route path="" element={<Home/>}/>
              <Route path="/activities" element={<Activities/>}/>
              <Route path="/topics" element={<Topics/>}/>
              <Route path="/states" element={<States/>}/>
              <Route path="/keyword" element={<Keyword/>}/>
              <Route path="/about" element={<About/>}/>
              <Route path="/park/:code" element={<Park/>}/>
            </Routes>
            </Box>
          </Router>
        </Box>
    </div>
  );
}

export default App;
