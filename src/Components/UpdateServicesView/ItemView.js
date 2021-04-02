import React, { useState, useEffect } from 'react';
import "./styles.css"
import initial from "./extra"
import { setValue } from "../../configs/CacheManager";
import TextField from '@material-ui/core/TextField';
import firebase from "firebase";
import { Button } from '@material-ui/core';
import Delete from '@material-ui/icons/Delete';
import KEYS from '../../configs/KEYS';

function ItemView(props){
    const emptyItem={itemName:"", price: "", unit: ""}
    const [newItem, setNewItem] = useState({
        ...emptyItem
    });

    const selectedService=props.selectedService;
    const selectedCategory=props.selectedCategory;
    const selectedItem = props.selectedItem;
    return (
    <div class="itemView">
        <div class="subViewTitle">
            <h3>Items</h3>
        </div>
        <div class="addField">
            <div class="textField">
                <TextField value={newItem.itemName} onChange={(event)=>{setNewItem({...newItem, itemName : event.target.value })}} label="Item Name"></TextField>
            </div>
            <div class="textField">
                <TextField value={newItem.price} onChange={(event)=>{setNewItem({...newItem, price : event.target.value })}} label="Item Price"></TextField>
            </div>
            <div class="textField">
                <TextField value={newItem.unit} onChange={(event)=>{setNewItem({...newItem, unit : event.target.value })}} label="Unit"></TextField>
            </div>
            <Button onClick={()=>{
                if(selectedService!=="" && selectedCategory!==""&& newItem.name!=="" && newItem.price!=="" && newItem.unit!=="")
                {
                    props.setServices(
                        {...props.services,
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
                        })
                    setNewItem({...emptyItem});
                }
            }}
            class="addButton">Add Item</Button>
        </div>
        {
            selectedService!=="" && (selectedCategory!=="" &&
                Object.keys(props.services[selectedService][selectedCategory]).map((name)=>{
                    const item=props.services[selectedService][selectedCategory][name]
                    return (<div key={name} class="service" style={{display: "flex" , flexDirection: "row", backgroundColor : selectedItem===name.toString() ? "#CFCCCC" : null}}>
                        <Button style={{display: "flex", flex: 1}} onClick={()=>{props.setselectedItem(name)}}>
                            <div style={{flex: 0.5}}>{name}</div>
                            <div style={{flex: 0.5}}>{item.price}/{item.unit}</div>
                        </Button>
                        <Button onClick={()=>{
                            console.log("delete clicked") 
                            let temp={...props.services}
                            delete temp[selectedService][selectedCategory][name]
                            props.setServices(temp)
                            }} style={{flex: 0.2}}><Delete></Delete></Button>
                    </div>)
                }))
        }
    </div>
    )
}
export default ItemView