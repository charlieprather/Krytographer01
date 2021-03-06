$(window).scroll(function() {
	$('.animation-test').each(function() {
		var imagePos = $(this).offset().top;
		var imageHeight = $(this).height() - 300;
		var topOfWindow = $(window).scrollTop();
		if (imagePos < topOfWindow + imageHeight && imagePos + imageHeight > topOfWindow) {
			$(this).addClass("bone");
      
		} else {
			$(this).removeClass("bone");
		}
	});
});
$(window, document, undefined).ready(function() {
	$('input').blur(function() {
		var $this = $(this);
		if ($this.val()) $this.addClass('used');
		else $this.removeClass('used');
	});
	var $ripples = $('.ripples');
	$ripples.on('click.Ripples', function(e) {
		var $this = $(this);
		var $offset = $this.parent().offset();
		var $circle = $this.find('.ripplesCircle');
		var x = e.pageX - $offset.left;
		var y = e.pageY - $offset.top;
		$circle.css({
			top: y + 'px',
			left: x + 'px'
		});
		$this.addClass('is-active');
	});
	$ripples.on('animationend webkitAnimationEnd mozAnimationEnd oanimationend MSAnimationEnd', function(e) {
		$(this).removeClass('is-active');
	});
});