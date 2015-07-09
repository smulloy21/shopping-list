$("#groups input").keypress(function(e) {
	if (e.which == 13) {
		$(this).siblings("ul").append('<li><p>' + $(this).val() + '</p><i class="fa fa-times-circle"></i></li>');
		$(this).val('');
	};
});
$("#add-group").keypress(function(e) {
	if (e.which == 13) {
		$(".groups").append('<div class="group"><div class="title"><h2>' + $(this).val() + '</h2><i class="fa fa-times-circle"></i></div><input type="text" placeholder="+ item" /><ul></ul></div>');
		$(this).val('');
	};
});
$("#groups li").on("click", "i", function(event){
	$(this).parent().remove();
});
$("#groups .title").on("click", "i", function(event){
	$(this).parent().parent().remove();
});
$("#groups ul").on("click", "li", function(){
	$(this).toggleClass("crossed-out");
});
$("#groups .title").on("click", function(event){
	$(this).toggleClass("crossed-out");
});
