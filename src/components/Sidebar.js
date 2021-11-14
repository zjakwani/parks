import * as React from 'react';
import Drawer from '@mui/material/Drawer';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';

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
                    <h3>National Parks</h3>
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
                <List>
                {['All mail', 'Trash', 'Spam'].map((text, index) => (
                    <ListItem button key={text}>
                    <ListItemIcon>
                        {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                    </ListItemIcon>
                    <ListItemText primary={text} />
                    </ListItem>
                ))}
                </List>
            </Drawer>
        </div>
    );
  };
  
  export default Sidebar;