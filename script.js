$ (document).ready(function(){

  $(".btn1").click(function(){
        $("#legend2").fadeOut()
    });
    $(".btn2").click(function(){
        $("#legend2").fadeIn();
    });

  var reservationList=[];

  $( '.seat' ).on({
    mouseenter: function() {
      $(this).find(".seatInfo").css("visibility","visible");
    }, mouseleave: function() {
      $(this).find(".seatInfo").css("visibility","hidden");
    }
  });

  $('.seat').on('click',function(){
    $('.form').css("display","block");
    $(this).addClass('inProgress');
  });

  $('#subButton').on('click',function(){
    var reservationName = $('#name').val();
    var reservationEmail = $('#email').val();
    var seat = $('.inProgress');
    var seatID = seat.attr('id');
    var seatInfo = seat.attr('name');
    var reservation = {
      name: reservationName,
      email: reservationEmail,
      seat: seatID
    };
      reservationList.push(reservation);
      console.log(reservationList);
      $("#currentRes").append("<div>" + reservation.name + " reserved " + seatInfo + "</div>");
      seat.find('.seatInfo').append("<div>"+ "Reserved by: " + reservation.name+ "</div>");
      seat.removeClass("inProgress");
      seat.addClass("taken");
      seat.find('.availText').html("<div>"+"RESERVED"+"</div>");
      $('.form').css("display","none");
      $('#name').val("");
      $('#email').val("");
      $(".seatInfo").css("background-color");
      seat.find('.availText').html("<div>"+"RESERVED"+"</div>");
  });


});
