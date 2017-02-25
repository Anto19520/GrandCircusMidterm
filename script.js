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
    var seat = $('.inProgress');
    var seatID = seat.attr('id');
    var reservation = {
      name: reservationName,
      email: reservationEmail,
      seat: seatID
    };
    reservationList.push(reservation);
    console.log(reservationList);

    reservationList.forEach(function (reservation) {
      $("#currentRes").append("<div>" + reservation.name+ " "+ reservation.email + " "+ seatID + "</div>");

      seat.find('.seatInfo').append("<div>" + reservation.name+ "</div>"+"<div>"+ seatID +"</div>");

      seat.removeClass("inProgress");
      seat.addClass("taken");



    });

    for (var i = 0; i < reservationList.length; i++) {
      console.log(reservationList[i].name);
    }
  });


});
