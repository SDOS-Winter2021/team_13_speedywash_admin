import React, { useState, useEffect } from 'react';
import "./styles.css"
import { Button } from '@material-ui/core';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';

function UserDetails(props){
    const useStyles = makeStyles({
        underline: {
          "&&&:before": {
            borderBottom: "none"
          },
          "&&:after": {
            borderBottom: "none"
          }
        }
      });
      const classes = useStyles();
      
      return (
        <div class ="userDetails">
            <div class="subViewTitle" style = {{marginBottom: "4%"}}>
                <h3>User Details</h3>
            </div>
            <div className = 'orderData'>
                <div className = 'textFieldView' >
                    <TextField className = "textField" InputProps={{ classes }} label="Name" defaultValue={props.selectedUser.displayName}/>
                    <TextField className = "textField" InputProps={{ classes }} label="Mobile Number" defaultValue={props.selectedUser.phoneNumber}/>
                    <TextField className = "textField" InputProps={{ classes }} style={{width:'40%'}} label="Email" defaultValue={props.selectedUser.email} />
                </div>
                <div className = 'textFieldView'>
                    <TextField className = "textField" InputProps={{ classes }} style={{paddingRight:'5%',width:'90%'}} label="Home Address" defaultValue={props.selectedUser.home}/>
                </div>
                <div className = 'textFieldView'>
                    <TextField className = "textField" InputProps={{ classes }} style={{paddingRight:'5%',width:'90%'}} label="Office Address" defaultValue={props.selectedUser.office}/>
                </div>
                <div className = 'textFieldView'>
                    <TextField className = "textField" InputProps={{ classes }} style={{paddingRight:'5%',width:'90%'}} label="Other Address" defaultValue={props.selectedUser.other}/>
                </div>
            </div>

            <div class="userButtonView">
                <Button style={{backgroundColor: "#82E0AA", margin:'2%'}}>Accept Changes</Button>
                <Button style={{backgroundColor: "#D98880", margin:'2%'}}>Discard Changes</Button>
            </div>
        </div>)
}

export default UserDetails