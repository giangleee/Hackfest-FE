/* global axios, route */
// Promise function

const actions = {
    async SOME_TEMP_FUNCTION ({ commit }) {
        return new Promise((resolve, reject) => {
            axios.get().then((response) => {
                resolve(response)
            }).catch((error) => {
                reject(error)
            })
        })
    }
}

export default actions