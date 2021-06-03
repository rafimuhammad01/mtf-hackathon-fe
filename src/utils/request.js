import axios from 'axios'
import { BASE_API_URL } from '../config'

export const request = ( method, endpoint = null, data = null, rest = null ) => {
	const config = {
		method,
		url: BASE_API_URL + endpoint,
		data: data,
		...rest
	}

	const promise = new Promise((resolve, reject) => {
		axios(config)
			.then(response => resolve(response.data))
			.catch(error => reject(error))
	})

	return promise
}