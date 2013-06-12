// remap jQuery to $
(function($){

$(window).load(function() {

    var $el, leftPos, newWidth,
        $mainNav = $("header .innerHeader ul");
    
    $mainNav.append("<li id='magic-line'></li>");
    var $magicLine = $("#magic-line");
    
    $magicLine
        .width($(".current_page_item").width())
        .css("left", $(".current_page_item").position().left)
        .data("origLeft", $magicLine.position().left)
        .data("origWidth", $magicLine.width());
        
    $("header .innerHeader ul li").hover(function() {
        $el = $(this);
        leftPos = $el.position().left;
        newWidth = $el.width();
        $magicLine.stop().animate({
            left: leftPos,
            width: newWidth
        });
    }, function() {
        $magicLine.stop().animate({
            left: $magicLine.data("origLeft"),
            width: $magicLine.data("origWidth")
        });    
    });
    /* Back to top code */
    $('a.back-to-top').click(function(e){
        $('html, body').animate({scrollTop:0}, 'slow');
        e.preventDefault();
    });

    $(window).scroll(function() {
        if ($('body').offset().top < $(window).scrollTop()) {
            $('.back-to-top').slideDown('fast');
        } else {
            $('.back-to-top').slideUp('fast');
        }
    });
    /* Works page scrolling code */
    $('.gfx').click(function(){
        $('html, body').animate({scrollTop:$('#graphic-and-web').position().top}, 'slow');
        return false;
    });

    $('.music').click(function(){
        $('html, body').animate({scrollTop:$('#music-and-audio').position().top}, 'slow');
        return false;
    });

    $('.video').click(function(){
        $('html, body').animate({scrollTop:$('#video').position().top}, 'slow');
        return false;
    });

    $('.misc').click(function(){
        $('html, body').animate({scrollTop:$('#misc').position().top}, 'slow');
        return false;
    });
});

/* trigger when page is ready */
$(document).ready(function (){
    jQuery('a.gallery').colorbox();
});

})(window.jQuery);