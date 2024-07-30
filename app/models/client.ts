import Sale from '#models/sale'
import Address from '#models/address'
import Phone from '#models/phone'
import { DateTime } from 'luxon'
import type { HasMany } from '@adonisjs/lucid/types/relations'
import { BaseModel, column, hasMany } from '@adonisjs/lucid/orm'

export default class Client extends BaseModel {
  @column({ isPrimary: true })
  declare id: number

  @column()
  declare nome: string

  @column()
  declare cpf: string

  @hasMany(() => Address)
  declare endereco: HasMany<typeof Address>

  @hasMany(() => Phone)
  declare telefone: HasMany<typeof Phone>

  @hasMany(() => Sale)
  declare vendas: HasMany<typeof Sale>

  @column.dateTime({ autoCreate: true })
  declare createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  declare updatedAt: DateTime
}
