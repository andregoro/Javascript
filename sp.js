//////////////////////////////////////////////////////////selector_composto
///////////////////////////////////////////////////////////////////////////////////////andre
//////////////////////////////////////////////////////////
// $(document).ready(function () {
//     $("*").css("color","blue");
//     $(".outro").css("color", "black");
//     $("h2, div").css("background-color","blue");
// });
/////////////////////////////////////////////////////////
// $(document).ready(function() {
//     $("h1").click(function() {
//         $("div").css("background-color","#0000FF")
//        .hide();
//     });
// });
////////////////////////////////////////////////////////
// $(document).ready(function() {
//     $("h1").click(function() {
//         $("div").css("background-color","#0000FF");
//     });
// });
function consultaCep() {
  var cep = document.getElementById("cep").value;
  var url = "https://viacep.com.br/ws/" + cep + "/json/";

  console.log(cep);

  $.ajax({
    url: "https://viacep.com.br/ws/14800390/json/",
    type: "GET",
    success: function name(res) {
      console.log(res);
      //document.getElementById("logradouro").innerHTML = res.logradouro;
      $("#logradouro").html(res.logradouro);
      document.getElementById("bairro").innerHTML = res.bairro;
      document.getElementById("localidade").innerHTML = res.localidade;
      document.getElementById("uf").innerHTML = res.uf;
    },
  });
}
