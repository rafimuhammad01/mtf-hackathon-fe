import {
	GET_KURSUS_REQUEST,
	GET_KURSUS_SUCCESS,
	GET_KURSUS_ERROR,
	BUY_KURSUS_REQUEST,
	BUY_KURSUS_SUCCESS,
	BUY_KURSUS_ERROR,
	GET_KURSUS_BY_ID_REQUEST,
	GET_KURSUS_BY_ID_SUCCESS,
	GET_KURSUS_BY_ID_ERROR,
	GET_LESSON_BY_ID_REQUEST,
	GET_LESSON_BY_ID_SUCCESS,
	GET_LESSON_BY_ID_ERROR,
	SET_LESSON_IS_COMPLETE_REQUEST,
	SET_LESSON_IS_COMPLETE_SUCCESS,
	SET_LESSON_IS_COMPLETE_ERROR,
} from './actionTypes'

const initialState = {
	loading: false,
	success: false,
	error: false,
	message: null,
	kursus: [],
	detail: {},
	lesson: {}
}

const kursusReducer = (state = initialState, action) => {
	const { type, payload } = action

	switch(type){
		case GET_KURSUS_REQUEST:
		case BUY_KURSUS_REQUEST: 
		case GET_KURSUS_BY_ID_REQUEST: 
		case GET_LESSON_BY_ID_REQUEST: 
		case SET_LESSON_IS_COMPLETE_REQUEST: {
			return {
				...state,
				loading: true,
				success: false,
				error: false,
				message: null,
			}
		}

		case GET_KURSUS_SUCCESS: {
			const { data } = payload 

			return {
				...state,
				loading: false,
				success: true,
				kursus: data
			}
		}

		case BUY_KURSUS_SUCCESS: 
		case SET_LESSON_IS_COMPLETE_SUCCESS: {
			const { message } = payload 

			return {
				...state,
				loading: false,
				success: true,
				message: message
			}
		}

		case GET_KURSUS_BY_ID_SUCCESS: {
			const { data } = payload 

			return {
				...state,
				loading: false,
				success: true,
				detail: data
			}
		}

		case GET_LESSON_BY_ID_SUCCESS: {
			const { data } = payload 

			return {
				...state,
				loading: false,
				success: true,
				lesson: data
			}
		}

		case GET_KURSUS_ERROR: 
		case BUY_KURSUS_ERROR: 
		case GET_KURSUS_BY_ID_ERROR: 
		case GET_LESSON_BY_ID_ERROR: 
		case SET_LESSON_IS_COMPLETE_ERROR: {
			const { message } = payload

			return {
				...state,
				loading: false,
				error: true,
				message: message
			}
		}

		default:
			return state
	}
}

export default kursusReducer