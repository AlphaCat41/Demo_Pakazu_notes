import { AddCircleOutlineOutlined, SubjectOutlined } from "@mui/icons-material";
import { AppBar, Avatar, Drawer, List, ListItem, ListItemIcon, ListItemText, 
    Toolbar, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { useLocation } from "react-router-dom";
import { useHistory } from "react-router-dom";
import { format } from 'date-fns'

const drawerWidth = 240

const useStyles = makeStyles((theme) =>{
    return {
        root: {
            display: 'flex'
        },
        page: {
            background: '#f9f9f9',
            width: '100%',
            // padding 3 * 8
            paddingTop: theme.spacing(3) 
        },
        drawer: {
            width: drawerWidth
        },
        drawerPaper: {
            width: drawerWidth
        },
        active: {
            background: '#f4f4f4'
        },
        title: {
            padding: theme.spacing(2)
        },
        children: {
            paddingTop: theme.spacing(7) 
        },
        date: {
            flexGrow: 1
        },
        avatar: {
            marginLeft: theme.spacing(2)
        }
    }  
})
const Layout = ({ children }) => {
    const classes = useStyles()
    const history = useHistory()
    const location= useLocation()
    const menuItems = [
        {
            text: 'My Notes',
            icon: <SubjectOutlined color='secondary' />,
            path: '/',
        },
        {
            text: 'Create Note',
            icon: <AddCircleOutlineOutlined color='secondary' />,
            path: '/create',
        }
    ]
    return ( 
        <div className={ classes.root }>

            {/* app bar */}     
            <AppBar 
                color='primary' 
                sx={{
                    width: `calc(100% - ${drawerWidth}px)`,
                }}
            >
                <Toolbar>
                    <Typography className={ classes.date}>
                        Today is the { format(new Date(), 'do MMMM Y') }
                    </Typography>
                    <Typography>
                        Pakdee H.
                    </Typography>
                    <Avatar src='/mario-av.png' className={ classes.avatar}/>
                </Toolbar>
            </AppBar>
            
            {/* drawer */}
            <Drawer
                className={ classes.drawer }
                variant="permanent"
                anchor="left"
                classes={{ paper: classes.drawerPaper}}
            >
          
                <Typography variant="h5" className={ classes.title }>
                    Pakazu Notes
                </Typography>
                {/* list items/ links */}
                <List>
                    {menuItems.map((item) =>(
                        <div className={location.pathname === item.path ? classes.active : null}>
                            <ListItem
                                button
                                key={item.text}
                                onClick={() => history.push(item.path)}
                                
                            >
                                <ListItemIcon>{ item.icon }</ListItemIcon>
                                <ListItemText primary={ item.text }/>
                            </ListItem>
                        </div>
                    ))}     
                </List>
            </Drawer>

            <div>
                <div className={ classes.page }>
                    <div className={ classes.children }>
                        { children }
                    </div>
                </div>
            </div>
        </div>
    );
}
 
export default Layout;