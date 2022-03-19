$("#hamburger").click(function(){
  $("#sidebar").toggleClass("sidebar_close")
  $(".item_one").toggleClass("item_none")
  $(".item_two").toggleClass("item_none")
  $(".hamburger_item").toggleClass("item_none")
  // $(".hamburger i").toggleClass("item_none")
})

$(".item_one").click(function(){
  $("#sidebar").toggleClass("sidebar_close")
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

var tl = gsap.timeline({ repeat: -1 });
tl.to("h1", 30, { backgroundPosition: "-960px 0" });
