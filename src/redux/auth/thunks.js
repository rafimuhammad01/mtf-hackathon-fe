import {
	doLoginRequest,
	doLoginSuccess,
	doLoginError,
	doRegisterRequest,
	doRegisterSuccess,
	doRegisterError,
} from './actions'
import { request } from '../../utils'

export const doLoginAction = data => async (dispatch, getState) => {
	try {
		dispatch(doLoginRequest())
		request('post', '/auth/login/', data)
			.then(res => dispatch(doLoginSuccess(res)))
			.catch(err => dispatch(doLoginError(err)))
	} catch(err){
		dispatch(doLoginError(err))
	}
}

export const doRegisterAction = data => async (dispatch, getState) => {
	try {
		dispatch(doRegisterRequest())
		request('post', '/auth/register/', data)
			.then(res => dispatch(doRegisterSuccess('Successfully registered')))
			.catch(err => dispatch(doRegisterError('Something went wrong')))
	} catch(err){
		dispatch(doRegisterError(err))
	}
}