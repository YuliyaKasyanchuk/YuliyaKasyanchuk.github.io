
$('.carousel-inner').on('swipeleft', function(e) {
	var $inputs = $(e.currentTarget).find('input');
	var length = $inputs.length-1;
	var $nextEl;
	for (var i = 0; i < $inputs.length; i++) {
		var $el = $($inputs.eq(i));
		if ($el.attr('checked') == 'checked') {
			$el.attr('checked', false);
			if (i < length) {
				$nextEl = $($inputs.eq(i+1));
			} else {
				$nextEl = $($inputs.eq(0));
			}
			$nextEl.attr('checked', 'checked');
			$nextEl.click();
			break;
		}
	}
});

$('.carousel-inner').on('swiperight', function(e) {
	var $inputs = $(e.currentTarget).find('input');
	var length = $inputs.length-1;
	var $nextEl;
	for (var i = 0; i < $inputs.length; i++) {
		var $el = $($inputs.eq(i));
		if ($el.attr('checked') == 'checked') {
			$el.attr('checked', false);
			if (i > 0) {
				$nextEl = $($inputs.eq(i-1));
			} else {
				$nextEl = $($inputs.eq(length));
			}
			$nextEl.attr('checked', 'checked');
			$nextEl.click();
			break;
		}
	}
});