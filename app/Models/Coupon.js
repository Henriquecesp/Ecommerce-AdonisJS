'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Coupon extends Model {
  /**
   *  Adonis only recognize timestamp as date
   *  so this get says wich fields is date type
   */
  static get dates() {
    return ['created_at', 'update_at', 'valid_from', 'valid_until']
  }

  /**
   *  Relation with user
   */
  users() {
    return this.belongsToMany('App/Models/User')
  }

  /**
   *  Relation with products
   */
  products() {
    return this.belongsToMany('App/Models/Product')
  }

  /**
   *  Relation with orders
   */
  orders() {
    return this.belongsToMany('App/Models/Order')
  }
}

module.exports = Coupon
