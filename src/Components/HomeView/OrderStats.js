import React, { useState, useEffect, PureComponent } from 'react';
import "./styles.css"
import OrderChart from './OrderChart'

function OrderStats(){
    const totalOrders = 12;
    return (
        <div className = 'orderbox'>
            <h1>Orders</h1>
            <OrderChart/>
            <h1>Total Orders: {totalOrders}</h1>
        </div>
    );
}
export default OrderStats