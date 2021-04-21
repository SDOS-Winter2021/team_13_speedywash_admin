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
    //console.log(users);

    return (
        <div>
            <h1 className="title">User's Info</h1>
            <div>
                {users.size !== '' ?  <ListUsers
                users = {users} 
                setUsers = {setUsers}
                selectedUser = {selectedUser} 
                setSelectedUser = {setSelectedUser}>
                </ListUsers>: null}
                
            {selectedUser !== '' ? <UserDetails
            selectedUser = {selectedUser}
            setSelectedUser = {setSelectedUser}>
            </UserDetails> : null}
            </div>
        </div>
    )
}

export default UsersView
