import React, { useState, useEffect } from 'react';
import "./styles.css"
import ServiceView from "./ServiceView"
import CategoryView from "./CategoryView"
import ItemView from "./ItemView"
import initial from "./extra"
import { setValue } from "../../configs/CacheManager";
import TextField from '@material-ui/core/TextField';
import firebase from "firebase";
import { Button } from '@material-ui/core';
import KEYS from '../../configs/KEYS';
import Snackbar from '@material-ui/core/Snackbar';
import Alert from '@material-ui/lab/Alert';

function UpdateServicesView() {

    const [services, setServices] = useState({
    });
    const [selectedService, setselectedService] = useState("");
    const [selectedCategory, setselectedCategory] = useState("");
    const [selectedItem, setselectedItem] = useState("");
    useEffect(()=>
    {
        firebase.firestore()
        .collection(KEYS.DATABASE.COLLECTIONS.SERVICES)
        .doc("data")
        .get().then((record)=> {
            if (record && record.data()) {
                setValue(KEYS.LOCAL_STORAGE.SERVICES, record.data(), KEYS.TIME.WEEK);
                setServices(record.data());
            }
        });
    },[])

    function discardChanges(){
        setselectedItem("");
        setselectedCategory("");
        setselectedService("");
        firebase.firestore()
        .collection(KEYS.DATABASE.COLLECTIONS.SERVICES)
        .doc("data")
        .get().then((record)=> {
            if (record && record.data()) {
                setValue(KEYS.LOCAL_STORAGE.SERVICES, record.data(), KEYS.TIME.WEEK);
                setServices(record.data());
            }
        });
    }

    function confirmChanges(){
        firebase.firestore()
        .collection(KEYS.DATABASE.COLLECTIONS.TEST)
        .doc("Table1")
        .set(services)
    }

    console.log(services);
    console.log(services[selectedService]);
    return (
        <div>
            <h1 class={"title"}>Services</h1>
            <div style={{textAlign: "center"}}>
                <Button class="confirmButton" onClick={confirmChanges}>Upload Changes</Button>
                <Button class="discardButton" onClick={discardChanges}>Discard Changes</Button>
            </div>
            <ServiceView 
            services={services} 
            setServices={setServices} 
            selectedService={selectedService}
            setselectedService={setselectedService}
            setselectedCategory={setselectedCategory}
            setselectedItem={setselectedItem}>
            </ServiceView>
            <CategoryView
            services={services} 
            setServices={setServices}
            selectedService={selectedService}
            selectedCategory={selectedCategory}
            setselectedCategory={setselectedCategory}
            setselectedItem={setselectedItem}>
            </CategoryView>
            <ItemView
            services={services} 
            setServices={setServices}
            selectedService={selectedService}
            selectedCategory={selectedCategory}
            selectedItem={selectedItem}
            setselectedItem={setselectedItem}>
            </ItemView>
        </div>
    )
}

export default UpdateServicesView
