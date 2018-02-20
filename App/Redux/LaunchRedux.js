import { createReducer, createActions } from 'reduxsauce'
import Immutable from 'seamless-immutable'

/* ------------- Types and Action Creators ------------- */

const { Types, Creators } = createActions({
  loginRequest: ['phone', 'password'],
  loginSuccess: ['user'],
  loginFailure: ['error']
})

export const LaunchTypes = Types
export default Creators

/* ------------- Initial State ------------- */

export const INITIAL_STATE = Immutable({
  phone: '',
  password: '',
  user: null,
  fetching: false,
  error: null
})

/* ------------- Selectors ------------- */

export const LaunchSelectors = {
  getUser: state => state.user
}

/* ------------- Reducers ------------- */

// login request
export const loginRequest = (state, { phone, password }) => {
  return state.merge({ fetching: true, phone, password })
}

// login success
export const loginSuccess = (state, { user }) => {
  console.log(`loginSuccess: ${user}`)
  return state.merge({ fetching: false, error: null, user })
}

// login error
export const loginFailure = (state, { error }) => {
  console.log(`loginFailure: ${error}`)
  return state.merge({ fetching: false, error: error.message })
}

/* ------------- Hookup Reducers To Types ------------- */

export const reducer = createReducer(INITIAL_STATE, {
  [Types.LOGIN_REQUEST]: loginRequest,
  [Types.LOGIN_SUCCESS]: loginSuccess,
  [Types.LOGIN_FAILURE]: loginFailure
})
