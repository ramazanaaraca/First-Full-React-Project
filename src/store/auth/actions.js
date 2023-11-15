import store from "../index"
import { _setUser , _removeUser } from "./auth"

export const setUser = data => store.dispatch(_setUser(data))
export const removeUser = () => store.dispatch(_removeUser())