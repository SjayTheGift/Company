

$(document).on("scroll", function(){

    if ($(document).scrollTop() > 40){
        $(".primary-nav").addClass("shrink");
        $(".navbar").css('background-color', '#0078ff');
    } else {
        $(".primary-nav").removeClass("shrink");
        $('.navbar').css('background-color', 'transparent');
    }

});

