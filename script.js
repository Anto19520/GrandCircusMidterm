$ (document).ready(function(){


//Seat Hover Text
  //Row1
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

  $('#rowOneSeatThree').hover(
  function () {
    originalText=$(this).text();
    $(this).html('<p>Row: 1<br>Seat: 3</p>');
  },function () {
    $(this).text(originalText);
  });

  $('#rowOneSeatFour').hover(
  function () {
    originalText=$(this).text();
    $(this).html('<p>Row: 1<br>Seat: 4</p>');
  },function () {
    $(this).text(originalText);
  });

  $('#rowOneSeatFive').hover(
  function () {
    originalText=$(this).text();
    $(this).html('<p>Row: 1<br>Seat: 5</p>');
  },function () {
    $(this).text(originalText);
  });

  $('#rowOneSeatSix').hover(
  function () {
    originalText=$(this).text();
    $(this).html('<p>Row: 1<br>Seat: 6</p>');
  },function () {
    $(this).text(originalText);
  });

  //Row2
  $('#rowTwoSeatOne').hover(
  function () {
    originalText=$(this).text();
    $(this).html('<p>Row: 2<br>Seat: 1</p>');
  },function () {
    $(this).text(originalText);
  });

  $('#rowTwoSeatTwo').hover(
  function () {
    originalText=$(this).text();
    $(this).html('<p>Row: 2<br>Seat: 2</p>');
  },function () {
    $(this).text(originalText);
  });

  $('#rowTwoSeatThree').hover(
  function () {
    originalText=$(this).text();
    $(this).html('<p>Row: 2<br>Seat: 3</p>');
  },function () {
    $(this).text(originalText);
  });

  $('#rowTwoSeatFour').hover(
  function () {
    originalText=$(this).text();
    $(this).html('<p>Row: 2<br>Seat: 4</p>');
  },function () {
    $(this).text(originalText);
  });

  $('#rowTwoSeatFive').hover(
  function () {
    originalText=$(this).text();
    $(this).html('<p>Row: 2<br>Seat: 5</p>');
  },function () {
    $(this).text(originalText);
  });

  $('#rowTwoSeatSix').hover(
  function () {
    originalText=$(this).text();
    $(this).html('<p>Row: 2<br>Seat: 6</p>');
  },function () {
    $(this).text(originalText);
  });

});
