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
            <div class="subViewTitle" style = {{marginBottom: "2%"}}>
                <h3>User Details</h3>
            </div>
            <div className = 'orderData'>
                <div className = 'textFieldView'>
                <TextField className = 'textField' InputProps={{ classes }} label="Name" />
                <TextField className = 'textField' InputProps={{ classes }} label="Mobile Number" />
                <TextField className = 'textField' InputProps={{ classes }} label="Email" />
                <TextField className = 'textField' InputProps={{ classes }} label="Creation Time" />
                </div>
                <div className = 'textFieldView'>
                
                </div>
            </div>

            <div class="userButtonView">
                <Button style={{backgroundColor: "#82E0AA", margin:'2%'}}>Accept Changes</Button>
                <Button style={{backgroundColor: "#D98880", margin:'2%'}}>Discard Changes</Button>
            </div>
        </div>)
}

export default UserDetails