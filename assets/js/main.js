
$("a").click(function (){

  var elem = $(this);

  var num = 0;

  $.ajax({
    url: "https://flynn.boolean.careers/exercises/api/random/int",
    method: "GET",
    success: function (data) {
      num = data.response;
      if (num > 4) {
        elem.css("background-color", "green");
      } else if (num < 5) {
        elem.css("background-color", "yellow");
      }
      console.log(num);
    },
    error: function (richiesta) {
      alert("Errore");
    }
  });


});
