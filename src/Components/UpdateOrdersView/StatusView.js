import React, { useState, useEffect } from 'react';
import "./styles.css"
import { Button } from '@material-ui/core';

function StatusView(props){
    // const [status,setStatus] = new useState("");

    
    const statuses = [
        {key: 1 , name: 'Pickup Pending'},
        {key: 2 , name: 'Service Pending' },
        {key: 3 , name: 'Delivery Pending'},
        {key: 4 , name: 'Completed'}
    ]

    //Render the statusus on top for selection
    const _renderItem = (item) => {
        return (<div class="status">
            <Button onClick={()=>{props.setSelectedStatus(item.name);props.setSelectedOrder('')} } style={{ backgroundColor : props.selectedStatus === item.name ? "#CFCCCC" : null}}>{item.name}</Button>        
        </div>)
    }

    return (
    <div class="statusView">
        <div class="subViewTitle">
            <h3>Select Status</h3>
        </div>
        <div class = "container">
        {
            statuses.map(_renderItem)
        }
        </div>
    </div>)
}

export default StatusView