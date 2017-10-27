var changeTime = 2000;
var interval = 10000 + 2 * changeTime;

function updateImage() {
  var newImage = new Image()
  newImage.src = '/images?time=' + new Date();
  newImage.className += 'image';
  newImage.id = 'image';
  newImage.onload = function() {
    $('#image').fadeOut(changeTime, function() {
      $('#image').replaceWith(newImage);
      $('#image').hide().fadeIn(changeTime);

      $.get('/images/title',
        function(data, textStatus, jqXHR) {
          $('#title').text(data);
        }
      );
    });
  }

  $('#title').addClass('hide');
}

$(document).ready(function() {
  $('#image').attr('src', 'images?time=' + new Date());
  setInterval(updateImage, interval);
});
