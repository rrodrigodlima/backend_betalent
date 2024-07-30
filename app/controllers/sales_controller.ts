import Sale from '#models/sale'
import type { HttpContext } from '@adonisjs/core/http'

export default class SalesController {
  async store({ request, response }: HttpContext) {
    const data = request.only([
      'client_id',
      'product_id',
      'quantidade',
      'preço_unitário',
      'preço_total',
    ])
    data.preço_total = data.quantidade * data.preço_unitário
    const sale = await Sale.create(data)
    return response.created(sale)
  }
}
