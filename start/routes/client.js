'use strict'

/** @type {typeof import('@adonisjs/framework/src/Route/Manager')} */
const Route = use('Route')

Route.group(() => {
  /**
   * Resource Routes
   */
  Route.resource('products', 'ProductController').apiOnly()
  Route.resource('orders', 'OrderController').apiOnly()
})
  .prefix('v1')
  .namespace('Client')
