const nav = document.querySelector(".nav-desktop");
const links = nav.querySelectorAll("a");
const burger = document.querySelector(".burger");
const navMobile = document.querySelector(".nav-mobile");
const body = document.body;

function openMenu() {
  navMobile.classList.add("open");
  burger.classList.add("active");
  body.classList.add("no-scroll");
}

function closeMenu() {
  navMobile.classList.remove("open");
  burger.classList.remove("active");
  body.classList.remove("no-scroll");
}

burger.addEventListener("click", () => {
  navMobile.classList.contains("open") ? closeMenu() : openMenu();
});

// fermer au clic sur un lien
navMobile.querySelectorAll("a").forEach(link => {
  link.addEventListener("click", closeMenu);
});

// fermer si retour desktop
window.addEventListener("resize", () => {
  if (window.innerWidth > 768) closeMenu();
});

// apparition nav après transition
window.addEventListener("load", () => {
  setTimeout(() => {
    nav.classList.add("visible");

    links.forEach((link, i) => {
      setTimeout(() => link.classList.add("show"), i * 150);
    });
  }, 700);
});

// burger mobile
burger.addEventListener("click", () => {
  nav.classList.toggle("open");
});


