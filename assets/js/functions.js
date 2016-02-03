function initPage() {
    function isMobile() {
        var a = navigator.userAgent||navigator.vendor||window.opera;
        return /(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino/i.test(a)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0,4));
    }
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

    $('.spolupraca-td .__pluses li').click(function() {
        $('.spolupraca-td .__pluses li').removeClass('__hovered');
        $(this).toggleClass('__hovered');
    });
    if ($('#fullpage').length) {
        var config = {
            pager: false,
            auto: true,
            infiniteLoop: false,
            pause: 3000,
            onSlideAfter: function ($slideElement, oldIndex, newIndex) {
                // load the image file

                var imageelement = $slideElement.find('img');
                imageelement.attr('src', imageelement.attr('imagesrc'));
            },
            onSliderLoad: function () {
                $('.bxslider li img').css('display', 'block');
            }
        };
        var sliders = new Array();
        $('.bxslider').each(function(i, slider) {
            sliders[i] = $(slider).bxSlider();
        });
        function reloadslide() {
            $.each(sliders, function(i, slider) {
                slider.reloadSlider(config);
            });
        }
        $('#fullpage').fullpage(
            {
                anchors: ['nullPage','firstPage', 'secondPage', '3rdPage', '4thpage', 'lastPage'],
                menu: '#menu',
                'css3': true,
           //     easingcss3: 'cubic-bezier(0.175, 0.885, 0.320, 1.275)',
                navigation: true,
                navigationPosition: 'left',
                navigationTooltips: ['1', '2', '3', '4', '5'],
                afterLoad: function(anchorLink, index){
                    $('#fullpage').on("mousewheel",function(event){

                        if (event.originalEvent.wheelDelta >= 0) {

                            $('header').removeClass('nav-up').addClass('nav-down');
                        }
                        else {
                            $('header').removeClass('nav-down').addClass('nav-up');
                        }

                      });
                    if(index==3||index==1)
                    {
                        reloadslide();
                    }
                }
            }
        );
    }


    var waypoints = $("body:not('.fullfront') .wrapper").waypoint({
        handler: function() {
            $('.logo').toggleClass('__smaller');
        },
        offset: -25
    })
    $('._equal').matchHeight({
        byRow: true
    });

};