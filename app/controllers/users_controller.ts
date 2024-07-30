// import type { HttpContext } from '@adonisjs/core/http'

import Token from '#models/token'
import User from '#models/user'
import { UserValidator } from '#validators/user'

export default class UsersController {
  async signup({ request, auth }) {
    const data = request.all()

    const validatedData = await UserValidator.validate(data)
    const user = await User.create(validatedData)
    return { user }
  }

  async login({ request, auth }) {
    const { email, password } = request.all()

    const user = await User.verifyCredentials(email, password)

    const token = await auth.use('jwt').generate(user)

    await Token.create({ userId: user.id, token })

    return token
  }
}
