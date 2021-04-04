import React, { useState, useEffect } from 'react';
import "./styles.css"
import KEYS from '../../configs/KEYS';
import TextField from '@material-ui/core/TextField';

function UserInfo(){
    const stats = [
        {name: "Total Users", value: 8362},
        {name: "Bussiness" , value: 1357689},
        {name: "Users joined this week", value: 183}
    ]
    const _renderItem = (item) => {
        return (<div style = {{display:'flex', flexDirection:'row'}}>
            <TextField className = 'textField' value = {item.name}></TextField>
            <TextField className = 'textField' value = {item.value}></TextField>
        </div>)
    }

    return (
        <div className = 'userinfo'>
            <h1>Statistics</h1>
            <div style={{ flex: 1, marginBottom: 15 }}>
                {
                    stats.map(_renderItem)
                }
            </div>
        </div>
    );
}
export default UserInfo