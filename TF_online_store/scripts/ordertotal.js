/* Function list
1. calculateShipping(shipOption) - calculates the shipping value
2. calculateTotal - calculates the total of placed order
3. validateForm - validates user data entry
*/

/**
 * calculates the shipping value
 * @param {Number} shipOption
 */
function calculateShipping(shipOption) {
  document.getElementById("txtShipMethod").value = shipOption.value;

  // call function calculateTotal
  calculateTotal();
} // end function calculateShipping

/**
 * calculates the total of placed order
 */
function calculateTotal() {
  // declare variables
  let priceValue = window.parseFloat(document.getElementById("txtPrice").value);
  let shipValue = parseFloat(document.getElementById("txtShipMethod").value);

  // display the subtotal of the order in the textfield txtSubtotal, including items total + shipping
  console.log((priceValue + shipValue).toFixed(2));
  document.getElementById("txtSubtotal").value = (
    priceValue + shipValue
  ).toFixed(2);
  document.getElementById("txtSubtotal").innerText =
    "$" + (priceValue + shipValue).toFixed(2);

  // declare the tax rate
  const TAX_RATE = 0.05;

  let taxValue = (priceValue + shipValue) * TAX_RATE;

  // display the tax value in the textfield txtTax
  document.getElementById("txtTax").value = taxValue.toFixed(2);
  document.getElementById("txtTax").innerText = taxValue.toFixed(2);

  // display the grand total value of the order in the txtfield txtTotal
  document.getElementById("txtTotal").value = (
    priceValue +
    shipValue +
    taxValue
  ).toFixed(2);

  document.getElementById("txtTotal").innerText =
    "$" + (priceValue + shipValue + taxValue).toFixed(2);
} // end function calculateTotal
