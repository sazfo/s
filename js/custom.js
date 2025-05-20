/*  (function ($) {
  
  "use strict";

    $('.navbar-collapse a').on('click',function(){
      $(".navbar-collapse").collapse('hide');
    });
    
    $('.smoothscroll').click(function(){
      var el = $(this).attr('href');
      var elWrapped = $(el);
      var header_height = $('.navbar').height();
  
      scrollToDiv(elWrapped,header_height);
      return false;
  
      function scrollToDiv(element,navheight){
        var offset = element.offset();
        var offsetTop = offset.top;
        var totalScroll = offsetTop-0;
  
        
        $('body,html').scrollTop(totalScroll);

      }
    });

    $('.owl-carousel').owlCarousel({
        center: true,
        loop: true,
        margin: 30,
        autoplay: false,
        responsiveClass: true,
        responsive:{
            0:{
                items: 2,
            },
            767:{
                items: 3,
            },
            1200:{
                items: 4,
            }
        }
    });
  
  })(window.jQuery);
*/









/*(function ($) {
  "use strict";

  // السماح بالتمرير الرأسي فقط (من الأعلى إلى الأسفل)
  $('html, body').css({
    'overflow-x': 'hidden', // تعطيل التمرير الأفقي
    'overflow-y': 'auto'   // السماح بالتمرير العمودي
  });

  // MENU
  $('.navbar-collapse a').on('click', function () {
    $(".navbar-collapse").collapse('hide');
  });

  // تعطيل الروابط ذات التمرير السلس
  $('.smoothscroll').click(function () {
    return false; // يمنع تنفيذ أي تمرير عند النقر
  });

  // تعطيل التمرير الأفقي عند استخدام عجلة الماوس أو اللمس فقط
  $(document).on('wheel touchmove', function (e) {
    if (e.originalEvent.deltaX !== 0) {
      e.preventDefault();
    }
  });

  $('.owl-carousel').owlCarousel({
    center: true,
    loop: true,
    margin: 30,
    autoplay: false,
    responsiveClass: true,
    responsive: {
      0: {
        items: 2,
      },
      767: {
        items: 3,
      },
      1200: {
        items: 4,
      }
    }
  });

})(window.jQuery);
*/