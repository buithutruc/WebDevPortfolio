const check_in_date = document.getElementById("checkin-date").value;
const check_out_date = document.getElementById("checkout-date").value;
const priceEl = document.getElementById("price").innerText;
let price = parseFloat(priceEl);

function handleSubmit() {
  // to set into local storage
  localStorage.setItem("Checkin_Date", check_in_date);
  localStorage.setItem("Checkout_Date", check_out_date);
  localStorage.setItem("Price", price);
  return;
}

console.log(price);
console.log(typeof price);
