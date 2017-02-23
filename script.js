$ (document).ready(function(){

  $('#rowOneSeatOne').hover(
  function () {
    originalText=$(this).text();
    $(this).html('<p>Row: 1<br>Seat: 1</p>');
  },function () {
    $(this).text(originalText);
  });

  $('#rowOneSeatTwo').hover(
  function () {
    originalText=$(this).text();
    $(this).html('<p>Row: 1<br>Seat: 2</p>');
  },function () {
    $(this).text(originalText);
  });

});
