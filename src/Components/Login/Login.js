import React, { useState } from 'react'
import firebase from "firebase";
import { Button } from '@material-ui/core';
import Snackbar from '@material-ui/core/Snackbar';
import Alert from '@material-ui/lab/Alert';
import KEYS from "../../configs/KEYS"
import { setValue } from "../../configs/CacheManager"
import "./styles.css"


function Login({ setUser }) {

    // Snack bar object to report message to the user
    const [snackObject, setsnackObject] = useState({
        open: false,
        message: "",
        type: "",
    })

    /*
        * A user is authorized if and only if
        * 1. Authorized by google
        * 2. Database Admins Table contains email address entry for the same
        * If user is authorized then user hook will be updated 
        * user will be reported with results of login operation using snackbar
    */
    function checkIfAuthorized(user) {
        firebase.firestore()
            .collection(KEYS.DATABASE.COLLECTIONS.ADMINS)
            .doc(user.email)
            .get().then((record) => {
                if (record && record.data()) {
                    setValue(KEYS.LOCAL_STORAGE.USER, record.data(), KEYS.TIME.WEEK);
                    setUser(record.data());
                    setsnackObject({
                        open: true,
                        message: `Login Success`,
                        type: "success"
                    })
                }
                else {
                    setsnackObject({
                        open: true,
                        message: `Error: You're not Authorized`,
                        type: "error"
                    })
                }
            })
    }

    /*
        * Popup will appear to sign in with google
    */
    function initiateGoogleSignIn() {
        var provider = new firebase.auth.GoogleAuthProvider();
        firebase.auth().signInWithPopup(provider)
            .then((result) => {
                var user = result.user;
                checkIfAuthorized(user);
            })
            .catch((error) => {
                var errorMessage = error.message;
                setsnackObject({
                    open: true,
                    message: `Error: ${errorMessage}`,
                    type: "error"
                })
            })
    }

    /* 
        Will close Snack Bar
    */
    function handleSnackBarClosing() {
        setsnackObject((prev) => {
            return { ...prev, open: false }
        })
    }

    return (
        <div style={{marginTop: "20%"}} class="login">
            <Button variant="contained" color="primary" onClick={initiateGoogleSignIn} >Sign in with Google</Button>
            <Snackbar open={snackObject.open} autoHideDuration={3000}
                onClose={handleSnackBarClosing}>
                <Alert onClose={handleSnackBarClosing} severity={snackObject.type}>
                    {snackObject.message}
                </Alert>
            </Snackbar>
        </div>
    )
}

export default Login
