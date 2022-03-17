

$(document).on("scroll", function(){

    if ($(document).scrollTop() > 40){
        $(".primary-nav").addClass("shrink");
        $(".navbar").css('background-color', '#0078ff');
    } else {
        $(".primary-nav").removeClass("shrink");
        $('.navbar').css('background-color', 'transparent');
    }

});



$(document).ready(function() {
    $('a[href*=#]').bind('click', function(e) {
            e.preventDefault(); // prevent hard jump, the default behavior

            var target = $(this).attr("href"); // Set the target as variable
            console.log(target)
            // perform animated scrolling by getting top-position of target-element and set it as scroll target
            $('html, body').stop().animate({
                    scrollTop: $(target).offset().top
            }, 800, function() {
                    location.hash = target; //attach the hash (#jumptarget) to the pageurl
            });

            return false;
    });
    $(window).scroll(function() {
		var scrollDistance = $(window).scrollTop();
		// Assign active class to nav links while scolling
		$('.page-section').each(function(i) {
				if ($(this).position().top <= scrollDistance) {
						$('.navigation a.active').removeClass('active');
						$('.navigation a').eq(i).addClass('active');
				}
		});
    }).scroll();
});
