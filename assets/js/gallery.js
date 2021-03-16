!(function($) {
    //gallery page
  $(window).on('load', function() {
    var portfolioIsotope = $('.portfolio-container').isotope({
    itemSelector: '.portfolio-item',
    layoutMode: 'fitRows'
    });
    
    $('#portfolio-flters li').on('click', function() {
    $("#portfolio-flters li").removeClass('filter-active');
    $(this).addClass('filter-active');
    
    portfolioIsotope.isotope({
    filter: $(this).data('filter')
    });
    aos_init();
    });
    
    // Initiate venobox (lightbox feature used in portofilo)
    $(document).ready(
      function(){
        $('.venobox').venobox()
      }
  )
    
    });
})(jQuery)
