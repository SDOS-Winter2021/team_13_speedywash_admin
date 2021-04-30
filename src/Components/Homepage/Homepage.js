/**
 * @module
 */
import React, { useState, useEffect } from 'react';
import "./styles.css"
import Header from "../Header/Header"
import HomeView from '../HomeView/HomeView'
import HomeIcon from '@material-ui/icons/Home';

/**
 * Renders the Screen selected by user
 * 
 * @param {Object} - An object 
 * @returns {div} - React Component div
 */
function Homepage({ user, setUser }) {
    // Default First Screen on LoginclassName={classes.appbar}
    /*
        Stores the details of the selected screen
    */
    const [currentView, setCurrentView] = useState({
        text: "Home",
        icon: <HomeIcon />,
        component: <HomeView user={user} setUser={setUser} />
    })

    return (
        <div>
            {/* Render Header */}

            <Header user={user} setUser={setUser} currentView={currentView} setCurrentView={setCurrentView} />
            
            {/* Render the current selected View */}
            {currentView.component}
        </div>
    )
}

export default Homepage
