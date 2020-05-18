'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Order extends Model {
  // Call hooks
  static boot() {
    // Istance the parent class (Model), method boot available via inheritance
    super.boot()

    /**
     *  Hook will be called when the lifecycle afterFind occurs
     *  2param: File hook name .name of the hook
     */
    this.addHook('afterFind', 'OrderHook.updateValues')
  }
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
