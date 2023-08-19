const menuHamburger = document.querySelector(".fa-bars");
const navLinks = document.querySelector(".nav-links");


menuHamburger.addEventListener("click", () => {
  navLinks.classList.toggle("mobile-menu");
  document.body.classList.toggle('no-scroll');
  
});

const animateOnScrollElements = document.querySelectorAll('.animate-slide-in-left');

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
