import mutations from "./mutations";
import getters from "./getters";
import actions from './actions'
import initialState from './state'
import { deepMelt } from "@/utils/function";

export const state = deepMelt(initialState)

export default {
    namespaced: true,
    state,
    mutations,
    getters,
    actions,
}