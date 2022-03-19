$("#hamburger").click(function(){
  $("#sidebar").toggleClass("sidebar_close")
  $("#sidebar").toggleClass("sidebar_mob")
  $(".item_one").toggleClass("item_none")
  $(".item_two").toggleClass("item_none")
  $(".hamburger_item").toggleClass("item_none")
  // $(".hamburger i").toggleClass("item_none")
})

$(".item_one").click(function(){
  $("#sidebar").toggleClass("sidebar_close")
  $("#sidebar").toggleClass("sidebar_mob")
  $(".item_one").toggleClass("item_none")
  $(".item_two").toggleClass("item_none")
  $(".hamburger_item").toggleClass("item_none")
  // console.log(1);
})
$('.count').each(function () {
    $(this).prop('Counter',0).animate({
        Counter: $(this).text()
    }, {
        duration: 4000,
        easing: 'swing',
        step: function (now) {
            $(this).text(Math.ceil(now));
        }
    });
});

// var tl = gsap.timeline({ repeat: -1 });
// tl.to("h1", 30, { backgroundPosition: "-960px 0" });

jQuery(function($) {

  var $nav = $('.sidebar_cont');
  var $win = $(window);
  var winH = $win.height();   // Get the window height.

  $win.on("scroll", function () {
      if ($(this).scrollTop() > winH ) {
          $nav.addClass("sidebar_cont_visible");
          $nav.addClass("hamburger_mob");
      } else {
          $nav.removeClass("sidebar_cont_visible");
          $nav.removeClass("hamburger_mob");
      }
  }).on("resize", function(){ // If the user resizes the window
     winH = $(this).height(); // you'll need the new height value
  });

});
