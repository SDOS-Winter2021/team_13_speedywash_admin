import keys from "../configs/KEYS"

/*
    Returns null either when key is not present or cached value is expired the timeout
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
export function setValue(key, value, timeout) {
    const creationTime = (new Date()).getTime()
    const expiryTime = creationTime + timeout
    const newObj = {
        data: value,
        timeout: expiryTime
    }
    localStorage.setItem(key, JSON.stringify(newObj))
}

export function removeValue(key) {
    localStorage.removeItem(key);
}

export function cleanCache() {
    const values = Object.values(keys.storage)
    for (var i = 0; i < values.length; i++) {
        removeValue(values[i])
    }
}