/* eslint-disable no-unused-vars */
/* global axios, route */
// Promise function

const actions = {
    async SOME_TEMP_FUNCTION({commit}) {
        return new Promise((resolve, reject) => {
            axios
                .get()
                .then((response) => {
                    resolve(response);
                })
                .catch((error) => {
                    reject(error);
                });
        });
    },
    async LOGIN({commit}, payload) {
        return new Promise((resolve, reject) => {
            axios
                .post("https://localhost:8888/api/auth/login", {...payload})
                .then((response) => {
                    console.log(response)
                    resolve(response);
                })
                .catch((error) => {
                    reject(error);
                });
        });
    },
};

export default actions;
