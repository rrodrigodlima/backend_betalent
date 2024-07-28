// import type { HttpContext } from '@adonisjs/core/http'

import User from '#models/user'
import { UserValidator } from '#validators/user'

export default class UsersController {
  async signup({ request, auth, response }) {
    const data = request.all()

    const validatedData = await UserValidator.validate(data)
    const user = await User.create(validatedData)
    return { user }
  }

  async login({ request, auth }) {
    const { email, password } = request.all()
    const user = await User.verifyCredentials(email, password)

    return await auth.use('jwt').generate(user)
  }
}
