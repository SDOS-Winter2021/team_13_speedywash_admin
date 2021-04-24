import React, { useState, useEffect } from 'react';
import "./styles.css"
import { Button } from '@material-ui/core';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import OrderItemTable from './OrderItemTable';

function OrdersDetails(props) {
	//Order details box in order page
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

	// console.log(props.selectedOrder)
	return (
		<div class="ordersDetails">
			<div class="subViewTitle" style={{ marginBottom: "4%" }}>
				<h3>Order Details</h3>
			</div>
			<div className='orderData'>
				<div className='textFieldView'>
					<TextField className='textField' InputProps={{ classes }} label="Name" value={props.selectedOrder.displayName} />
					<TextField className='textField' InputProps={{ classes }} label="Mobile Number" value={props.selectedOrder.phoneNumber} />
					<TextField className='textField' InputProps={{ classes }} label="Address Label" value={props.selectedOrder.addressLabel} />
					<TextField className='textField' InputProps={{ classes }} label="PickUp Address" value={props.selectedOrder.pickUpAddress} />
				</div>
				<div className='textFieldView'>
					<TextField className='textField' InputProps={{ classes }} style={{ paddingRight: '10%', width: '50%' }} label="PickUp Time" value={props.selectedOrder.orderTimeString} />
					<TextField className='textField' InputProps={{ classes }} label="Total Amount" value={props.selectedOrder.totalAmount} />
					<TextField className='textField' InputProps={{ classes }} label="Current Status" value={props.selectedOrder.orderStatus.message} />
				</div>
			</div>
			<OrderItemTable
				selectedOrder={props.selectedOrder}
				setSelectedOrder={props.setSelectedOrder} />

			<div class="orderButtonView">
				<Button style={{ backgroundColor: "#87CEFA", margin: '1%', paddingBottom: '0.5%' }}>Upgrade Status</Button>
				<Button style={{ backgroundColor: "#87CEFA", margin: '1%', paddingBottom: '0.5%' }}>Downgrade Status</Button>
				<Button style={{ backgroundColor: "#D98880", margin: '2%' }}>Discard Changes</Button>
				<Button style={{ backgroundColor: "#82E0AA", margin: '2%' }}>Accept Changes</Button>
			</div>
		</div>)
}

export default OrdersDetails