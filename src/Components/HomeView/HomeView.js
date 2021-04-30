/**
 * @module
 */

import React from 'react'
import "./styles.css"
import KEYS from '../../configs/KEYS';
import UserInfo from './UserInfo';
import OrderStats from './OrderStats';
import GraphStats from './GraphStats';

/**
 * Renders the Homepage screen
 * Shows stats in attactive way
 * @returns {div} React Component Div
 */
function HomeView() {
    return (
        <div>
            <h1 className= 'title'>
                Homepage
            </h1>
            <UserInfo/>
            <OrderStats/>
            <GraphStats/>
        </div>
    )
}

export default HomeView
