$(document).ready(function() {
	$('a.login-window').click(function() {

		//Getting the variable's value from a link
		var loginBox = $(this).attr('href');

		//Fade in the Popup
		$(loginBox).fadeIn(300);

		//Set the center alignment padding + border see css style
		var popMargTop = ($(loginBox).height() + 24) / 2;
		var popMargLeft = ($(loginBox).width() + 24) / 2;

		$(loginBox).css({
			'margin-top' : -popMargTop,
			'margin-left' : -popMargLeft
		});

		// Add the mask to body
		$('body').append('<div id="mask"></div>');
		$('#mask').fadeIn(300);

		return false;
	});

	// Handle the signin
	$( 'button.submit' ).live( 'click', function()
	{
		// Get the username
		var username = $('#username').val();
		// Get the password
		var password = $('#password').val();

		// Do something with the username and password
		var url = "/rest/signin"
		//var url = "/rest/signin?user=" + username + "&pass=" + password;
		console.log( url );
		$.post( url, { user: username, pass: password }, function( data )
		{
			console.log( data );
		} );

		$('#mask, .login-popup').fadeOut( 300 , function()
		{
			$('#mask').remove();
		} );

		return false;
	} );

	// When clicking on the button close or the mask layer the popup closed
	$( 'a.close, #mask' ).live( 'click', function()
	{
		$('#mask, .login-popup').fadeOut( 300 , function()
		{
			$('#mask').remove();
		} );

		return false;
	} );
});
