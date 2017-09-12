$(document).ready(function() {
  var window_width = $( window ).width();

  if(window_width <= 600) {
    var box_width = $('.rules__box').width();
    $('.rules__box').height(box_width);

    var grid_width = $('.rules__grid').width();
    var margin = (grid_width * 0.1);
    $('.rules__box--top').css("margin-bottom", margin);

    $('.rules__text').css("display", "none");
  } else if (window_width > 600)  {
    $('.rules__text').css("display", "inline");
  }


      $('.carousel').carousel({
            dist:0,
            shift:0,
            padding:20,
indicators: true
      });



  $(window).resize(function() {
    var window_width = $( window ).width();
    if(window_width <= 600) {

      var box_width = $('.rules__box').width();
      $('.rules__box').height(box_width)

      var grid_width = $('.rules__grid').width();
      var margin = (grid_width * 0.1);
      $('.rules__box--top').css("margin-bottom", margin);

      $('.rules__text').css("display", "none");
    }else{
        $('.rules__text').css("display", "inline");
    }
  });


});
