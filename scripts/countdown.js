var countDownDate = new Date("Jul 12, 2017 12:45:00").getTime();

// Update the count down every 1 second
var x = setInterval(function() {

  // Get todays date and time
  var now = new Date().getTime();

  // Find the distance between now an the count down date
  var distance = countDownDate - now;

  // Time calculations for days, hours, minutes and seconds
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  // Display the result in the element with id="demo"
  /*document.getElementById("days-left").innerHTML = days + "d " + hours + "h "
  + minutes + "m " + seconds + "s ";*/

  document.getElementById("days-left").innerHTML = days + " dni";
  document.getElementById("time-left").innerHTML = hours + "h " + minutes + "m " + seconds + "s ";

}, 1000);