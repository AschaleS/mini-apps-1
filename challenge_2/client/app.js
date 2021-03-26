
//var xhttp = new XMLHttpRequest();

const url = 'http://localhost:3000';


$(document).ready(function () {
  //$("form").submit(function (event) {
    S(.submit).click(function(event) {
      event.preventDefault();
    var formData = {
      text: $("#data").val();
    };

    $.ajax({
      type: "POST",
      url: "http://localhost:3000/",
      data: formData,
      dataType: "application/JSON",
      encode: true,
    }).done(function (data) {
      console.log(data);
    });

    // event.preventDefault();
  });
});


