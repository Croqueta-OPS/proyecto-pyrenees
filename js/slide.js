$(function() {
    $('#maximage').maximage({
        cycleOptions: {
            fx: 'fadeZoom',
            //sync: false,
            speed: 800,
            timeout: 8000,
            prev: '#arrow_left',
            next: '#arrow_right',
            pager: '#cycle-nav ul',
            pagerAnchorBuilder: function(idx, slide) {
                return '<li><a href="#"></a></li>';
            }
        },
        onFirstImageLoaded: function() {
            jQuery('#maximage').fadeIn('fast');
        }
    });
    
    $('.toggle').bind('click', function(e){
        e.preventDefault();
        $('#maximage').cycle('toggle');
    });
});