document.addEventListener('DOMContentLoaded', function() {
    const testimonialsSwiper = new Swiper('.testimonials-swiper', {
        slidesPerView: 1,
        spaceBetween: 30,
        loop: true,
        autoplay: {
            delay: 5000,
            disableOnInteraction: false,
        },
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        breakpoints: {
            768: {
                slidesPerView: 2,
                spaceBetween: 20,
            },
            992: {
                slidesPerView: 2,
                spaceBetween: 30,
            }
        }
    });

});

  document.addEventListener("DOMContentLoaded", function() {
    const currentLocation = window.location.pathname.split("/").pop();
    const navLinks = document.querySelectorAll(".dental-navbar .nav-link");

    navLinks.forEach(link => {
      const linkPage = link.getAttribute("href");
      if(linkPage === currentLocation) {
        link.classList.add("active");
      } else {
        link.classList.remove("active");
      }
    });
  });



