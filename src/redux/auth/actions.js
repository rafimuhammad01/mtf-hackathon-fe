import {
	DO_LOGIN_REQUEST,
	DO_LOGIN_SUCCESS,
	DO_LOGIN_ERROR,
	DO_LOGOUT_REQUEST,
	DO_REGISTER_REQUEST,
	DO_REGISTER_SUCCESS,
	DO_REGISTER_ERROR,
	DO_REFRESH_TOKEN_REQUEST,
	DO_REFRESH_TOKEN_SUCCESS,
	DO_REFRESH_TOKEN_ERROR,
} from './actionTypes'

export const doLoginRequest = () => ({
	type: DO_LOGIN_REQUEST
})

export const doLoginSuccess = token => ({
	type: DO_LOGIN_SUCCESS,
	payload: { token }
})

export const doLoginError = message => ({
	type: DO_LOGIN_ERROR,
	payload: { message }
})

export const doLogoutRequest = () => ({
	type: DO_LOGOUT_REQUEST
})

export const doRegisterRequest = () => ({
	type: DO_REGISTER_REQUEST
})

export const doRegisterSuccess = message => ({
	type: DO_REGISTER_SUCCESS,
	payload: { message }
})

export const doRegisterError = message => ({
	type: DO_REGISTER_ERROR,
	payload: { message }
})

export const doRefreshTokenRequest = () => ({
	type: DO_REFRESH_TOKEN_REQUEST
})

export const doRefreshTokenSuccess = message => ({
	type: DO_REFRESH_TOKEN_SUCCESS,
	payload: { message }
})

export const doRefreshTokenError = message => ({
	type: DO_REFRESH_TOKEN_ERROR,
	payload: { message }
})
