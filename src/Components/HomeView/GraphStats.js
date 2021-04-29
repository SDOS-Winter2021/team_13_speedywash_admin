/**
 * @module
 */

import React, { useState, useEffect, PureComponent } from 'react';
import "./styles.css"
import GraphChart from './GraphChart'

/**
 * Renders the linechart box
 * @returns {div} React Component Div
 */
function GraphStats(){
    //Graph box in homepage
    return (
        <div className = 'graphbox'>
            <h1>Summary of Last 7 Days</h1>
            <GraphChart/>
        </div>
    );
}

export default GraphStats