$(document).foundation();


$('canvas').on('appear', function(event, $all_appeared_elements) {
      // this element is now inside browser viewport
});
 (function(){

      // Menu settings
      $('#menuToggle, .menu-close').on('click', function(){
        $('#menuToggle').toggleClass('active');
        
        $('#theMenu').toggleClass('menu-open');
      });


})(jQuery)
});

var s = skrollr.init();
 });  

 new WOW().init();

 $(function() {
        Grid.init();
      });


 var doughnutData = [
        {
          value: 30,
          color:"#F7464A"
        },
        {
          value : 30,
          color : "#46BFBD"
        },
        {
          value : 50,
          color : "#FDB45C"
        },
        {
          value : 40,
          color : "#1C1818"
        },
        {
          value : 20,
          color : "#F78205"
        },
        {
          value : 20,
          color : "#713780"
        },
        {
          value : 20,
          color : "#2590E8"
        },
        {
          value : 40,
          color : "#3D6945"
        },
        {
          value : 120,
          color : "#4D5360"
        }
      
      ];




var inView = false;

function isScrolledIntoView(elem)
{
    var docViewTop = $(window).scrollTop();
    var docViewBottom = docViewTop + $(window).height();

    var elemTop = $(elem).offset().top;
    var elemBottom = elemTop + $(elem).height();

    return ((elemTop <= docViewBottom) && (elemBottom >= docViewTop));
}

    $(window).scroll(function() {
      if (isScrolledIntoView('#canvas')) {
        if (inView) { return; }
        inView = true;
        new Chart(document.getElementById("canvas").getContext("2d")).Doughnut(doughnutData);}
        else {
          inView = false;
        }
    
});



$(function() {
  $('a[href*=#]:not([href=#])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html,body').animate({
          scrollTop: target.offset().top
        }, 1000);
        return false;
      }
    }
  });
});