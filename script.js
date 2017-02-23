$ (document).ready(function(){

/*


  $('#rowThreeSeatOne').hover(
  function () {
    originalText=$(this).text();
    $(this).html('<p>Row: 3<br>Seat: 1</p>');
  },function () {
    $(this).text(originalText);
  });

  $('#rowThreeSeatTwo').hover(
  function () {
    originalText=$(this).text();
    $(this).html('<p>Row: 3<br>Seat: 2</p>');
  },function () {
    $(this).text(originalText);
  });

  $('#rowThreeSeatThree').hover(
  function () {
    originalText=$(this).text();
    $(this).html('<p>Row: 3<br>Seat: 3</p>');
  },function () {
    $(this).text(originalText);
  });

  $('#rowThreeSeatFour').hover(
  function () {
    originalText=$(this).text();
    $(this).html('<p>Row: 3<br>Seat: 4</p>');
  },function () {
    $(this).text(originalText);
  });

  $('#rowThreeSeatFive').hover(
  function () {
    originalText=$(this).text();
    $(this).html('<p>Row: 3<br>Seat: 5</p>');
  },function () {
    $(this).text(originalText);
  });

  $('#rowThreeSeatSix').hover(
  function () {
    originalText=$(this).text();
    $(this).html('<p>Row: 3<br>Seat: 6</p>');
  },function () {
    $(this).text(originalText);
  });

  $('#rowFourSeatOne').hover(
  function () {
    originalText=$(this).text();
    $(this).html('<p>Row: 4<br>Seat: 1</p>');
  },function () {
    $(this).text(originalText);
  });

  $('#rowFourSeatTwo').hover(
  function () {
    originalText=$(this).text();
    $(this).html('<p>Row: 4<br>Seat: 2</p>');
  },function () {
    $(this).text(originalText);
  });

  $('#rowFourSeatThree').hover(
  function () {
    originalText=$(this).text();
    $(this).html('<p>Row: 4<br>Seat: 3</p>');
  },function () {
    $(this).text(originalText);
  });

  $('#rowFourSeatFour').hover(
  function () {
    originalText=$(this).text();
    $(this).html('<p>Row: 4<br>Seat: 4</p>');
  },function () {
    $(this).text(originalText);
  });

  $('#rowFourSeatFive').hover(
  function () {
    originalText=$(this).text();
    $(this).html('<p>Row: 4<br>Seat: 5</p>');
  },function () {
    $(this).text(originalText);
  });

  $('#rowFourSeatSix').hover(
  function () {
    originalText=$(this).text();
    $(this).html('<p>Row: 4<br>Seat: 6</p>');
  },function () {
    $(this).text(originalText); */
=======
  $( '.seat' ).on({
    mouseenter: function() {
      $(this).find(".seatInfo").css("visibility","visible");
    }, mouseleave: function() {
      $(this).find(".seatInfo").css("visibility","hidden");
    }

  });

});
