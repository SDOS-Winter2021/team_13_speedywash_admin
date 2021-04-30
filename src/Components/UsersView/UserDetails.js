/**
 * @module
 */
import React, { useState, useEffect } from 'react';
import "./styles.css"
import { Button } from '@material-ui/core';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';

/**
 * Renders the pane to display user details.
 * @param {Object} props - An object which contain details of the selected user
 * @returns {div} - React Component div
 */

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
                    <TextField className = "textField" InputProps={{ classes }} label="Name" value={props.selectedUser.displayName}/>
                    <TextField className = "textField" InputProps={{ classes }} label="Mobile Number" value={props.selectedUser.phoneNumber}/>
                    <TextField className = "textField" InputProps={{ classes }} style={{width:'40%'}} label="Email" value={props.selectedUser.email} />
                </div>
                <div className = 'textFieldView'>
                    <TextField className = "textField" InputProps={{ classes }} style={{paddingRight:'5%',width:'90%'}} label="Home Address" value={props.selectedUser.home}/>
                </div>
                <div className = 'textFieldView'>
                    <TextField className = "textField" InputProps={{ classes }} style={{paddingRight:'5%',width:'90%'}} label="Office Address" value={props.selectedUser.office}/>
                </div>
                <div className = 'textFieldView' styles = {{margin: '10px'}}>
                    <TextField className = "textField" InputProps={{ classes }} style={{paddingRight:'5%',width:'90%'}} label="Other Address" defaultValue={props.selectedUser.other}/>
                </div>
            </div>
        </div>)
}

export default UserDetails