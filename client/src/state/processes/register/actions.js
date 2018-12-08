import {
    call,
    put,
    takeLatest
} from 'redux-saga/effects'

import * as api from './api'
import TYPES from './types'
import LocalStorage from '../../../utilities/local-storage'

export const name = 'registerActions'

export function registerUser({
    email,
    firstName,
    surname,
    username,
    password,
    confirmedPassword
}) {
    return {
        type: TYPES.REGISTER_USER_REQUEST,
        email,
        firstName,
        surname,
        username,
        password,
        confirmedPassword
    }
}

export function* executeRegisterUser({
    email,
    firstName,
    surname,
    username,
    password,
    confirmedPassword
}) {
    const url = api.registerUser.formatUrl()
    const body = api.registerUser.serialize({
        email,
        firstName,
        surname,
        username,
        password,
        confirmedPassword
    })
    try {
        LocalStorage.remove()
        const res = yield call(api.registerUser.request, url, body)
        LocalStorage.set(res.data.token)
        yield put(registerUserSuccess(res.data))
    } catch (error) {
        // eslint-disable-next-line noconsole
        console.error('Request failed with', error)
        yield put(registerUserFailure())
    }
}

export function registerUserSuccess(data) {
    return {
        type: TYPES.REGISTER_USER_SUCCESS,
        user: data.user,
        admin: data.admin
    }
}

export function registerUserFailure() {
    return {
        type: TYPES.REGISTER_USER_FAILURE
    }
}

const sagas = [
    takeLatest(TYPES.REGISTER_USER_REQUEST, executeRegisterUser)
]

export default sagas