(function($) {
  $(window).on("load", function() {
  	$("a[rel='m_PageScroll2id']").mPageScroll2id({
  		offset : 73
  	});
  });
})(jQuery);
$('.menu-btn').on('click', function() {
    $('#menu').toggleClass('active');
});
$('.nav-btn').on('click', function() {
    $('#menu').removeClass('active');
    $('.menu-btn').removeClass('menu-btn_active');
});
 $('.menu-btn').on('click', function(e) {
  e.preventDefault();
  $(this).toggleClass('menu-btn_active');
});
