$(document).ready(function () {
    

        $(".a").fadeOut(2000);

        $('.que').click(function(){
            $(this).next('.ans').slideToggle();
            $('.ans').not($(this).next('.ans')).slideUp();
        });

    });

