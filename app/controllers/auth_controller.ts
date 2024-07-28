import { HttpContext } from '@adonisjs/core/http'
import User from '#models/user'

export default class AuthController {
  async signup({ request, auth, response }) {
    const { email, password } = request.only(['email', 'password'])

    const user = await User.verifyCredentials(email, password)
    await auth.use('jwt').generate(user)
    /**
     * Now login the user or create a token for them
     */
  }
}
