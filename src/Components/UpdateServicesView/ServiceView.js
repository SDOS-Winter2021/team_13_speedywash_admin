import React, { useState, useEffect } from 'react';
import "./styles.css"
import initial from "./extra"
import { setValue } from "../../configs/CacheManager";
import TextField from '@material-ui/core/TextField';
import firebase from "firebase";
import { Button } from '@material-ui/core';
import Delete from '@material-ui/icons/Delete';
import KEYS from '../../configs/KEYS';

function ServiceView(props){
    const [newService, setNewService] = useState("");
    return (
    <div class="serviceView">
        <div class="subViewTitle">
            <h3>Services</h3>
        </div>
        <div class="addField">
            <div class="textField">
                <TextField value={newService} onChange={(event)=>{setNewService(event.target.value)}} label="New Service Name">{newService}</TextField>
            </div>
            <Button onClick={()=>{
                if(newService!==""  && !props.services.hasOwnProperty([newService]))
                {
                    props.setServices({[newService] : {}, ...props.services})
                    setNewService("");
                }
            }}
            class="addButton">Add Service</Button>
        </div>
        {
            Object.keys(props.services).map((name)=>{
                return (<div key={name} class="service" style={{display: "flex" , flexDirection: "row", backgroundColor : props.selectedService===name.toString() ? "#CFCCCC" : null}}>
                    <Button style={{flex: 1}} onClick={()=>{props.setselectedItem(""); props.setselectedCategory(""); props.setselectedService(name); }}>{name}</Button>
                    <Button onClick={()=>{
                        console.log("delete clicked")
                        if(props.selectedService===name)
                        {    
                            props.setselectedItem("")
                            props.setselectedCategory("")
                            props.setselectedService("")
                        }
                        let temp={...props.services}
                        delete temp[name]
                        props.setServices(temp)
                        }} style={{flex: 0.2}}><Delete></Delete></Button>
                </div>)
            })
        }
    </div>
    )
}
export default ServiceView