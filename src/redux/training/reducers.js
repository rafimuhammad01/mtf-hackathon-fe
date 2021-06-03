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

const initialState = {
	loading: false,
	success: false,
	error: false,
	message: null,
	training: [],
	detail: {}
}

const trainingReducer = (state = initialState, action) => {
	const { type, payload } = action

	switch (type) {
		case GET_TRAINING_REQUEST:
		case GET_TRAINING_BY_DATE_REQUEST:
		case GET_TRAINING_BY_ID_REQUEST:
		case CREATE_TRAINING_ADMIN_REQUEST:
		case GET_TRAINING_ADMIN_REQUEST: {
			return {
				...state,
				loading: true,
				success: false,
				error: false,
				message: null,
			}
		}

		default:
			return state
	}
}

export default trainingReducer