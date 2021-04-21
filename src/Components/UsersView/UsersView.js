import React from 'react'
import ListUsers from './ListUsers'
import UserDetails from './UserDetails'
function UsersView() {
    return (
        <div>
            <h1 className="title">User's Info</h1>
            <ListUsers></ListUsers>
            <UserDetails></UserDetails>
        </div>
    )
}

export default UsersView
