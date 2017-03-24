var cargarPagina = function(){
  // Modal Plugin 
  $('[data-remodal-id=modal]').remodal();

  // Menu bar event
  $("#bar").click(iconShow);

  // links menu event
  $(".line").click(menuHidden);

  // Scroll plugin
  $('a[href*="#"]:not([href="#"])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html, body').animate({
        scrollTop: target.offset().top
        }, 1000);
        return false;
      }
    }
  });

  //Animate.css - viewportChecker plugin 
  $('.fadeUp').addClass("hidden").viewportChecker({
    classToAdd: 'visible animated fadeInUp',
    offset: 100
  });
  $('.moveUp').addClass("hidden").viewportChecker({
    classToAdd: 'visible animated slideInUp',
    offset: 100
  });
  $('.fadeRight').addClass("hidden").viewportChecker({
    classToAdd: 'visible animated fadeInRight',
    offset: 100
  });
};

var iconShow = function(){
  if($(this).attr('data-click-state') == 1) {
    $(this).attr('data-click-state', 0)
    $(this).removeClass("icon-th-menu").addClass("icon-cross");
    $("#menu").removeClass("hide").addClass("show");
  }else {
    $(this).attr('data-click-state', 1)
    $(this).removeClass("icon-cross");
    $(this).addClass("icon-th-menu");
    $("#menu").removeClass("show").addClass("hide");
    }
};

var menuHidden = function(){
  setTimeout(function() { 
    $("#menu").addClass("hide"); 
    $("#bar").removeClass("icon-cross").addClass("icon-th-menu");
  }, 900);
}

$(document).ready(cargarPagina);