$(document).ready(function() {
  $('#show_me').hide();
  $('submit').on("click", function (event){
    event.preventDefault();

    $(this).hide();

    $('.show_me').show()

  });

$('#show_me').on('click', function(event)
  event.preventDefault();
  var url = '/'
  var data = $(this).serialize();
  $.post(url, data, function(response) {
    $('#tweetarea').append(response);

  }

});

