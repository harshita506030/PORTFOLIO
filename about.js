const menuHamburger = document.querySelector(".fa-bars");
const navLinks = document.querySelector(".nav-links");
const secText = document.querySelector('.card');


menuHamburger.addEventListener("click", () => {
  navLinks.classList.toggle("mobile-menu");
  secText.classList.toggle('open');
  document.body.classList.toggle('no-scroll');
  
});

function animateOnScroll() {
  var cards = document.querySelectorAll('.card');

  function checkCardPosition() {
    cards.forEach(function(card) {
      var cardTop = card.getBoundingClientRect().top;
      var windowHeight = window.innerHeight;

      if (cardTop < windowHeight - 50) {
        card.classList.add('show');
      }
    });
  }

  window.addEventListener('scroll', checkCardPosition);
  checkCardPosition();
}

animateOnScroll();


const animateOnScrollElements = document.querySelectorAll('.animate-slide-in-right');

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('show');
      observer.unobserve(entry.target); 
    }
  });
});


animateOnScrollElements.forEach(element => {
  observer.observe(element);
});

 





