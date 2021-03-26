import React, { useEffect } from 'react'
import { removeValue } from "../../configs/CacheManager"
import KEYS from "../../configs/KEYS"
import firebase from "firebase";


function SignOut({ user, setUser }) {
    useEffect(() => {
        firebase.auth().signOut().then(() => {
            removeValue(KEYS.LOCAL_STORAGE.USER)
            setUser(null)
        })
    }, [])
    return (
        <div>
            <h1>
                Sign out
            </h1>
        </div>
    )
}

export default SignOut
