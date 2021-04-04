import React from 'react'
import "./styles.css"
import KEYS from '../../configs/KEYS';
import UserInfo from './UserInfo';
import OrderStats from './OrderStats';
import GraphStats from './GraphStats';

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
