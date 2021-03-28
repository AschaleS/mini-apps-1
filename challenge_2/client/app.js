
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
      enctype: 'multipart/form-data',
    }).done(function (data) {
      console.log(data);
    });
    console.log('This is from the AJAX Request', formData)
    $('form').on('submit', function(e) {
      e.preventDefault();
  });
});
});
