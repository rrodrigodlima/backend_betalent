import Product from '#models/product'
import type { HttpContext } from '@adonisjs/core/http'
import { DateTime } from 'luxon'

export default class ProductsController {
  async index({ response }: HttpContext) {
    const products = await Product.query().orderBy('nome')
    return response.json(products)
  }

  async store({ request, response }: HttpContext) {
    const data = request.only(['nome', 'description', 'price'])
    const product = await Product.create(data)
    return response.created(product)
  }

  async show({ params, response }: HttpContext) {
    const product = await Product.findOrFail(params.id)
    return response.json(product)
  }

  async update({ params, request, response }: HttpContext) {
    const product = await Product.findOrFail(params.id)
    const data = request.only(['nome', 'description', 'price'])
    product.merge(data)
    await product.save()
    return response.json(product)
  }

  async delete({ params, response }: HttpContext) {
    const product = await Product.findOrFail(params.id)
    product.deletedAt = DateTime.now() // soft delete
    await product.save()
    return response.json({ message: 'Product soft deleted' })
  }
}
