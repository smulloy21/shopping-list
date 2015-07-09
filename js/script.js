$(document).ready(function() {
	$(".group input").keypress(function(e) {
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
	$("li i").on("click", function(event){
		$(this).parent().remove();
		alert("grrrr");
	});
	$(".title i").on("click", function(event){
		$(this).parent().parent().remove();
	});
	$(".group ul").on("click", "li", function(){
		$(this).toggleClass("crossed-out");
	});
	$(".title").on("click", function(event){
		$(this).toggleClass("crossed-out");
	});
});