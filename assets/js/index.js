$(window).scroll(function () {
  var scroll = $(window).scrollTop();
  if (scroll >= 250) {
    $('.header__wrapper').addClass('header-minimized')
    $('.dashboard--header').addClass('header-minimized')
  } else {
    $('.header__wrapper').removeClass('header-minimized')
    $('.dashboard--header').removeClass('header-minimized')
  }
});

$('.menu--bar , dashboard-navbar  .nav-item-logo').on('click', function (e) {
  $('.navbar-wrapper .navbar').toggleClass('active')
});


$('.dashboard-navbar  .nav-item-logo').on('click', function () {
  $('.navbar-wrapper .navbar').toggleClass('active')
})

$('.sub--menu-wrapper.is-level-2 .is-item-2').on('click', function (e) {
  e.preventDefault();
  var $target = $(this).find('.is-level-3 .is-item-3');
  if (!$target.is(':visible')) {
    $('.is-level-3 .is-item-3').slideUp();
    $target.slideDown();
  }
});

$('.make-edit').click(function () {
  $('.editable').attr('contenteditable', true);
  $('.editable').addClass('edit');
});
$('.editable').blur(function () {
  $(this).removeClass('edit')
  $(this).removeAttr('contenteditable');
});

$('.card--wrapper .card').on('click', function () {
  $('.card--wrapper .card').not(this).removeClass('active'); // Remove "active" class from other cards
  $(this).toggleClass('active'); // Toggle "active" class on clicked card
})


function updateRangeValue(value) {
  document.getElementById('rangeValue').textContent = value;
}




$('.banner__slider').owlCarousel({
  loop: true,
  nav: false,
  autoplay: true,
  autoplaySpeed: 1000,
  responsive: {
    0: {
      items: 1
    },
    600: {
      items: 1
    },
    1000: {
      items: 1
    }
  }
})

$('.blog__slider').owlCarousel({
  loop: true,
  margin: 30,
  autoplay: true,
  autoplayTimeout: 2500,
  responsive: {
    0: {
      items: 1,
    },
    576:
    {
      items: 2,
    },
    768: {
      items: 3
    },
    992: {
      items: 3
    }
  }
})

$('.card--slider').owlCarousel({
  loop: true,
  margin: 30,
  dots: false,
  nav: true,
  autoplay: true,
  autoplayTimeout: 2500,
  responsive: {
    0: {
      items: 1,
    },
    576:
    {
      items: 1,
    },
    768: {
      items: 1
    },
    992: {
      items: 1
    }
  }
})


$('.consultant--card').owlCarousel({
  loop: true,
  margin: 30,
  dots: false,
  nav: false,
  autoplay: true,
  autoplayTimeout: 2500,
  responsive: {
    0: {
      items: 1.5,
    },
    576:
    {
      items: 2.5,
    },
    768: {
      items: 3.5
    },
    1024: {
      items: 4.5
    }
  }
})


$('.carousel-mobile').owlCarousel({
  loop: true,
  dots: true,
  nav: false,
  autoHeight: false,
  autoplay: true,
  autoplayTimeout: 2500,
  responsive: {
    0: {
      items: 1.25,
    },
    576:
    {
      items: 2.25,
    },
    768: {
      items: 3
    },
  }
})

$('.dashboard-order-row').owlCarousel({
  loop: false,
  dots: false,
  nav: false,
  margin: 20,
  responsive: {
    0: {
      items: 1.25,
      autoplay: true,
      loop: true,
      autoplayTimeout: 2500,
    },
    576:
    {
      items: 2,
    },
    768: {
      items: 2
    },
  }
})


$('.dashboard--subs').owlCarousel({
  loop: false,
  dots: false,
  nav: false,
  margin: 20,
  responsive: {
    0: {
      items: 1.25,
      loop: true,
      autoplay: true,
      autoplayTimeout: 2500,
    },
    576:
    {
      items: 2,
    },
    768: {
      items: 2
    },
  }
})


$('.dashboard-member-row').owlCarousel({
  loop: false,
  dots: false,
  nav: false,
  margin: 20,
  responsive: {
    0: {
      items: 1.25,
      autoplay: true,
      loop: true,
      autoplayTimeout: 2500,
    },
    576:
    {
      items: 2,
    },
    768: {
      items: 2
    },
  }
})

$('.card--wrapper').owlCarousel({
  loop: true,
  dots: false,
  nav: false,
  margin: 20,
  responsive: {
    0: {
      items: 1.25,
      autoplay: true,
      loop: true,
      autoplayTimeout: 2500,
    },
    576:
    {
      items: 2,
    },
    768: {
      items: 2
    },
    1024: {
      items: 3.5
    },
  }
})


$('.card--wrapper').owlCarousel({
  loop: false,
  dots: false,
  nav: false,
  margin: 20,
  responsive: {
    0: {
      items: 1.25,
      autoplay: true,
      loop: true,
      autoplayTimeout: 2500,
    },
    576:
    {
      items: 2,
    },
    768: {
      items: 2
    },
    1024: {
      items: 3.5
    },
  }
})

$('.tp-con').owlCarousel({
  loop: false,
  dots: false,
  nav: false,
  margin: 20,
  responsive: {
    0: {
      items: 1.25,
      autoplay: true,
      loop: true,
      autoplayTimeout: 2500,
    },
    576:
    {
      items: 2,
    },
    768: {
      items: 2
    },
    1024: {
      items: 3.5
    },
  }
})


$('.un-health-row').owlCarousel({
  loop: false,
  dots: false,
  nav: false,
  margin: 20,
  responsive: {
    0: {
      items: 1.25,
      autoplay: true,
      loop: true,
      autoplayTimeout: 2500,
    },
    576:{
      items: 1.5,
      loop: true,
    },
    768: {
      items: 2
    },
    1024: {
      items: 3,
      loop: false
    },
  }
})
