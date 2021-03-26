
//var xhttp = new XMLHttpRequest();

const url = 'http://localhost:3000/';


$(document).ready(function () {
  $("form").submit(function (event) {
    var formData = {
      text: $("#data").val();
    };

    $.ajax({
      type: "POST",
      url: url,
      data: formData,
      dataType: "application/JSON",
      encode: true,
    }).done(function (data) {
      console.log(data);
    });

    $('form').on('submit', function(e) {
      e.preventDefault();
  });
});
});
