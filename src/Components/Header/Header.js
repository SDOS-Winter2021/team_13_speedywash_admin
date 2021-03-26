import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import LeftDrawer from '../LeftDrawer/LeftDrawer';
import "./styles.css"

import PersonIcon from '@material-ui/icons/Person';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import AddIcon from '@material-ui/icons/Add';
import HomeIcon from '@material-ui/icons/Home';
import UpdateIcon from '@material-ui/icons/Update';
import SubscriptionsIcon from '@material-ui/icons/Subscriptions';
import AddPhotoAlternateIcon from '@material-ui/icons/AddPhotoAlternate';
import StoreIcon from '@material-ui/icons/Store';

import HomeView from '../HomeView/HomeView';
import UsersView from '../UsersView/UsersView';
import UpdateServicesView from '../UpdateServicesView/UpdateServicesView';
import UpdateItemsView from '../UpdateItemsView/UpdateItemsView';
import CreateNewAdminView from '../CreateNewAdminView/CreateNewAdminView';
import UpdateSubscriptionView from '../UpdateSubscriptionView/UpdateSubscriptionView';
import UpdateAdvertisementView from '../UpdateAdvertisementView/UpdateAdvertisementView';
import UpdateOrdersView from '../UpdateOrdersView/UpdateOrdersView';
import SignOut from '../SignOut/SignOut';

/*
    Styles for material ui components
*/ 
const useStyles = makeStyles((theme) => ({
    appbar: {
        top: 0
    },
    root: {
        flexGrow: 1,
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    title: {
        flexGrow: 1,
    },
}));

/*
    Contains all the Views that are available
    and they will be displayed in app left 
    drawer window
*/
function CreateDrawerItems(user, setUser) {
    return [
        {
            text: "Home",
            icon: <HomeIcon />,
            component: <HomeView user={user} setUser={setUser} />
        },
        {
            text: "View Users",
            icon: <PersonIcon />,
            component: <UsersView user={user} setUser={setUser} />
        },
        {
            text: "Update Services",
            icon: <UpdateIcon />,
            component: <UpdateServicesView user={user} setUser={setUser} />
        },
        {
            text: "Update Items",
            icon: <UpdateIcon />,
            component: <UpdateItemsView user={user} setUser={setUser} />
        },
        {
            text: "Create Admin Account",
            icon: <AddIcon />,
            component: <CreateNewAdminView user={user} setUser={setUser} />
        },
        {
            text: "Update Subscriptions",
            icon: <SubscriptionsIcon />,
            component: <UpdateSubscriptionView user={user} setUser={setUser} />
        },
        {
            text: "Change Advertisement",
            icon: <AddPhotoAlternateIcon />,
            component: <UpdateAdvertisementView user={user} setUser={setUser} />
        },
        {
            text: "Update Orders",
            icon: <StoreIcon />,
            component: <UpdateOrdersView user={user} setUser={setUser} />
        },
        {
            text: "Sign out",
            icon: <ExitToAppIcon />,
            component: <SignOut user={user} setUser={setUser} />
        }
    ]
}

// Main Header Component
function Header({ user, setUser, currentView, setCurrentView }) {
    const classes = useStyles();

    // Generating List of Drawer Items
    const drawerList = CreateDrawerItems(user, setUser);

    return (
        <div>
            <AppBar position="static">
                <Toolbar>
                    <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
                        <LeftDrawer DrawerItems={drawerList} currentView={currentView} setCurrentView={setCurrentView} />
                    </IconButton>
                    <Typography variant="h6" className={classes.title}>
                        Speedywash-Admin (IN)
                    </Typography>
                    <Typography>
                        {`Hi, ${user.Name}`}
                    </Typography>
                </Toolbar>
            </AppBar>
        </div>
    )
}

export default Header
