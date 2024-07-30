import router from '@adonisjs/core/services/router'
import { middleware } from './kernel.js'

const UsersController = () => import('#controllers/users_controller')
const ClientController = () => import('#controllers/clients_controller')
const ProductController = () => import('#controllers/products_controller')
const SaleController = () => import('#controllers/sales_controller')

router.post('signup', [UsersController, 'signup']).as('users.signup')

router.post('login', [UsersController, 'login']).as('users.login')

router
  .get('/', async ({ auth }) => {
    return auth.getUserOrFail()
  })
  .use(middleware.auth())

router
  .group(() => {
    router.get('/clients', [ClientController, 'index']).as('clients.index')
    router.get('/clients/:id', [ClientController, 'show']).as('clients.show')
    router.post('/clients', [ClientController, 'store']).as('clients.store')
    router.put('/clients/:id', [ClientController, 'update']).as('clients.update')
    router.delete('/clients/:id', [ClientController, 'delete']).as('clients.delete')
  })
  .use(middleware.auth())

router
  .group(() => {
    router.get('/products', [ProductController, 'index']).as('products.index')
    router.get('/products/:id', [ProductController, 'show']).as('products.show')
    router.post('/products', [ProductController, 'store']).as('products.store')
    router.put('/products/:id', [ProductController, 'update']).as('products.update')
    router.delete('/products/:id', [ProductController, 'delete']).as('products.delete')
  })
  .use(middleware.auth())

router.post('/sales', [SaleController, 'store']).use(middleware.auth())
