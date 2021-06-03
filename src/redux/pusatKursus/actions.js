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

export const getKursusRequest = () => ({
	type: GET_KURSUS_REQUEST
})

export const getKursusSuccess = data => ({
	type: GET_KURSUS_SUCCESS,
	payload: { data }
})

export const getKursusError = message => ({
	type: GET_KURSUS_ERROR,
	payload: { message }
})

export const buyKursusRequest = () => ({
	type: BUY_KURSUS_REQUEST
})

export const buyKursusSuccess = message => ({
	type: BUY_KURSUS_SUCCESS,
	payload: { message }
})

export const buyKursusError = message => ({
	type: BUY_KURSUS_ERROR,
	payload: { message }
})

export const getKursusByIdRequest = () => ({
	type: GET_KURSUS_BY_ID_REQUEST
})

export const getKursusByIdSuccess = data => ({
	type: GET_KURSUS_BY_ID_SUCCESS,
	payload: { data }
})

export const getKursusByIdError = message => ({
	type: GET_KURSUS_BY_ID_ERROR,
	payload: { message }
})

export const getLessonByIdRequest = () => ({
	type: GET_LESSON_BY_ID_REQUEST
})

export const getLessonByIdSuccess = data => ({
	type: GET_LESSON_BY_ID_SUCCESS,
	payload: { data }
})

export const getLessonByIdError = message => ({
	type: GET_LESSON_BY_ID_ERROR,
	payload: { message }
})

export const setLessonIsCompleteRequest = () => ({
	type: SET_LESSON_IS_COMPLETE_REQUEST
})

export const setLessonIsCompleteSuccess = message => ({
	type: SET_LESSON_IS_COMPLETE_SUCCESS,
	payload: { message }
})

export const setLessonIsCompleteError = message => ({
	type: SET_LESSON_IS_COMPLETE_ERROR,
	payload: { message }
})