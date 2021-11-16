$(document).ready(function() {

    $('.owl-carousel').owlCarousel({
        loop:true,
        items:4,
        nav:true,
        responsive:{
            0:{
                items:1
            },
            480:{
                items:2
            },
            768:{
                items:3
            },
            938:{
                items:4
            }
        }
    });

        $('.owl-carouse2').owlCarousel({
        loop:true,
        items:3,
        nav:true,
        responsive:{
            0:{
                items:1
            },
            480:{
                items:2
            },
            768:{
                items:3
            },
        }
    });
       


    $('.chart1').easyPieChart({
        easing: 'easInOut',
        barColor: '#dfr',
        trackColor:false,
        scaleColor:false,
        lineWidht:4,
        size:200,
    });


    

    var skillsTopOffset = $(".SkillsSection").offset().top;
    
    $(window).scroll(function(){

        if(window.pageYOffset > skillsTopOffset - $(window).height() + 300){

            $('.chart').easyPieChart({
                easing: 'easInOut',
                barColor: '#F7444E',
                trackColor:false,
                scaleColor:false,
                lineWidht:4,
                size:152,
                onStep: function(from, to, percent) {
                    $(this.el).find('.percent').text(Math.round(percent)); 
                }
            });

        }

    });



});