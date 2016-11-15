//animate page when loading
$(".animsition").animsition();

//stick the input section to the top
$("header").sticky();

//hide & show help option when user scrolls
$("header").on('sticky-start', function(){
	"use strict";
	$(".header_wrapper .question_mark").css("display", "none");
});

$("header").on('sticky-end', function(){
	"use strict";
	$(".header_wrapper .question_mark").css("display", "block");
});

//show tooltip with help options