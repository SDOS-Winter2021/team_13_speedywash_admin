import React, { useState, useEffect } from 'react';
import "./styles.css"
import initial from "./extra"
import { setValue } from "../../configs/CacheManager";
import TextField from '@material-ui/core/TextField';
import firebase from "firebase";
import { Button } from '@material-ui/core';
import Delete from '@material-ui/icons/Delete';
import KEYS from '../../configs/KEYS';

function ServiceElement(props){
    const [edit, setEdit] = useState("");
    const [newName, setNewName] = useState("");
    const name=props.name;
    return (<div key={name} class="service" style={{ backgroundColor : props.selectedService===name.toString() ? "#CFCCCC" : null}}>
                <div style={{display: "flex" , flexDirection: "row"}}>
                    <Button style={{flex: 1}} onClick={()=>{props.setselectedItem(""); props.setselectedCategory(""); props.setselectedService(name); }}>{name}</Button>
                    <Button onClick={()=>{setEdit(!edit)}}
                        style={{flex: 0.2}}>
                            Edit
                    </Button>
                    <Button onClick={()=>{
                        console.log("delete clicked")
                        setEdit(false)
                        if(props.selectedService===name)
                        {    
                                props.setselectedItem("")
                                props.setselectedCategory("")
                                props.setselectedService("")
                        }
                        let temp={...props.services}
                        delete temp[name]
                        props.setServices(temp)
                        }} style={{flex: 0.2}}><Delete></Delete>
                    </Button>
                </div>
                    {   edit==true &&
                        <div class="flexRow">
                            <div class="textField">
                                <TextField value={newName} onChange={(event)=>{setNewName(event.target.value)}} label="Enter New Name"></TextField>
                            </div>
                            <Button class="saveButton" onClick={()=>{
                                if(newName!="" && newName!=name)
                                {
                                    setEdit(false);
                                    if(props.selectedService===name)
                                    {    
                                        props.setselectedItem("")
                                        props.setselectedCategory("")
                                        props.setselectedService("")
                                    }
                                    const temp = {
                                        ...props.services,
                                        [newName] : {...props.services[name]}
                                    };
                                    delete temp[name];
                                    props.setServices(temp);
                                    setNewName("");
                                }
                            }}>Save</Button>
                            <Button class="cancelButton" onClick={()=>{setNewName(""); setEdit(false)}}>Cancel</Button>
                        </div>
                    }
                </div>)
}
export default ServiceElement