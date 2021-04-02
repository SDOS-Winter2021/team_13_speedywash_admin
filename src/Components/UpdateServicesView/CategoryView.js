import React, { useState, useEffect } from 'react';
import "./styles.css"
import initial from "./extra"
import { setValue } from "../../configs/CacheManager";
import TextField from '@material-ui/core/TextField';
import firebase from "firebase";
import { Button } from '@material-ui/core';
import Delete from '@material-ui/icons/Delete';
import KEYS from '../../configs/KEYS';

function CategoryView(props){
    const [newCategory, setNewCategory] = useState("");
    const selectedService=props.selectedService;
    const selectedCategory=props.selectedCategory;
    return (
    <div class="serviceView">
        <div class="subViewTitle">
            <h3>Categories</h3>
        </div>
        <div class="addField">
            <div class="textField">
                <TextField value={newCategory} onChange={(event)=>{setNewCategory(event.target.value)}} label="Category Name"></TextField>
            </div>
            <Button onClick={()=>{
                if(selectedService!=="" && newCategory!=="" && !props.services[selectedService].hasOwnProperty([newCategory]))
                {
                    props.setServices({...props.services, [selectedService] : {...props.services[selectedService], [newCategory] : {} }})
                    setNewCategory("");
                }
            }}
            class="addButton">Add Category</Button>
        </div>
        {
            selectedService!=="" &&
                Object.keys(props.services[selectedService]).map((name)=>{
                    return (<div key={name} class="service" style={{display: "flex" , flexDirection: "row", backgroundColor : selectedCategory===name.toString() ? "#CFCCCC" : null}}>
                        <Button style={{flex: 1}} onClick={()=>{props.setselectedItem(""); props.setselectedCategory(name); }}>{name}</Button>
                        <Button onClick={()=>{
                            console.log("delete clicked") 
                            props.setselectedItem("")
                            let temp={...props.services}
                            delete temp[selectedService][name]
                            props.setServices(temp)
                            }} style={{flex: 0.2}}><Delete></Delete></Button>
                    </div>)
                })
        }
    </div>
    )
}
export default CategoryView