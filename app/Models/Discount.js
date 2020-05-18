'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Discount extends Model {
  /**
   *  Discount tabel does not exist
   *  so we ref to the real table
   */
  static get table() {
    return 'coupon_order'
  }

  /**
   *  Relation with order,
   *  1 param: model
   *  2 param: primary key => order_id
   *  3 param: foreign key => id
   */
  order() {
    return this.belongsTo('App/Models/Order', 'order_id', 'id')
  }

  /**
   *  Relation with coupon
   */
  coupon() {
    return this.belongsTo('App/Models/Coupon', 'coupon_id', 'id')
  }

  /**
   *  To be continued...
   */
}

module.exports = Discount
