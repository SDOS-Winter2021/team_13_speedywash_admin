/**
 * @module
 */
import React, { useState, useEffect } from 'react'
import "./styles.css"
import { setValue } from "../../configs/CacheManager";
import OrdersView from "./OrdersView"
import StatusView from "./StatusView"
import OrdersDetails from "./OrderDetails"
import firebase from "firebase";
import KEYS from '../../configs/KEYS';
import { Button } from '@material-ui/core';

/**
 * This View shows Order Details
 * User can upgrade status of the orders in this View
 * @returns {div} - React Component div
 */
function UpdateOrdersView() {

    /*
        Stores the object of all orders
    */
    const [orders, setOrders] = useState('');

    /*
        Stores the object of selected order
    */
    const [selectedOrder, setSelectedOrder] = useState('');
    
    /*
        Stores the status of selected status
    */
    const [selectedStatus, setSelectedStatus] = useState('');


    useEffect(() => {
        firebase.firestore().collection(KEYS.DATABASE.COLLECTIONS.ORDERS).onSnapshot((records) => {
            let ordersList = {};
            setOrders({});
            records.forEach((doc) => {
                ordersList = {...ordersList, [doc.id] : doc.data()};
            })
            //console.log(ordersList);
            setOrders(ordersList);
        });
    }, [])

    return (
        <div>
            <h1 className="title">Orders</h1>
            <StatusView
                selectedStatus={selectedStatus}
                setSelectedStatus={setSelectedStatus}
                setSelectedOrder={setSelectedOrder} />
            <div>
                {orders.size !== '' ? <OrdersView
                    selectedStatus={selectedStatus}
                    setSelectedStatus={setSelectedStatus}
                    orders={orders}
                    setOrders={setOrders}
                    selectedOrder={selectedOrder}
                    setSelectedOrder={setSelectedOrder} />
                    : <div />}

                {selectedOrder !== '' ? <OrdersDetails
                    selectedOrder={selectedOrder}
                    setSelectedOrder={setSelectedOrder}
                    setSelectedStatus={setSelectedStatus}
                    orders={orders}
                    setOrders={setOrders} />
                    : <div />}
            </div>
        </div>
    )
}

export default UpdateOrdersView
