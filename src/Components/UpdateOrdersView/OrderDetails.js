import React, { useState, useEffect } from 'react';
import "./styles.css"
import { Button } from '@material-ui/core';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import OrderItemTable from './OrderItemTable';
import firebase from "firebase";
import KEYS from '../../configs/KEYS';


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

	const handleUpgrade = ()=> {
		props.setSelectedOrder('');
	//	props.setSelectedStatus('');
		const uid = props.selectedOrder.uid;
		const oid = props.selectedOrder.oid;
		const old_status = props.selectedOrder.orderStatus;
		const new_status = {...old_status};
		//console.log(old_status);
		if(old_status.message==="Pickup Pending")
		{
			new_status.message = "Service Pending";
			new_status.stage = 2;
			new_status.stageName = "PICKUPDONE";
		}
		else if(old_status.message==="Service Pending")
		{
			new_status.message = "Delivery Pending";
			new_status.stage = 3;
			new_status.stageName = "SERVICEDONE";
		}
		else if(old_status.message==="Delivery Pending")
		{
			new_status.message = "Completed";
			new_status.stage = 4;
			new_status.stageName = "COMPLETED";
		}
		else
		{
			return;
		}
		//console.log(new_status);
		const new_order = {...props.selectedOrder, orderStatus : new_status};
		//console.log(new_order);
		const new_orders = {...props.orders, 
			[uid] : {
				...props.orders[uid],
				[oid] : new_order
			}
		};
		//console.log(new_orders);
		firebase.firestore()
        .collection(KEYS.DATABASE.COLLECTIONS.ORDERS)
        .doc(uid)
        .set(new_orders[uid])
		props.setOrders(new_orders);
	};
	
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
				</div>
				<div className='textFieldView'>
					<TextField className='textField' InputProps={{ classes }} label="PickUp Address" value={props.selectedOrder.pickUpAddress} />
					<TextField className='textField' InputProps={{ classes }} style={{ paddingRight: '10%', width: '50%' }} label="PickUp Time" value={props.selectedOrder.orderTimeString} />
				</div>
				<div className='textFieldView'>
					<TextField className='textField' InputProps={{ classes }} label="Total Amount" value={props.selectedOrder.totalAmount} />
					<TextField className='textField' InputProps={{ classes }} label="Current Status" value={props.selectedOrder.orderStatus.message} />
				</div>
			</div>
			<OrderItemTable
				selectedOrder={props.selectedOrder}
				setSelectedOrder={props.setSelectedOrder} />

			<div class="orderButtonView">
				<Button onClick={handleUpgrade} style={{ backgroundColor: "#87CEFA", margin: '1%', paddingBottom: '0.5%' }}>Upgrade Status</Button>
			</div>
		</div>)
}

export default OrdersDetails