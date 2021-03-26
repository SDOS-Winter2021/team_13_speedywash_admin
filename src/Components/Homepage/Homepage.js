import React from 'react'

function Homepage({ user, setUser }) {
    return (
        <div>
            <h1>
                {`Hi, ${user.name}`}
            </h1>
        </div>
    )
}

export default Homepage
