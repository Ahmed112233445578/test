$(function(){
    $(window).on('scroll',function(){
        if($(window).scrollTop() > 10){
            $('.navbar').addClass('active');
        }else{
            $('.navbar').removeClass('active');
        }
    });

    $(window).on('load', function () {
        $('#preloader').delay(350).fadeOut('slow');
    });
})