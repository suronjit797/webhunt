// loader
function myFunctionL() {
  var element = document.getElementById("preloader");
  element.classList.add("mystyle");
}




// typed js

var typed3 = new Typed("#typed3", {
  strings: ["freeloucher", " web designer", "devoloper"],
  typeSpeed: 50,
  backSpeed: 50,
  smartBackspace: true, 
  loop: true,
});

// jQuery section start

// nav

$(".js-nav-menu-toggle").click(function () {
  $(this).parents(".navigation-menu").toggleClass("navigation-menu-open");
});

$("html").click(function (e) {
  if (!$(e.target).closest(".js-nav-menu").length && $(".js-nav-menu").hasClass("navigation-menu-open")) {
      $(".js-nav-menu").removeClass("navigation-menu-open");
  }
});

// about slider

$(".about-slider").slick({
  infinite: true,
  speed: 300,
  slidesToShow: 3,
  slidesToScroll: 1,
  autoplay: true,
  responsive: [
      {
          breakpoint: 1024,
          settings: {
              slidesToShow: 3,
              slidesToScroll: 1,
          },
      },
      {
          breakpoint: 992,
          settings: {
              slidesToShow: 2,
              slidesToScroll: 1,
          },
      },
      {
          breakpoint: 768,
          settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
          },
      },
      {
        breakpoint: 600,
        settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: false,
        },
    },
  ],
});

// isotop js

var $grid = $(".filter-item").isotope({
  itemSelector: ".item",
  percentPosition: true,
  masonry: {
      // use outer width of grid-sizer for columnWidth
      columnWidth: 1,
  },
});
// filter items on button click
$(".filter-menu").on("click", "button", function () {
  var filterValue = $(this).attr("data-filter");
  $grid.isotope({ filter: filterValue });
});

// jQuery section end
