$(document).ready(function() {
	$(".group ul").on("click", "li", function(){
		alert("cross me out!");
	});
	$(".title").on("click", function(event){
		event.stopPropagation();
		alert("cross me out!");
	});
	$("i").on("click", function(event){
		event.stopPropagation();
		alert("delete me!");
	});
	$(".group input").keypress(function(e) {
		if (e.which == 13) {
			alert("add item!");
		};
	});
	$("#add-group").keypress(function(e) {
		if (e.which == 13) {
			alert("add group!");
		};
	});
});