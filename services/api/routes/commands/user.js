import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'

import { createPasshashEntry } from '../repositories/auth'
import { fetchUserByEmail, createUserEntry } from '../repositories/users'
import { StatusError } from '../../common/errors'


export async function registerNewUser({
    email,
    firstName,
    password,
    confirmedPassword,
    surname,
    username
}) {
  if (!email || !firstName || !password || !confirmedPassword || !surname || !username) {
    throw new StatusError({ status: 400, msg: 'Must provide username or password' })
  }
  if(password !== confirmedPassword) {
      throw new StatusError({ status: 400, msg: 'Passwords must match' })
  }
  const user = await fetchUserByEmail(email)
  if(user && newlyCreatedUser.userHandle) {
      throw new StatusError ({ status: 400, msg: 'Email already in user' })
  }
  const newlyCreatedUser = await createUserEntry({ email, firstName, password, confirmedPassword, surname, username})
  //todo should check that it worked
    await bcrypt.hash(password, 10, async (err, hash) => {
        if(err) {
            throw new StatusError ({ status: 500, msg: 'bitcrypt messed up' })
        }
        await createPasshashEntry(newlyCreatedUser.userHandle, hash)
    })

    const token = jwt.sign({
      'iss': 'tpllc',
      'sub': 'user-auth',
      'iat': Math.floor(Date.now() / 1000),
      'exp': Math.floor(Date.now() / 1000) + (60 * 240),
      firstName: newlyCreatedUser.firstName,
      surname: newlyCreatedUser.surname,
      middleName: newlyCreatedUser.middleName,
      suffix: newlyCreatedUser.suffix,
      userHandle: newlyCreatedUser.userHandle,
      username: newlyCreatedUser.username,
      email: newlyCreatedUser.email,
      joinedDate: newlyCreatedUser.joinedDate,
      admin: false
    }, process.env.JWT_SECRET)

    return {
      token,
      user: newlyCreatedUser,
      admin: false
    }
}
 
