$(document).ready(function(){

	$(".switcher-control").on('click', function(){
	  $('.switcher').toggleClass('toggled');
	});

	$(".styleswitch").on('click', function(){
	  $(".styleswitch").removeClass('active');
	  $(this).addClass('active');
	});
	
});

