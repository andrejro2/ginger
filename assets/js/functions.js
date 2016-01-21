function initPage() {
    // Hide Header on on scroll down
    var didScroll;
    var lastScrollTop = 0;
    var delta = 5;
    var navbarHeight = $('header').outerHeight();

    $(window).scroll(function(event){
        didScroll = true;
    });

    setInterval(function() {
        if (didScroll) {
            hasScrolled();
            didScroll = false;
        }
    }, 250);

    function hasScrolled() {
        var st = $(this).scrollTop();

        // Make sure they scroll more than delta
        if(Math.abs(lastScrollTop - st) <= delta)
            return;

        // If they scrolled down and are past the navbar, add class .nav-up.
        // This is necessary so you never see what is "behind" the navbar.
        if (st > lastScrollTop && st > navbarHeight){
            // Scroll Down
            $('header').removeClass('nav-down').addClass('nav-up');
        } else {
            // Scroll Up
            if(st + $(window).height() < $(document).height()) {
                $('header').removeClass('nav-up').addClass('nav-down');
            }
        }

        lastScrollTop = st;
    }


    $('#simple-menu').sidr({
        name: 'sidr-main',
        source: '#navigation'
    });
    $('#sidr-id-menu a:not(.sidr-class-opencontact)').click(function() {
        $.sidr('close', 'sidr-main');
    });
    $('#sidr-id-menu a.sidr-class-opencontact').click(function() {
        $.sidr('close', 'sidr-main');
        $('body').toggleClass('__showcontact');
    });
    $('.spolupraca-popup-opener').click(function() {
        $('.spolupraca-popup, .spolupraca-popup-opener-op, .spolupraca-popup-opener-cl').fadeToggle();
        return false;
    });
    //Open kontakt on the bottom of the page
    $('.opencontact, .footer-close').click(function() {
        $('body').toggleClass('__showcontact');
        return false;
    });

    //Spolupraca

    $('.spolupraca-td .__pluses span').click(function() {
        $('.spolupraca-td .__pluses li').removeClass('__hovered');
        $(this).parent('li').toggleClass('__hovered');
    });
    if ($('#fullpage').length) {
        $('.bxslider').bxSlider(
            {
                pager: false,
                auto: true
            }
        );
        $('#fullpage').fullpage(
            {
                anchors: ['nullPage','firstPage', 'secondPage', '3rdPage', '4thpage', 'lastPage'],
                menu: '#menu',
                'css3': true,
           //     easingcss3: 'cubic-bezier(0.175, 0.885, 0.320, 1.275)',
                navigation: true,
                navigationPosition: 'left',
                navigationTooltips: ['1', '2', '3', '4', '5']
            }
        );
    }

    var waypoints = $("body:not('.fullfront') .wrapper").waypoint({
        handler: function() {
            $('.logo').toggleClass('__smaller');
        },
        offset: -25
    })


};