import * as React from 'react';
import Drawer from '@mui/material/Drawer';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';


const drawerWidth = '20vw';

const Sidebar = props => {
    return ( 
        <div>
            <Drawer
                sx={{
                width: drawerWidth,
                flexShrink: 0,
                '& .MuiDrawer-paper': {
                    width: drawerWidth,
                    boxSizing: 'border-box',
                },
                }}
                variant="permanent"
                anchor="left"
            >
                <Toolbar>
                    <h3>Explore National Parks</h3>
                </Toolbar>
                <Divider />
                <List>
                    <ListItem button component="a" href="/">
                        <ListItemText primary={"Home"} />
                    </ListItem>
                </List>
                <Divider />
                <List>
                    <ListItem button component="a" href="/activities">
                        <ListItemText primary={"Search by Activities"} />
                    </ListItem>
                    <ListItem button component="a" href="/states">
                        <ListItemText primary={"Search by States"} />
                    </ListItem>
                    <ListItem button component="a" href="/topics">
                        <ListItemText primary={"Search by Topic"} />
                    </ListItem>
                    <ListItem button component="a" href="/keyword">
                        <ListItemText primary={"Search by Keyword"} />
                    </ListItem>
                </List>
                <Divider />
            </Drawer>
        </div>
    );
  };
  
  export default Sidebar;