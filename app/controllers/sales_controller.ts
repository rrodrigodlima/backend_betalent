import Sale from '#models/sale'
import type { HttpContext } from '@adonisjs/core/http'

export default class SalesController {
  async store({ request, response }: HttpContext) {
    const data = request.only([
      'client_id',
      'product_id',
      'quantidade',
      'preco_unitario',
      'preco_total',
    ])
    data.preco_total = data.quantidade * data.preco_unitario
    const sale = await Sale.create(data)
    return response.created(sale)
  }
}
