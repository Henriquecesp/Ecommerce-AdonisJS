'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Order extends Model {
  // Relation with items
  items() {
    return this.hasMany('App/Models/OrderItem')
  }

  // Relation with coupons
  coupons() {
    return this.belongsToMany('App/Models/Coupon')
  }

  // Relation with discounts
  discounts() {
    return this.hasMany('App/Models/Discount')
  }

  // Relation with user
  user() {
    return this.belongsTo('App/Models/User', 'user_id', 'id')
  }
}

module.exports = Order
