$(document).ready(function(){

	// event: click to make box change//
	$('.box').click(function(){
		if ($('.mark',this).length) {
			$('.mark',this).remove();
		}
		else
		{
			$(this).append("<div class='mark'></div>");
		}

	});
});	