/**
 * @module
 */
import React, { useState, useEffect } from 'react';
import "./styles.css"
import { Button } from '@material-ui/core';
import firebase from "firebase";
import KEYS from '../../configs/KEYS';

/**
 * Renders the update Advertisement screen
 * Admin can add and remove advertisements
 * @returns {div} - React Component div
 */
function UpdateAdvertisementView() {
    const [newImage, setnewImage] = useState({});
    const [advertisements, setAdvertisements] = useState({
    });
    const [deletedAdvertisements, setdeletedAdvertisements] = useState([
    
    ]);

    /*
        fetch existing advertisements and store them in a state variable
    */
    useEffect(()=>
    {
        firebase.firestore()
        .collection(KEYS.DATABASE.COLLECTIONS.ADVERTISEMENT)
        .doc("list")
        .get().then((record)=> {
            if (record && record.data()) {
                setAdvertisements(record.data());
            }
        });
    },[])

    
    /*
        store the selected image in local storage
    */
    const handleChange = e => {
        if(e.target.files[0]) {
            setnewImage(e.target.files[0]);
        }
    };

    /*
        upload the image to firebase
    */
    const handleUploadClick = () => {
        //console.log(newImage);
        const key = Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);
        const refer = firebase.storage().ref(`advertisements/${key}`).put(newImage);
        refer.on(
            "state_changed",
            snapshot => {},
            error => {
                console.log(error);
            },
            () => {
                firebase.storage()
                .ref(`advertisements/${key}`)
                .getDownloadURL()
                .then(url => {
                    // add the downloadable url to advertisement list
                    //console.log(url);
                    const temp = {...advertisements, [key] : url};
                    firebase.firestore()
                    .collection(KEYS.DATABASE.COLLECTIONS.ADVERTISEMENT)
                    .doc("list")
                    .set(temp)
                    setAdvertisements(temp);
                })
            }
        );
    };

    /*
        In case admin doesn't want to save changes to database, it will be fetched again from firebase
    */
    function discardChanges(){
        setdeletedAdvertisements([]);
        setAdvertisements({});
        firebase.firestore()
        .collection(KEYS.DATABASE.COLLECTIONS.ADVERTISEMENT)
        .doc("list")
        .get().then((record)=> {
            if (record && record.data()) {
                setAdvertisements(record.data());
            }
        });
    }

    /*
        In case admin confirm changes, it will be modified in the firebase as well
    */
    function confirmChanges(){
        firebase.firestore()
        .collection(KEYS.DATABASE.COLLECTIONS.ADVERTISEMENT)
        .doc("list")
        .set(advertisements);
        // delete images from storage as well
        deletedAdvertisements.map((key)=>{
            const ref=firebase.storage().ref(`advertisements/${key}`);
            ref.delete().then(()=>{
                console.log(key+"deleted successfully");
            }).catch((error)=>{
                console.log(error);
            })
        });
        setdeletedAdvertisements([]);
        //console.log("firestore updated");
    }

    /*
        Function to delete advertisement
    */
    function handleDelete(item){
        //console.log(item);
        const extra = [...deletedAdvertisements, item];
        setdeletedAdvertisements(extra);
        const temp = {...advertisements};
        delete temp[item];
        setAdvertisements(temp);
        // firebase.firestore()
        // .collection(KEYS.DATABASE.COLLECTIONS.ADVERTISEMENT)
        // .doc("list")
        // .set(advertisements)
    }
    return (
        <div>
            <h1 class="title">Advertisements</h1>
            <div style={{textAlign: "center"}}>
                <Button class="confirmButton" onClick={confirmChanges}>Upload Changes</Button>
                <Button class="discardButton" onClick={discardChanges}>Discard Changes</Button>
            </div>
            <div style={{textAlign: "center"}}>
                <h3 style={{margin: "15px"}}>Add Advertisement</h3>
            </div>
            <div style={{textAlign: "center"}}>
                <input type="file" onChange={handleChange}/>
                <button onClick={handleUploadClick}>Upload</button>
            </div>
            {
                Object.keys(advertisements).map((item) => {
                    //console.log(advertisements);
                    return (
                        <div key={item} style={{display: 'inline-flex', flexDirection: 'column', width: "30%"}}>
                            <div style={{display: 'flex', flexDirection: 'row', alignSelf: 'center'}}>
                                <img class="itemContainer" src={advertisements[item]} alt="Advertisement Image" />
                            </div>
                            <Button class="deleteButton" onClick={() =>{
                                handleDelete(item)
                            }}>Delete Advertisement</Button>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default UpdateAdvertisementView
