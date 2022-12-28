function handleSubmit() {
  //debugger;
  const check_in_date = document.getElementById("checkin-date").value;
  const check_out_date = document.getElementById("checkout-date").value;

  // const price = document.getElementById("price").value;

  sessionStorage.setItem("Price", 99.99);

  //  debugger;
  // to set into local storage
  localStorage.setItem("Checkin_Date", check_in_date);
  //   debugger;
  localStorage.setItem("Checkout_Date", check_out_date);
  // localStorage.setItem("Price", price);
  //    debugger;
  return;
}
