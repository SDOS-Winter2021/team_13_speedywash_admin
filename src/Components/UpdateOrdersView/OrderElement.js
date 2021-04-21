import React, { useState, useEffect } from 'react';
import "./styles.css"
import { Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import TextField from '@material-ui/core/TextField';
import Delete from '@material-ui/icons/Delete';

function OrderElement(props){
    //render each order element in view order pane
    const name = props.currOrder.displayName;
    return (
        <div key={name} class="status" style={{ backgroundColor : "#D3D3D3" }}>
            <div style={{display: "flex" , flexDirection: "column"}}>
            <div style={{display: "flex" , flexDirection: "row"}}>
                <Button style={{flex: 0.6}} onClick={()=>{props.setSelectedOrder(props.currOrder); }}>{name}</Button>
                <Button style={{flex: 0.6}} onClick={()=>{props.setSelectedOrder(props.currOrder); }}>{props.currOrder.phoneNumber}</Button>
            </div>
                <Button style={{flex: 0.6}} onClick={()=>{props.setSelectedOrder(props.currOrder); }}>{props.currOrder.pickUpAddress}</Button>
            </div>
        </div>
    )
}

export default OrderElement