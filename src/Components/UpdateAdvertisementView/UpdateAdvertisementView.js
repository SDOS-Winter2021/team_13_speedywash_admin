import React, { useState, useEffect } from 'react';
import "./styles.css"
import { Button } from '@material-ui/core';
import firebase from "firebase";

function UpdateAdvertisementView() {
    const [newImage, setnewImage] = useState({});
    const [advertisements, setAdvertisements] = useState("");
    const [newURL, setnewURL] = useState("");
    
    // store the selected image in local storage
    const handleChange = e => {
        if(e.target.files[0]) {
            setnewImage(e.target.files[0]);
        }
    };

    // upload the image to firebase
    const handleUploadClick = () => {
        console.log(newImage);
        const refer = firebase.storage().ref('advertisements/image').put(newImage);
        refer.on(
            "state_changed",
            snapshot => {},
            error => {
                console.log(error);
            },
            () => {
                firebase.storage()
                .ref("advertisements")
                .child("image")
                .getDownloadURL()
                .then(url => {
                    console.log(url);
                    setnewURL(url);
                })
            }
        );
    };

    return (
        <div>
            <h1 class="title">Advertisements</h1>
            <h3 class="inlineElement">Edit Advertisement</h3>
            <input type="file" onChange={handleChange}/>
            <button onClick={handleUploadClick}>Upload</button>
        </div>
    )
}

export default UpdateAdvertisementView
