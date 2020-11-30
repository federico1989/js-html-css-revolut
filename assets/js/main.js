var open = $('.menu_right .float_left');
console.log(open);

open.click(function() {
  console.log("ok");
  $(this).find(".card").show();
});

var close = $('.menu_right .float_left');
// console.log(close);

close.click(function() {
  // console.log("ok");
  $(this).find(".card").hide();
});
