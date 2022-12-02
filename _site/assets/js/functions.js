// -------------- //
// ON WINDOW LOAD //
// -------------- //
window.onload = function() {
  console.log('Loaded :-)');
};

$(".item img").click(function() {
  if ($(this).parent().hasClass("active")) {
    $(".lightbox-bg").removeClass('active');

    $(".item").removeClass( 'hide');
    $( this ).parent().removeClass( 'active');
  } else {
    $(".lightbox-bg").addClass('active');

    $(".item").addClass( 'hide');
    $( this ).parent().removeClass( 'hide');
    $( this ).parent().addClass( 'active');
  }
});

$(".lightbox-bg").click(function() {
  $(".lightbox-bg").removeClass('active');
  $(".item").removeClass( 'hide');
  $(".item").removeClass('active');
});

$(".studio img").click(function() {
  $( this ).toggleClass( 'active');
});



