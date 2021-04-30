/**
 * @module
 */
import React, { useState, useEffect } from 'react';
import "./styles.css"
import TextField from '@material-ui/core/TextField';
import { Button } from '@material-ui/core';
import ItemElement from './ItemElement'


/**
 * Renders general layout for Individual Items
 * @param {Object} props 
 * @returns {div} - React Component div
 */
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
                {   // add a new item while keeping all the previous things intact
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
                    return <ItemElement
                    services={props.services} 
                    setServices={props.setServices} 
                    selectedService={props.selectedService}
                    selectedCategory={props.selectedCategory}
                    selectedItem={props.selectedItem}
                    setselectedItem={props.setselectedItem}
                    name={name}
                    ></ItemElement>
                }))
        }
    </div>
    )
}
export default ItemView