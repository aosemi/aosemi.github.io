var $pig = $('.pig');
var $win = $(window);

$win.on('scroll', function () {
	var top = $win.scrollTop();
	$pig.css('transform', 'rotate(' + top + 'deg)')
});