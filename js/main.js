// Scroll reveal animation
const elements = document.querySelectorAll('.reveal, .zoom');

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if(entry.isIntersecting){
      entry.target.classList.add('active');
    }
  });
},{ threshold:0.15 });

elements.forEach(el => observer.observe(el));

// Header shadow on scroll
const header = document.querySelector("header");
window.addEventListener("scroll", () => {
  header.style.boxShadow = window.scrollY > 50
    ? "0 6px 25px rgba(0,0,0,.12)"
    : "none";
});
