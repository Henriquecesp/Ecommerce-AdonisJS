'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Category extends Model {
  /**
   *  Relationship between Category and Image
   */
  image() {
    return this.belongsTo('App/Models/Image')
  }

  /**
   *  Retationship between Category and Products
   */

  products() {
    return this.belongsToMany('App/Models/Produc')
  }
}

module.exports = Category
