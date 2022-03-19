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