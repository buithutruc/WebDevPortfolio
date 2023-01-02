receiveResult();

/**
 * receive the checkin and checkout dates from the homepage
 */
function receiveResult() {
  window.addEventListener("load", () => {
    //debugger;
    // Via Query parameters - GET
    const params = new URL(document.location).searchParams;
    const checkin = params.get("checkin-date");
    const checkout = params.get("checkout-date");

    // const price = params.get("price");
    const price = sessionStorage.getItem("Price");
    console.log(price);
    //   debugger;

    let total;

    // Via local Storage
    document.getElementById("result-checkindate").innerHTML = checkin;
    document.getElementById("result-checkoutdate").innerHTML = checkout;
    calculateDates();

    document.getElementById("result-price").innerText = "$" + price;
    total =
      parseFloat(price) *
      parseFloat(document.getElementById("total-stay").innerText);
    document.getElementById("total").innerText = "$" + total.toFixed(2);

    //   debugger;
  });
}
/**
 * calculate the number of days difference between two dates
 */
function calculateDates() {
  // To set two dates to two variables
  var str1 = document.getElementById("result-checkindate").innerText;
  let date1 = new Date(str1);
  console.log(date1);

  var str2 = document.getElementById("result-checkoutdate").innerText;
  let date2 = new Date(str2);
  console.log(date2);

  // calculate the time difference of two dates
  var Difference_In_Time = date2.getTime() - date1.getTime();

  // calculate the no. of days between two dates
  var Difference_In_Days = Difference_In_Time / (1000 * 3600 * 24);

  // display the final no. of days (result)
  document.getElementById("total-stay").innerHTML = Difference_In_Days;
}

/**
 * validate if all the required fields in the form are filled
 * @returns boolean
 */
function validateForm() {
  let first_name = document.forms["reservation"]["first_name"].value;
  let last_name = document.forms["reservation"]["last_name"].value;
  let address_line1 = document.forms["reservation"]["address_line1"].value;
  let address_line2 = document.forms["reservation"]["address_line2"].value;
  let town = document.forms["reservation"]["town"].value;
  let zip = document.forms["reservation"]["zip"].value;
  let radios = document.querySelectorAll('input[type="radio"]:checked');
  let selected_card = radios.length > 0 ? radios[0].value : null;
  let name_on_card = document.forms["reservation"]["cname"].value;
  let card_number = document.forms["reservation"]["cnumber"].value;

  if (first_name == "") {
    alert("Please enter your first name!");
    return false;
  } else if (last_name == "") {
    alert("Please enter your last name!");
    return false;
  } else if (address_line1 == "") {
    alert("Please enter your address!");
    return false;
  } else if (address_line2 == "") {
    alert("Please enter your address!");
    return false;
  } else if (town == "") {
    alert("Please enter your town!");
    return false;
  } else if (zip == "") {
    alert("Please enter your postal code!");
    return false;
  } else if (selected_card == null) {
    alert("Please select a card type !");
    return false;
  } else if (name_on_card == "") {
    alert("Please enter the name on card!");
    return false;
  } else if (card_number == null) {
    alert("Please enter card number!");
    return false;
  } else {
    var text = "Thank you " + first_name + ". Your booking is placed!";
    alert(text);
    return true;
  }
}
