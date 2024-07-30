import type { HttpContext } from '@adonisjs/core/http'
import Client from '#models/client'

export default class ClientsController {
  async index({ response }: HttpContext) {
    const clients = await Client.query().orderBy('id')
    return response.json(clients)
  }

  async store({ request, response }: HttpContext) {
    const data = request.only(['nome', 'cpf'])
    const client = await Client.create(data)
    return response.created(client)
  }

  async show({ params, response, auth, request }) {
    const client = await Client.findOrFail(params.id)
    await client.load('vendas', (builder) => {
      builder.orderBy('created_at', 'desc')
    })
    return response.json(client)
  }

  async update({ params, request, response }: HttpContext) {
    const client = await Client.findOrFail(params.id)
    const data = request.only(['nome', 'cpf'])
    client.merge(data)
    await client.save()
    return response.json(client)
  }

  async delete({ params, response }: HttpContext) {
    const client = await Client.findOrFail(params.id)
    await client.delete()
    return response.json({ message: 'Client deleted' })
  }
}
