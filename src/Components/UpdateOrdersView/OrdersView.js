/**
 * @module
 */
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
import OrderElement from './OrderElement';

/**
 * Render pane to display order for selection
 * @param {Object} props - List of orders
 * @returns {div} - React Component div
 */
function OrdersView(props) {
	/*
		style for search bar
	*/
	
	const useStyles = makeStyles((theme) => ({
		formControl: {
			margin: theme.spacing(1),
			minWidth: 120,
		},
		selectEmpty: {
			marginTop: theme.spacing(2),
		},
	}));

	const classes = useStyles();

	
	/*
		filter for search bar
	*/
	const [filter, setFilter] = React.useState('');


	const handleChange = (event) => {
		setFilter(event.target.value);
	};

	return <div class="ordersView">
		<div style={{ textAlign: 'center' }}>
			<TextField className='textField' style={{ margin: '3%' }} label='Search' defaultValue={filter} />
			<FormControl variant="outlined" className={classes.formControl} style={{ margin: '3%' }}>
				<InputLabel id="FilterID">Filter</InputLabel>
				<Select
					labelId="FilterLabel"
					id="FilterID"
					value={filter}
					onChange={handleChange}
					label="Filter"
				>
					<MenuItem value="">
						<em>None</em>
					</MenuItem>
					<MenuItem value={"Name"}>Name</MenuItem>
					<MenuItem value={"Mobile"}>Mobile</MenuItem>
					<MenuItem value={"Address"}>Address</MenuItem>
				</Select>
			</FormControl>
		</div>
		<div>
			{	props.orders=={} ||
				Object.keys(props.orders).map((id) => {
					const singleOrders = props.orders[id]
					// console.log(singleOrders)
					return Object.values(singleOrders).map((order) => {
						return <div key={order.oid}>
							{order.orderStatus['message'] == props.selectedStatus ?
								<OrderElement
									currOrder={order}
									selectedStatus={props.selectedStatus}
									setSelectedStatus={props.setSelectedStatus}
									selectedOrder={props.selectedOrder}
									setSelectedOrder={props.setSelectedOrder}>
								</OrderElement> : null}
						</div>
					})
				})
			}
		</div>
	</div>
}

export default OrdersView