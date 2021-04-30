/**
 * @module
 */
import React, { useState, useEffect, PureComponent } from 'react';
import "./styles.css"
import OrderChart from './OrderChart'

/**
 * Displays order related stats
 * @returns {div} - React Component div
 */
function OrderStats(){
    //Order stats box in pie chart
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