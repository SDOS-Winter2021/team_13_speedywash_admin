import React, { useState, useEffect } from 'react'
import "./styles.css"
import { setValue } from "../../configs/CacheManager";
import OrdersView from "./OrdersView"
import StatusView from "./StatusView"
import OrdersDetails from "./OrderDetails"
import firebase from "firebase";
import KEYS from '../../configs/KEYS';
import { Button } from '@material-ui/core';

function UpdateOrdersView() {

    const [orders, setOrders] = useState('');
    const [selectedOrder, setSelectedOrder] = useState('');
    const [selectedStatus, setSelectedStatus] = useState('');


    useEffect(() => {
        firebase.firestore().collection(KEYS.DATABASE.COLLECTIONS.ORDERS).onSnapshot((records) => {
            let ordersList = [];
            setOrders([]);
            records.forEach((doc) => {
                ordersList.push(doc.data());
            })
            setOrders(ordersList);
        });
    }, [])

    // console.log(orders);
    // console.log(selectedOrder);
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
                    setSelectedOrder={setSelectedOrder} />
                    : <div />}
            </div>
        </div>
    )
}

export default UpdateOrdersView
