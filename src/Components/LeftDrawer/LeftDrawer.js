/**
 * @module
 */
import React, { useState } from 'react'
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import MenuIcon from '@material-ui/icons/Menu';
import KEYS from "../../configs/KEYS"

/*
    Styles for material ui components
*/
const useStyles = makeStyles({
    list: {
        width: 300,
    },
    fullList: {
        width: 'auto',
    },
    selected: {
        backgroundColor: KEYS.COLORS.HIGHLIGHT
    }
});



/**
 * Displays a menu icon clicking upon which opens up an app drawer which has many views to select from
 * Upon clicking one of the view from the app drawer setCurrentView updates the currentview to the Item
 * View is then rendered dynamically (it's an hook)
 * @param {Object} obj - An Object which contains, DrawerItems, CurrentView and function to set CurrentView
 * @returns {div} - An HTML Component
 */
function LeftDrawer({ DrawerItems, currentView, setCurrentView }) {
    const classes = useStyles();

    
    /*
        Stores drawer/menu state, true means open, false means close, by default menu/drawer is close
    */
    const [drawerState, setDrawerState] = useState(false);

    
    function toggleDrawer(state) {
        setDrawerState(state);
    };

    
    /*
        Renders DrawerItems which is a list got from parent component
    */
    const list = (anchor) => (
        <div
            className={clsx(classes.list, {
                [classes.fullList]: anchor === 'top' || anchor === 'bottom',
            })}
            role="presentation"
            onClick={() => toggleDrawer(false)}
            onKeyDown={() => toggleDrawer(false)}
        >
            <List>
                {DrawerItems.map((item) => (
                    <div>
                        <ListItem className={currentView.text == item.text ? classes.selected : null} button key={item.text} onClick={() => { setCurrentView(item) }}>
                            <ListItemIcon>{item.icon}</ListItemIcon>
                            <ListItemText primary={item.text} />
                        </ListItem>
                        {/* <Divider /> */}
                    </div>

                ))}
            </List>
        </div>
    );
    
    return (
        <div>
            <MenuIcon onClick={() => toggleDrawer(true)} />
            <Drawer anchor={"left"} open={drawerState} onClose={() => toggleDrawer(false)}>
                {list("left")}
            </Drawer>
        </div>
    )
}

export default LeftDrawer
