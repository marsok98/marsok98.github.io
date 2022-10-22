$(document).ready(function() {
  $(".button-start").click(function() {
    $(".container-fluid.home-page-containter-inputs").prepend("<h1 class='d-flex justify-content-center pt-5'>The Inflation in October was: 17.2%</h1>");
    $(".home-page-containter-inputs h1").css("color", "red");
  });
  $(".button-calculate").click(function(){
    var savings = $("#savings").val();
    var result = savings*1.172;
    $("#loss").text(result);
    $(".div-outputs").append("<img class = 'mem' src='assets/mem-inflacja.jpg'>")
  });


});
