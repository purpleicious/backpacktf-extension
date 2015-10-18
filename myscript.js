$('li').each(function(index, value){
	if (($(this).attr('class') == "item q-440-6") && ($(this).attr('data-listing-intent') == "1")){
		if ($(this).attr('data-listing-price') < $(this).attr('data-price')) {
			$(this).append("<div style='top:0px; float:left; background-color:green; color:white; padding:2px; border-radius: 5px; position:absolute;'>Deal!</div>");
		}
	}
});