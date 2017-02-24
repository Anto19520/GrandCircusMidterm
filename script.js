$ (document).ready(function(){

  var reservationList=[];

  $( '.seat' ).on({
    mouseenter: function() {
      $(this).find(".seatInfo").css("visibility","visible");
    }, mouseleave: function() {
      $(this).find(".seatInfo").css("visibility","hidden");
    }
  });

  $('.seat').on('click',function(){
    $('.form').css("visibility","visible");
    $(this).addClass('inProgress');
  });

  $('button').on('click',function(){
    var reservationName = $('#name').val();
    var reservationEmail = $('#email').val();
    var seatID = $('.inProgress').attr('id');
    var reservation = {
      name: reservationName,
      email: reservationEmail,
      seat: seatID
    };
    reservationList.push(reservation);
    console.log(reservationList);

  });


});
