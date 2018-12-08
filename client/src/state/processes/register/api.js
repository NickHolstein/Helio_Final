import * as axiosWrapper from '../../../utilities/axios-utils'

export const registerUser = {
  formatUrl: () => `/users/register`,
  request: (url, body) => axiosWrapper.post(url, body),
  // serialize: (email, password) => ({ email, password })
  serialize: (data) => ({
    email: data.email,
    firstName: data.firstName,
    surname: data.surname,
    username: data.username,
    password: data.password,
    confirmedPassword: data.confirmedPassword
  })
}