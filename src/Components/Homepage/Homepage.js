import React from 'react'
import Header from "../Header/Header"


function Homepage({ user, setUser }) {

    return (
        <div>
            <Header user={user} setUser={setUser}/>
        </div>
    )
}

export default Homepage
