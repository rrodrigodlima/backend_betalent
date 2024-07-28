import { symbols } from '@adonisjs/auth'

export type JwtGuardUser<RealUser> = {
  getId(): string | number | BigInt

  getOriginal(): RealUser
}

export interface JwtUserProviderContract<RealUser> {
  [symbols.PROVIDER_REAL_USER]: RealUser

  createUserForGuard(user: RealUser): Promise<JwtGuardUser<RealUser>>

  findById(identifier: string | number | BigInt): Promise<JwtGuardUser<RealUser> | null>
}
