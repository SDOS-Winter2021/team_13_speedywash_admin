import React, { useState, useEffect } from 'react';
import "./styles.css"
import { Button } from '@material-ui/core';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import OrderItemTable from './OrderItemTable';

function OrdersDetails(props){
    const useStyles = makeStyles({
        underline: {
          "&&&:before": {
            borderBottom: "none"
          },
          "&&:after": {
            borderBottom: "none"
          }
        }
      });
    const classes = useStyles();
    let originalDetails =  props.selectedOrder;
    // console.log(originalDetails);
    function discardChanges(){
     
    }
    return (
    <div class ="ordersDetails">
        <div class="subViewTitle" style = {{marginBottom: "2%"}}>
            <h3>Order Details</h3>
        </div>
        <div className = 'orderData'>
            <div className = 'textFieldView'>
            <TextField className = 'textField' InputProps={{ classes }} label="Name" defaultValue={props.selectedOrder.displayName}/>
            <TextField className = 'textField' InputProps={{ classes }} label="Mobile Number" defaultValue={props.selectedOrder.phoneNumber}/>
            <TextField className = 'textField' InputProps={{ classes }} label="Address Label" defaultValue={props.selectedOrder.addressLabel }/>
            <TextField className = 'textField' InputProps={{ classes }} label="PickUp Address" defaultValue={props.selectedOrder.pickUpAddress}/>
            </div>
            <div className = 'textFieldView'>
            <TextField className = 'textField' InputProps={{ classes }} style={{paddingRight:'10%',width:'50%'}}label="PickUp Time" defaultValue={props.selectedOrder.orderTimeString}/>
            <TextField className = 'textField' InputProps={{ classes }} label="Total Amount" defaultValue={props.selectedOrder.totalAmount}/>
            <TextField className = 'textField' InputProps={{ classes }} label="Current Status" defaultValue={props.selectedOrder.orderStatus.message}/>
            </div>
        </div>
        <OrderItemTable
        selectedOrder= {props.selectedOrder}
        setSelectedOrder = {props.setSelectedOrder}>
        </OrderItemTable>

        <div class="orderButtonView">
            <Button style={{backgroundColor: "#87CEFA", margin:'1%',paddingBottom:'0.5%'}}>Upgrade Status</Button>
            <Button style={{backgroundColor: "#87CEFA", margin:'1%',paddingBottom:'0.5%'}}>Downgrade Status</Button>
            <Button style={{backgroundColor: "#D98880", margin:'2%'}} onClick = {discardChanges()}>Discard Changes</Button>
            <Button style={{backgroundColor: "#82E0AA", margin:'2%'}}>Accept Changes</Button>
        </div>
    </div>)
}

export default OrdersDetails