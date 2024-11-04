const hamburguer = document.querySelector(".hamburguer");

const navMenu = document.querySelector(".nav-menu");

hamburguer.addEventListener("click", () => {
  hamburguer.classList.toggle("active");
  navMenu.classList.toggle("active");
});

document.querySelectorAll(".nav-link").forEach((n) =>
  n.addEventListener("click", () => {
    hamburguer.classList.remove("active");
    navMenu.classList.remove("active");
  })
);

const accordions = document.querySelectorAll(".accordion");

accordions.forEach((accordion) => {
  accordion.addEventListener("click", () => {
    const body = accordion.querySelector(".accordion-body");
    body.classList.toggle('active');
  });
});

document.addEventListener('DOMContentLoaded',function(){
  const links = document.querySelectorAll('title nav ul li a');

  links.forEach(link => {
    link.addEventListener('click', function(){
      links.forEach(link => {
        link.classList.remove('active');
      });
      this.classList.add('active');
    });
  });
});


