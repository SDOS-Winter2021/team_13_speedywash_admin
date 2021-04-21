import React, { useState, useEffect } from 'react'
import ListUsers from './ListUsers'
import UserDetails from './UserDetails'
import firebase from "firebase";
import KEYS from '../../configs/KEYS';

function UsersView() {

    const [users, setUsers] = useState('');
    const [selectedUser, setSelectedUser] = useState('');
    
    useEffect(()=>
    {
        firebase.firestore().collection(KEYS.DATABASE.COLLECTIONS.USERS).onSnapshot((records) => {
            let userList = [];
            setUsers([]);
            records.forEach((doc)=>{       
                userList.push(doc.data());
            }) 
            setUsers(userList);
        });
    },[])    
    console.log(users);

    return (
        <div>
            <h1 className="title">User's Info</h1>
            <ListUsers></ListUsers>
            <UserDetails></UserDetails>
        </div>
    )
}

export default UsersView
