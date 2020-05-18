'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class OrderItem extends Model {
  /**
   *  Orderitem has no timestamp
   *  this method pass that to adonis
   */
  static get traits() {
    return ['App/Models/Traits/NoTimestamp']
  }

  // Relation with product
  product() {
    return this.belongsTo('App/Models/Product')
  }

  // Relation with product
  order() {
    return this.belongsTo('App/Models/Order')
  }
}

module.exports = OrderItem
