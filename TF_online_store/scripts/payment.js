// JavaScript source code
// gpsware.js 

// Script Date: November 2022


/* Function list
1. startup function - displays the current date
2. today function - returns the current date in the format mm/dd/yyyy
3. calculatePrice - calculates the subtotal of
     product unit price multiply by the quantity
4. calculateShipping(shipOption) - calculates the shipping value
5. calculateTotal - calculates the total of placed order
6. validateForm - validates user data entry
*/


/**
 * displays the current date
 */
function startup() {
    // display the current date in the txtDateNow textbox
    // SYNTAX: object_name.property_name = expression
    // document.form1.txtDateNow.value = '12/05/2022';
    document.getElementById('txtDateNow').value = today();
} // end function startup


/**
 * returns the current date
 */
function today() {
    // create an instance of the Date object 
    let currentdate = new Date();

    // extract from the current date variable the date, month, and year
    let thisDate = currentdate.getDate();
    let thisMonth = currentdate.getMonth() + 1;
    let thisYear = currentdate.getFullYear();

    // return the current date in the format mm/dd/yyyy
    let todayDate = thisMonth + '/' + thisDate + '/' + thisYear;
    return todayDate;
}

/**
 *  calculates the subtotal of product unit price multiply by the quantity
 */
function calculatePrice() {
    // declare product variables
    let product = document.getElementById('ddlProduct');
    let pIndex = product.selectedIndex;

    // return the product value of the selected index
    let productPrice = product.options[pIndex].value;

    // alert (pIndex);
    // alert(productPrice);

    // declare quantity variables
    let quantity = document.getElementById('ddlQuantity');
    let qIndex = quantity.selectedIndex;

    // return the quantity value of the selected index
    let quantityOrdered = quantity.options[qIndex].value;

    // display the calculated subtotal of the product selected 
    // and quantity selected in the textfield txtPrice
    document.getElementById('txtPrice').value =
        (productPrice * quantityOrdered).toFixed(2);

    // call function calculateTotal
    calculateTotal();

} // end function calculatePrice

/**
 * calculates the shipping value
 * @param {Number} shipOption 
 */
function calculateShipping(shipOption) {
    document.getElementById('txtShipMethod').value = shipOption.value;

    // call function calculateTotal
    calculateTotal();
} // end function calculateShipping


/**
 * calculates the total of placed order
 */
function calculateTotal() {
    // declare variables
    let priceValue = window.parseFloat(document.getElementById('txtPrice').value);
    let shipValue = parseFloat(document.getElementById('txtShipMethod').value);

    // display the subtotal of the order in the textfield txtSubtotal
    document.getElementById('txtSubtotal').value =
        (priceValue + shipValue).toFixed(2);

    // declare the tax rate 
    const TAX_RATE = 0.05;

    let taxValue = (priceValue + shipValue) * TAX_RATE;

    // display the tax value in the textfield txtTax
    document.getElementById('txtTax').value = taxValue.toFixed(2);

    // display the grand total value of the order in the txtfield txtTotal
    document.getElementById('txtTotal').value =
        (priceValue + shipValue + taxValue).toFixed(2);

} // end function calculateTotal

/**
 * validates user data entry
 */
function validateForm() {
    // declare variable 
    let selectedProduct = document.getElementById('ddlProduct');
    let selectedQuantiy = document.getElementById('ddlQuantity');
    let selectedShipping = document.getElementById('txtShipMethod');

    // validate product 
    if (selectedProduct.selectedIndex === 0) {
        window.alert('You must select a GPS-Wre product');
        selectedProduct.focus();
        return false;
    } // end if 
        else
        // validate quanrity 
        if (selectedQuantiy.selectedIndex === 0) {
            window.alert('You must select a quantity to order');
            selectedQuantiy.focus();
            return false;
        } // end if 
        else
            // validate shipping option
            if (selectedShipping.value === "0.00") {
                window.alert('You must select a shipping option');
                selectedShipping.focus();
                return false;
            }
        else {
                return true;
            }
}  // end function validateForm