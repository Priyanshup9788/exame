
    

       
        $(".a").slideUp(3000);

        $('.que').click(function(){
            $(this).next('.ans').slideToggle();
            $('.ans').not($(this).next('.ans')).slideUp();
        });



