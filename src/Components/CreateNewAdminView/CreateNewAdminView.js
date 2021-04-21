import React, { useState } from 'react';
import TextField from '@material-ui/core/TextField';
import "./styles.css"
import firebase from "firebase";
import { Button, FormControl, MenuItem } from '@material-ui/core';
import KEYS from '../../configs/KEYS';
import Snackbar from '@material-ui/core/Snackbar';
import Alert from '@material-ui/lab/Alert';
import Select from '@material-ui/core/Select';
import InputLabel from '@material-ui/core/InputLabel';

function CreateNewAdminView() {

    const [snackObject, setsnackObject] = useState({
        open: false,
        message: "User Created Successfully",
        type: "success",
    })

    const [adminDetails, setAdminDetails] = useState({
        Email: "",
        Name: "",
        Roll: "Employee"
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
                    Roll: "Employee"
                });
                setsnackObject((prev) => (
                    { ...prev, open: true }
                ))
            })
    }

    return (
        <div class={"formDiv"} >
            <TextField style={{marginBottom:'1.2%', marginTop: '2%'}} required value={adminDetails.Email} onChange={(event) => { setAdminDetails((prev) => ({ ...prev, Email: event.target.value })) }} id="standard-basic" label="Email" autoComplete="off" autoFocus={true} />
            <br />
            <TextField style={{marginBottom:'1.2%'}} required value={adminDetails.Name} onChange={(event) => { setAdminDetails((prev) => ({ ...prev, Name: event.target.value })) }} id="standard-basic" label="Name" autoComplete="off" />
            <br />
            <br />
            
            <InputLabel style ={{}}>Account Type</InputLabel>
            <Select
                style={{  }}
                labelId="Select account type"
                value={adminDetails.Roll}
                onChange={(e) => setAdminDetails((prev) => ({ ...prev, Roll: e.target.value }))} >
                <MenuItem value={"Admin"}>Admin</MenuItem>
                <MenuItem value={"Employee"}>Employee</MenuItem>
            </Select>
            <br /><br />
            <Button style={{marginBottom:'5%'}} variant="contained" disabled={adminDetails.Email == "" || adminDetails.Name == "" || adminDetails.Roll == ""} color="primary" onClick={handleSubmitAction} >Create Account</Button>
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
