import {
	DO_LOGIN_REQUEST,
	DO_LOGIN_SUCCESS,
	DO_LOGIN_ERROR,
	DO_REGISTER_REQUEST,
	DO_REGISTER_SUCCESS,
	DO_REGISTER_ERROR,
	DO_LOGOUT_REQUEST,
	DO_REFRESH_TOKEN_REQUEST,
	DO_REFRESH_TOKEN_SUCCESS,
	DO_REFRESH_TOKEN_ERROR,
} from './actionTypes'


const initialState = {
	loading: false,
	success: false,
	error: false,
	message: null,
	isAuthenticated: false,
	token: null,
}

const authReducer = (state = initialState, action) => {

	const { type, payload } = action

	switch(type){
		case DO_LOGIN_REQUEST:
		case DO_REGISTER_REQUEST: {
			return {
				...state,
				loading: true,
				success: false,
				error: false,
				message: null,
				isAuthenticated: false,
				token: null,
			}
		}

		case DO_LOGIN_SUCCESS: {
			const { token } = payload

			return {
				...state,
				loading: false,
				success: true,
				isAuthenticated: true,
				token: token
			}
		}

		case DO_REGISTER_SUCCESS: {
			const { message } = payload

			return {
				...state,
				loading: false,
				success: true,
				message: message
			}
		}

		case DO_LOGIN_ERROR:
		case DO_REGISTER_ERROR: {
			const { message } = payload

			return {
				...state,
				loading: false,
				error: true,
				message: message
			}
		}

		case DO_LOGOUT_REQUEST: {
			return {
				...state,
				loading: false,
				success: false,
				error: false,
				message: null,
				isAuthenticated: false,
				token: null,
			}
		}

		default:
			return state
	}
}

export default authReducer