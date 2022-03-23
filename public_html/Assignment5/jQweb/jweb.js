

$(function() {

    $('.header').hide().delay(200).fadeIn(1000);

	$('.nav').hide().delay(300).fadeIn(2000);

	$('.links').eq(0).click(function() {
		$('.mainContent').empty();
		
		let $about = '<p>Refik Anadol uses machine learning and A.I. to generate art. There are links to a video about him, one of his latest art pieces, and his personal website<p>';
		
		$('.mainContent').html($about);
        $('p').hide().delay(100).fadeIn(1000);
	})

	$('.links').eq(1).click(function() {
		$('.links').removeClass('selected');
		$(this).addClass('selected');
		$('.section').empty();
		let $video = '<iframe width="500" height="250" src="https://www.youtube.com/embed/UxQDG6WQT5s" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>';
		$('.mainContent').html($video);
        $('iframe').hide().delay(300).fadeIn(2000);
		
	})

	$('.links').eq(2).click(function() {
		$('.links').removeClass('selected');
		$(this).addClass('selected');
		$('.mainContent').empty();
		let $photo = '<img src="../Refik.PNG" border=2 height=80%>';
		$('.mainContent').html($photo);
        $('img').hide().delay(300).fadeIn(2000);
		
	})

	$('.links').eq(3).click(function() {
		$('.links').removeClass('selected');
		$(this).addClass('selected');
		$('.mainContent').empty();
		let $quote = ' <p>If nothing we do matters, all that matters is what we do.</p>';
		$('.mainContent').html($quote);
        $('p').hide().fadeIn(800);
	})



});