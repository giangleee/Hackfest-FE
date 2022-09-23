import cloneDeep from 'lodash'

export function deepFreeze (obj) {
    Object.keys(obj).forEach((props) => {
        if (obj[props]
            && (typeof obj[props] === 'object' || typeof obj[props] === 'function')
            && !Object.isFrozen(obj[props])) {
                obj[props] = deepFreeze(obj[props])
            }
    })
}

export function deepMelt (obj) {
    return cloneDeep(obj)
}

export default { deepFreeze, deepMelt }