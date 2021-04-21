import React, { useState, useEffect } from 'react';
import "./styles.css"
import { Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import TextField from '@material-ui/core/TextField';
import UserItem from './UserItem'

function ListUsers(props){

    const useStyles = makeStyles((theme) => ({
        formControl: {
          margin: theme.spacing(1),
          minWidth: 120,
        },
        selectEmpty: {
          marginTop: theme.spacing(2),
        },
      }));

    const classes = useStyles();

    //filter for search bar
    const [filter, setFilter] = React.useState('');
    
      const handleChange = (event) => {
        setFilter(event.target.value);
      };

    return (
        <div class ="ListUsersView">
      <div style={{textAlign:'center'}}>
        <TextField className = 'textField' style={{margin:'3%'}} label='Search' defaultValue={filter}/>
        <FormControl variant="outlined" className={classes.formControl} style={{margin:'3%'}}>
          <InputLabel id="FilterID">Filter</InputLabel>
          <Select
            labelId="FilterLabel"
            id="FilterID"
            value={filter}
            onChange={handleChange}
            label="Filter"
          >
            <MenuItem value="">
              <em>None</em>
            </MenuItem>
            <MenuItem value={"Name"}>Name</MenuItem>
            <MenuItem value={"Mobile"}>Mobile</MenuItem>
          </Select>
        </FormControl>
      </div>
      </div>
    )

}

export default ListUsers