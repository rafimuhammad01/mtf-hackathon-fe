import {
	getKursusRequest,
	getKursusSuccess,
	getKursusError,
	buyKursusRequest,
	buyKursusSuccess,
	buyKursusError,
	getKursusByIdRequest,
	getKursusByIdSuccess,
	getKursusByIdError,
	getLessonByIdRequest,
	getLessonByIdSuccess,
	getLessonByIdError,
	setLessonIsCompleteRequest,
	setLessonIsCompleteSuccess,
	setLessonIsCompleteError,
} from './actions'
import { request } from '../../utils'

export const getKursusAction = () => async (dispatch, getState) => {
	const { auth } = getState()

	try {
		dispatch(getKursusRequest())
		const config = {
			headers: {
				'Authorization' : `Bearer ${auth?.token?.access}`
			}
		}
		request('get', '/course/', null, config)
			.then(res => dispatch(getKursusSuccess(res.data)))
			.catch(err => dispatch(getKursusError(err)))
	} catch(err){
		 dispatch(getKursusError(err))
	}
}

export const buyKursusAction = id => async (dispatch, getState) => {
	const { auth } = getState()

	try {
		dispatch(buyKursusRequest())
		const config = {
			headers: {
				'Authorization' : `Bearer ${auth?.token?.access}`
			}
		}
		request('post', `/course/${id}`, null, config)
			.then(res => dispatch(buyKursusSuccess('Success')))
			.catch(err => dispatch(buyKursusError(err)))
	} catch(err){
		 dispatch(buyKursusError(err))
	}
}

export const getKursusByIdAction = id => async (dispatch, getState) => {
	const { auth } = getState()

	try {
		dispatch(getKursusByIdRequest())
		const config = {
			headers: {
				'Authorization' : `Bearer ${auth?.token?.access}`
			}
		}
		request('get', `/course/${id}`, null, config)
			.then(res => dispatch(getKursusByIdSuccess(res.data)))
			.catch(err => dispatch(getKursusByIdError(err)))
	} catch(err){
		 dispatch(getKursusByIdError(err))
	}
}

export const getLessonByIdAction = id => async (dispatch, getState) => {
	const { auth } = getState()

	try {
		dispatch(getLessonByIdRequest())
		const config = {
			headers: {
				'Authorization' : `Bearer ${auth?.token?.access}`
			}
		}
		request('get', `/course/lesson/${id}`, null, config)
			.then(res => dispatch(getLessonByIdSuccess(res.data)))
			.catch(err => dispatch(getLessonByIdError(err)))
	} catch(err){
		 dispatch(getLessonByIdError(err))
	}
}

export const setLessonIsCompleteAction = id => async (dispatch, getState) => {
	const { auth } = getState()

	try {
		dispatch(setLessonIsCompleteRequest())
		const config = {
			headers: {
				'Authorization' : `Bearer ${auth?.token?.access}`
			}
		}
		request('post', `/course/lesson/${id}`, null, config)
			.then(res => dispatch(setLessonIsCompleteSuccess('Success')))
			.catch(err => dispatch(setLessonIsCompleteError(err)))
	} catch(err){
		 dispatch(setLessonIsCompleteError(err))
	}
}

