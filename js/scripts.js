$(document).ready(function () {
	$("button#green").click(function (e){ 
		$("body").removeClass();
		$("body").addClass("green-background");
	});

	$("button#yellow").click(function (e) { 
		$("body").removeClass();
		$("body").addClass("yellow-background");
	});

	$("button#red").click(function (e) { 
		$("body").removeClass();
		$("body").addClass("red-background");
	});
});