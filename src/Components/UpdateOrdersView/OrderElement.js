/**
 * @module
 */
import React, { useState, useEffect } from 'react';
import "./styles.css"
import { Button } from '@material-ui/core';

/**
 * Render each order element in select order pane
 * @param {Object} props - Object which contains order details to display in the list section
 * @returns {div} - React Component div
 */
function OrderElement(props){
    const name = props.currOrder.displayName;
    return (
        <div key={name} class="status" style={{ backgroundColor : props.selectedOrder===props.currOrder ? "#D3D3D3" : null }}>
            <div style={{display: "flex" , flexDirection: "column"}} onClick={()=>{props.setSelectedOrder(props.currOrder); }}>
                <div style={{display: "flex" , flexDirection: "row"}}>
                    <Button style={{flex: 0.6}} >{name}</Button>
                    <Button style={{flex: 0.6}}>{props.currOrder.phoneNumber}</Button>
                </div>
                <Button style={{flex: 0.6}} >{props.currOrder.pickUpAddress}</Button>
            </div>
        </div>
    )
}

export default OrderElement