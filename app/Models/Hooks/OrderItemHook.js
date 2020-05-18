'use strict'

const OrderItemHook = (exports = module.exports = {})

// Import product model class
const Product = use('App/Models/Product')

OrderItemHook.method = async model => {
  // Find product by id that the order has
  let product = await Product.find(model.product_id)
  /**
   *  Before save check which product the customer is buying
   *  And verify if that values match (* quantity)
   */
  model.subtotal = model.quantity * product.price
}
