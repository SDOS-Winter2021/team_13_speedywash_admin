import React, { useState, useEffect } from 'react';
import "./styles.css"
import { Button } from '@material-ui/core';

function UserItem(props){
    const name = props.currUser.displayName;
    return (
        <div key={name} class="status" style={{ backgroundColor : "#D3D3D3" }}>
            <div style={{display: "flex" , flexDirection: "row"}}>
                <Button style={{flex: 0.6}} onClick={()=>{props.setSelectedOrder(props.currUser); }}>{name}</Button>
                <Button style={{flex: 0.6}} onClick={()=>{props.setSelectedOrder(props.currUser); }}>{props.currUser.phoneNumber}</Button>
            </div>           
        </div>
    )
}
export default UserItem