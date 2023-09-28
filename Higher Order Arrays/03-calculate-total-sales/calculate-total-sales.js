function calculateTotalSalesWithTax(products,tax) {
  const PriceTotal=products.reduce((total,bt)=>total+(bt.price*bt.quantity),0)

  const PriceAfterTax=((tax/100)*PriceTotal)+PriceTotal
  return PriceAfterTax 
}

module.exports = calculateTotalSalesWithTax;
