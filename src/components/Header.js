import * as React from 'react';
import Toolbar from '@mui/material/Toolbar';
import AppBar from '@mui/material/AppBar';
import Typography from '@mui/material/Typography';

const drawerWidth = '20vw';

const Header = props => {
    return ( 
        <div>
            <AppBar
                position="fixed"
                sx={{ 
                        width: `calc(100vw - ${drawerWidth})`,
                        ml: `${drawerWidth}`,
                    }}
            >
                <Toolbar>
                <Typography variant="h6" noWrap component="div">
                    {props.title}
                </Typography>
                </Toolbar>
            </AppBar>
        </div>
    );
  };
  
  export default Header;