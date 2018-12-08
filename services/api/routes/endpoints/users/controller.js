import { registerNewUser } from '../../commands/user'
import wrapAsyncFunc from '../../../common/async-wrapper'

export default class RegisterController {
  constructor(router) {
    router.post(`/register`, wrapAsyncFunc(this.registerUser))
  }

  async registerUser(req, res) {
      const {
          email,
          firstName,
          password,
          confirmedPassword,
          surname,
          username
      } = req.body
      const results = await registerNewUser ({
        email,
        firstName,
        password,
        confirmedPassword,
        surname,
        username
      })
    res.send(results)
  }
}
