import React, { useState, useEffect } from 'react';
import "./styles.css"


import TextField from '@material-ui/core/TextField';

import { Button } from '@material-ui/core';
import Delete from '@material-ui/icons/Delete';


/* Renders Individual Item and stores its state - whether it is in edit mode of not */

function ItemElement(props){
    const [edit, setEdit] = useState("");
    const emptyItem={itemName:"", price: "", unit: ""}
    const [newItem, setNewItem] = useState({
        ...emptyItem
    });
    const name=props.name;
    const selectedService=props.selectedService;
    const selectedCategory=props.selectedCategory;
    const selectedItem = props.selectedItem;
    const item=props.services[selectedService][selectedCategory][name];

    return (<div key={name} class="service" style={{ backgroundColor : selectedItem===name.toString() ? "#CFCCCC" : null}}>
        <div style={{display: "flex" , flexDirection: "row"}}>    
            <Button style={{display: "flex", flex: 1}} onClick={()=>{props.setselectedItem(name)}}>
                <div style={{flex: 0.5}}>{name}</div>
                <div style={{flex: 0.5}}>{item.price}/{item.unit}</div>
            </Button>
            <Button onClick={()=>{setEdit(!edit)}}
                style={{flex: 0.2}}>
                Edit
            </Button>
            <Button onClick={()=>{
                console.log("delete clicked")
                setEdit(false)
                if(selectedItem===name)
                    props.setselectedItem("")
                let temp={...props.services}
                delete temp[selectedService][selectedCategory][name]
                props.setServices(temp)
                }} style={{flex: 0.2}}><Delete></Delete>
            </Button>
        </div>
        {   edit==true &&
            <div class="flexRow">
                <div class="textField">
                    <TextField value={newItem.itemName} onChange={(event)=>{setNewItem({...newItem, itemName : event.target.value })}} label="Item Name"></TextField>
                </div>
                <div class="textField">
                    <TextField value={newItem.price} onChange={(event)=>{setNewItem({...newItem, price : event.target.value })}} label="Item Price"></TextField>
                </div>
                <div class="textField">
                    <TextField value={newItem.unit} onChange={(event)=>{setNewItem({...newItem, unit : event.target.value })}} label="Unit"></TextField>
                </div>
                <Button class="saveButton" onClick={()=>{
                    if(newItem.itemName!="" && newItem.price!="" && newItem.unit!="" && newItem.itemName!=name)
                    {
                        setEdit(false);
                        if(selectedItem===name)
                        {    
                            props.setselectedItem("")
                        }
                        const temp = {...props.services,
                            [selectedService] : 
                                {...props.services[selectedService], 
                                    [selectedCategory] : 
                                        {...props.services[selectedService][selectedCategory], 
                                            [newItem.itemName] : 
                                                { 
                                                    price : [newItem.price],
                                                    unit: [newItem.unit]
                                                }
                                        }
                                }
                        };
                        delete temp[selectedService][selectedCategory][name];
                        props.setServices(temp);
                        setNewItem(emptyItem);
                    }
                }}>Save</Button>
                <Button class="cancelButton" onClick={()=>{setNewItem(emptyItem); setEdit(false)}}>Cancel</Button>
            </div>
        }
    </div>)
}
export default ItemElement