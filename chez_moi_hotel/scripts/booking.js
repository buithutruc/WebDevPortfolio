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

function calculateDates() {
  // JavaScript program to illustrate
  // calculation of no. of days between two date

  // To set two dates to two variables
  var str1 = document.getElementById("result-checkindate").innerText;
  let date1 = new Date(str1);
  console.log(date1);
  var str2 = document.getElementById("result-checkoutdate").innerText;
  let date2 = new Date(str2);
  console.log(date2);

  // To calculate the time difference of two dates
  var Difference_In_Time = date2.getTime() - date1.getTime();

  // To calculate the no. of days between two dates
  var Difference_In_Days = Difference_In_Time / (1000 * 3600 * 24);

  document.getElementById("total-stay").innerHTML = Difference_In_Days;
  //To display the final no. of days (result)
  console.log(
    "Total number of days between dates <br>" +
      date1 +
      "<br> and <br>" +
      date2 +
      " is: <br> " +
      Difference_In_Days
  );
}
