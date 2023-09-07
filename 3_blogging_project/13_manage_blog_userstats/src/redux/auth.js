// action types

export const LOGIN = 'LOGIN'
export const LOGOUT = 'LOGOUT'
export const REGISTER = 'REGISTER'

// action creators
export const login = (user) => ({ type: LOGIN, user })
export const logout = () => ({ type: LOGOUT })
export const register = (user) => ({ type: REGISTER, user })
