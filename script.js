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

  $('button').on('click',function(){
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


    //reservationList.forEach(function (reservation) {
      $("#currentRes").append("<div>" + reservation.name + " reserved " + seatInfo + "</div>");
      seat.find('.seatInfo').append("<div>"+ "Reserved by: " + reservation.name+ "</div>");
      seat.removeClass("inProgress");
      seat.addClass("taken");
<<<<<<< HEAD
      seat.css("background-color", "red");
      seat.find('.availText').html("<div>"+"RESERVED"+"</div>");



    $('.form').css("display","none");
    $('#name').val("");
    $('#email').val("");



  //  });

=======


      $(".seatInfo").css("background-color");



      seat.find('.availText').html("<div>"+"RESERVED"+"</div>");



      seat.find('.availText').html("<div>"+"RESERVED"+"</div>");

    });
>>>>>>> 5723f50c1aa4bfc25a83e4ba0ef695a0cf7a0041

    for (var i = 0; i < reservationList.length; i++) {
      console.log(reservationList[i].name);
    }
  });


});
