'use strict'

const OrderHook = (exports = module.exports = {})

/**
 *  Updates order value based on items
 */
OrderHook.updateValues = async model => {
  /**
   *  Query item values and make a sum of a column inside param
   *  Save that value on variables, not going to be saved on db,
   *  then make a calc and save to total table on db
   */
  model.$sideLoaded.subtotal = await model.items().getSum('subtotal')
  model.$sideLoaded.qty_items = await model.items().getSum('quantity')
  model.$sideLoaded.discount = await model.discounts().getSum('discount')
  model.total = model.$sideLoaded.subtotal - model.$sideLoaded.discount
}

OrderHook.updateCollectionValues = async models => {
  /**
   *  Recieve array of models
   *  Map each model and calculate then together
   */
  for (let model of models) {
    model = await OrderHook.updateValues(model)
  }
}
