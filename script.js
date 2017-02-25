$ (document).ready(function(){

//Hide/Show Seat Legend
  $(".btn1").click(function(){
        $("#legend2").fadeOut()
    });
    $(".btn2").click(function(){
        $("#legend2").fadeIn();
    });

//Declare array for reservations
  var reservationList=[];

//Show Seat Number on hover
  $( '.seat' ).on({
    mouseenter: function() {
      $(this).find(".seatInfo").css("visibility","visible");
    }, mouseleave: function() {
      $(this).find(".seatInfo").css("visibility","hidden");
    }
  });

//Put seat into pending status on click
  $('.seat').on('click',function(){
    $('.form').css("display","block");
    $(this).addClass('inProgress');
  });

//Collect form submission and push into an array on Submit click
  $('#subButton').on('click',function(){
    event.preventDefault();
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

      //Add reservation to reservation list at bottom of page
      $("#currentRes").append("<div>" + reservation.name + " reserved " + seatInfo + "</div>");

      //Add reservation info to each seat (shown on hover)
      seat.find('.seatInfo').append("<div>"+ "Reserved by: " + reservation.name+ "</div>");

      //Remove class for pending reservation and add class for reserved seat
      seat.removeClass("inProgress");
      seat.addClass("taken");

      //Change status on seat from available to reserved
      seat.find('.availText').html("<div>"+"RESERVED"+"</div>");

      //Hide form on submit
      $('.form').css("display","none");

      //Clear form values on submit
      $('#name').val("");
      $('#email').val("");

      $('.taken').off('click');
  });


});
