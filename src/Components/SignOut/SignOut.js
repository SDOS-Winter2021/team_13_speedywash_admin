/**
 * @module
 */
import React, { useEffect } from 'react'
import { removeValue } from "../../configs/CacheManager"
import KEYS from "../../configs/KEYS"
import firebase from "firebase";

/**
 * 
 * @param {Object} obj - Object which contains user data and function to set current user
 * @returns {div} - React component div
 */
function SignOut({ user, setUser }) {

    useEffect(() => {
        firebase.auth().signOut().then(() => {
            removeValue(KEYS.LOCAL_STORAGE.USER)
            setUser(null)
        })
    }, [])
    
    return (
        <div>
            <h1 style={{textAlign: 'center'}}>
                We are signing you out
            </h1>
        </div>
    )
}

export default SignOut
