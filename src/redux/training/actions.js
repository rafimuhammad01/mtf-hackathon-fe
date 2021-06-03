import {
	GET_TRAINING_REQUEST,
	GET_TRAINING_SUCCESS,
	GET_TRAINING_ERROR,
	GET_TRAINING_BY_DATE_REQUEST,
	GET_TRAINING_BY_DATE_SUCCESS,
	GET_TRAINING_BY_DATE_ERROR,
	GET_TRAINING_BY_ID_REQUEST,
	GET_TRAINING_BY_ID_SUCCESS,
	GET_TRAINING_BY_ID_ERROR,
	CREATE_TRAINING_ADMIN_REQUEST,
	CREATE_TRAINING_ADMIN_SUCCESS,
	CREATE_TRAINING_ADMIN_ERROR,
	GET_TRAINING_ADMIN_REQUEST,
	GET_TRAINING_ADMIN_SUCCESS,
	GET_TRAINING_ADMIN_ERROR,
} from './actionTypes'


export const getTrainingRequest = () => ({
	type: GET_TRAINING_REQUEST
})

export const getTrainingSuccess = data => ({
	type: GET_TRAINING_SUCCESS,
	payload: { data }
})

export const getTrainingError = message => ({
	type: GET_TRAINING_ERROR,
	payload: { message}
})

export const getTrainingByDateRequest = () => ({
	type: GET_TRAINING_BY_DATE_REQUEST
})

export const getTrainingByDateSuccess = data => ({
	type: GET_TRAINING_BY_DATE_SUCCESS,
	payload: { data }
})

export const getTrainingByDateError = message => ({
	type: GET_TRAINING_BY_DATE_ERROR,
	payload: { message}
})

export const getTrainingByIdRequest = () => ({
	type: GET_TRAINING_BY_ID_REQUEST
})

export const getTrainingByIdSuccess = data => ({
	type: GET_TRAINING_BY_ID_SUCCESS,
	payload: { data }
})

export const getTrainingByIdError = message => ({
	type: GET_TRAINING_BY_ID_ERROR,
	payload: { message}
})

export const createTrainingAdminRequest = () => ({
	type: CREATE_TRAINING_ADMIN_REQUEST
})

export const createTrainingAdminSuccess = message => ({
	type: CREATE_TRAINING_ADMIN_SUCCESS,
	payload: { message }
})

export const createTrainingAdminError = message => ({
	type: CREATE_TRAINING_ADMIN_ERROR,
	payload: { message}
})

export const getTrainingAdminRequest = () => ({
	type: GET_TRAINING_ADMIN_REQUEST
})

export const getTrainingAdminSuccess = message => ({
	type: GET_TRAINING_ADMIN_SUCCESS,
	payload: { message }
})

export const getTrainingAdminError = message => ({
	type: GET_TRAINING_ADMIN_ERROR,
	payload: { message}
})