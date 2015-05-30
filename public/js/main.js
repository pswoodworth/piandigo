$(window).ready(function(){
	var userData = {};
	$('#share').click(function(){
		$('#buttons-wrapper').addClass('transitioned');
		userData.type = 'share';
	});
	$('#play').click(function(){
		$('#buttons-wrapper').addClass('transitioned');
		userData.type = 'play';
	});

	$('#submit').click(function(e){
		e.preventDefault();
		userData.city = $('#city').val();
		userData.email = $('#email').val();
		$.post('/signup', userData).success(function(){
			console.log('success!');
			$('#buttons-wrapper').addClass('submitted');
		});
	});

});