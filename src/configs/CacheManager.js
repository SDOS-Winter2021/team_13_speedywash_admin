/**
 * @module
 */
import keys from "../configs/KEYS"

/**
 * Returns null either when key is not present or cached value is expired the timeout
 * @param {string} key -  mapping key corresponding to the item required
 * @returns {data} - reference to getter function
 */
export function getValue(key) {
    var value = localStorage.getItem(key)
    if (value == null)
        return null;
    value = JSON.parse(value)
    if (value.timeout < (new Date()).getTime())
        return null;
    else
        return value.data;
}

/*
    * Make sure key is unique
    * value must be an object
    * timeout in milliseconds
*/
/**
 * 
 * @param {string} key - key to which value must be mapped in cache, used in while calling getValue
 * @param {Object} value - Object to store in cache
 * @param {number} timeout - after this many milliseconds, this item will expire.
 */
export function setValue(key, value, timeout) {
    const creationTime = (new Date()).getTime()
    const expiryTime = creationTime + timeout
    const newObj = {
        data: value,
        timeout: expiryTime
    }
    localStorage.setItem(key, JSON.stringify(newObj))
}

/**
 * 
 * @param {string} key - key to the corresponding item that is needed to be removed form cache 
 * 
 */
export function removeValue(key) {
    localStorage.removeItem(key);
}

/**
 * Removes all the values from cache that were stored, keys are fetched from keys.storage
 */
export function cleanCache() {
    const values = Object.values(keys.storage)
    for (var i = 0; i < values.length; i++) {
        removeValue(values[i])
    }
}