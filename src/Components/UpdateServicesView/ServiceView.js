import React, { useState, useEffect } from 'react';
import "./styles.css"
import initial from "./extra"
import { setValue } from "../../configs/CacheManager";
import TextField from '@material-ui/core/TextField';
import firebase from "firebase";
import { Button } from '@material-ui/core';
import Delete from '@material-ui/icons/Delete';
import KEYS from '../../configs/KEYS';
import ServiceElement from './ServiceElement'

/* Renders General Layout for Service's View */

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
                return <ServiceElement
                services={props.services} 
                setServices={props.setServices} 
                selectedService={props.selectedService}
                setselectedService={props.setselectedService}
                setselectedCategory={props.setselectedCategory}
                setselectedItem={props.setselectedItem}
                name={name}>
                </ServiceElement>
            })
        }
    </div>
    )
}
export default ServiceView