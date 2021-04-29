/**
 * @module
 */
import React, { useState, useEffect } from 'react';
import "./styles.css"
import initial from "./extra"
import { setValue } from "../../configs/CacheManager";
import TextField from '@material-ui/core/TextField';
import firebase from "firebase";
import { Button } from '@material-ui/core';
import Delete from '@material-ui/icons/Delete';
import KEYS from '../../configs/KEYS';
import CategoryElement from "./CategoryElement"


/**
 * This View renders the overall layout of the categories
 * @param {Object} props 
 * @returns {div} - React Component div
 */
function CategoryView(props){
    const [newCategory, setNewCategory] = useState("");
    const selectedService=props.selectedService;
    const selectedCategory=props.selectedCategory;
    return (
    <div class="serviceView">
        <div class="subViewTitle">
            <h3>Categories</h3>
        </div>
        {/* Below is the head bar to add a new category if there is a service selected */}
        <div class="addField">
            <div class="textField">
                <TextField value={newCategory} onChange={(event)=>{setNewCategory(event.target.value)}} label="Category Name"></TextField>
            </div>
            <Button onClick={()=>{ // newcategory should not be empty or already existing
                if(selectedService!=="" && newCategory!=="" && !props.services[selectedService].hasOwnProperty([newCategory]))
                {
                    props.setServices({...props.services, [selectedService] : {...props.services[selectedService], [newCategory] : {} }})
                    setNewCategory("");
                }
            }}
            class="addButton">Add Category</Button>
        </div>
        {
        /* Renders individual categories if there is a service selected  */
            selectedService!=="" &&
                Object.keys(props.services[selectedService]).map((name)=>{
                    return <CategoryElement
                    services={props.services} 
                    setServices={props.setServices} 
                    selectedService={props.selectedService}
                    selectedCategory={props.selectedCategory}
                    setselectedCategory={props.setselectedCategory}
                    setselectedItem={props.setselectedItem}
                    name={name}
                    ></CategoryElement>
                })
        }
    </div>
    )
}
export default CategoryView