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
            $magicLine.stop().velocity({
                left: leftPos,
                width: newWidth
            });
        }, function() {
            $magicLine.stop().velocity({
                left: $magicLine.data("origLeft"),
                width: $magicLine.data("origWidth")
            });
        });

        /* Back to top code */
        $('a.back-to-top').click(function(e){
            $('html, body').velocity({scrollTop:0}, 'slow');
            e.preventDefault();
        });

        /* Works page scrolling code */
        $('a.gfx').click(function(){
            $('html, body').velocity({scrollTop:$('#graphic-and-web').position().top}, 'slow');
            return false;
        });
        $('a.music').click(function(){
            $('html, body').velocity({scrollTop:$('#music-and-audio').position().top}, 'slow');
            return false;
        });
        $('a.video').click(function(){
            $('html, body').velocity({scrollTop:$('#video').position().top}, 'slow');
            return false;
        });
    });

$(document).ready(function (){
    $('a.gallery.youtube').colorbox({title: function(){return this.title}, iframe:true, innerWidth:425, innerHeight:344, maxWidth:'95%', maxHeight:'95%'});
    $('.project a.gallery').colorbox({rel:'gal', maxHeight: "80%", maxWidth: "80%"});

    if (window.matchMedia) {
    // Establishing media check
    width480Check = window.matchMedia("(max-width: 480px)");
    if (width480Check.matches){
        $.colorbox.remove();
        }
    }
});
})(window.jQuery);