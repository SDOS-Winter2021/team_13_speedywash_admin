import React, { useState } from 'react';
import TextField from '@material-ui/core/TextField';
import "./styles.css"
import firebase from "firebase";
import { Button } from '@material-ui/core';
import KEYS from '../../configs/KEYS';
import Snackbar from '@material-ui/core/Snackbar';
import Alert from '@material-ui/lab/Alert';

function CreateNewAdminView() {

    const [snackObject, setsnackObject] = useState({
        open: false,
        message: "User Created Successfully",
        type: "success",
    })

    const [adminDetails, setAdminDetails] = useState({
        Email: "",
        Name: "",
        Roll: ""
    })

    function handleSnackBarClosing() {
        setsnackObject((prev) => {
            return { ...prev, open: false }
        })
    }

    function handleSubmitAction() {
        firebase.firestore()
            .collection(KEYS.DATABASE.COLLECTIONS.ADMINS)
            .doc(adminDetails.Email)
            .set(adminDetails)
            .then(() => {
                setAdminDetails({
                    Email: "",
                    Name: "",
                    Roll: ""
                });
                setsnackObject((prev) => (
                    { ...prev, open: true }
                ))
            })
    }

    return (
        <div class={"formDiv"} >
            <TextField required value={adminDetails.Email} onChange={(event) => { setAdminDetails((prev) => ({ ...prev, Email: event.target.value })) }} id="standard-basic" label="Email" autoComplete="off" autoFocus={true} />
            <br />
            <TextField required value={adminDetails.Name} onChange={(event) => { setAdminDetails((prev) => ({ ...prev, Name: event.target.value })) }} id="standard-basic" label="Name" autoComplete="off" />
            <br />
            <TextField required value={adminDetails.Roll} onChange={(event) => { setAdminDetails((prev) => ({ ...prev, Roll: event.target.value })) }} id="standard-basic" label="Roll" autoComplete="off" />
            <br /><br />
            <Button variant="contained" disabled={adminDetails.Email == "" || adminDetails.Name == "" || adminDetails.Roll == ""} color="primary" onClick={handleSubmitAction} >Create Account</Button>
            <Snackbar open={snackObject.open} autoHideDuration={3000}
                onClose={handleSnackBarClosing}>
                <Alert onClose={handleSnackBarClosing} severity={snackObject.type}>
                    {snackObject.message}
                </Alert>
            </Snackbar>
        </div>
    )
}

export default CreateNewAdminView
