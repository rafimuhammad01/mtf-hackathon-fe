import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'
import authReducer from './auth/reducers'
import kursusReducer from './pusatKursus/reducers'
import trainingReducer from './training/reducers'

const reducers = {
    auth: authReducer,
    kursus: kursusReducer,
    training: trainingReducer
}

const rootReducer = combineReducers(reducers)
const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)))

export { store }