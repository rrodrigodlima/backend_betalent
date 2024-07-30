import User from '#models/user'
import env from '#start/env'
import type { HttpContext } from '@adonisjs/core/http'
import jwt from 'jsonwebtoken'

export default class JwtAuthMiddleware {
  async handle({ request, response, auth }: HttpContext, next: () => Promise<void>) {
    const authHeader = request.header('authorization')

    if (!authHeader) {
      return response.status(401).json({ message: 'Unauthorized access' })
    }
    const token = authHeader.split(' ')[1]

    try {
      const secretKey = env.get('APP_KEY')
      const payload = jwt.verify(token, secretKey)
      if (typeof payload !== 'object' || !('userId' in payload)) {
        throw new Error()
      }

      const user = await User.find(payload.userId)
      if (!user) {
        return response.status(401).json({ message: 'Unauthorized access' })
      }

      await next()
    } catch (error) {
      return response.status(401).json({ message: 'Unauthorized access' })
    }

    const output = await next()
    return output
  }
}
