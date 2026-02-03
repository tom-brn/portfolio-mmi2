const transition = document.querySelector(".page-transition");

document.querySelectorAll("a").forEach(link => {
  if (!link.href) return;

  if (
    link.target === "_blank" ||
    link.hasAttribute("download") ||
    link.href.startsWith("http") && !link.href.startsWith(window.location.origin)
  ) {
    return;
  }

  link.addEventListener("click", e => {
    e.preventDefault();

    const target = link.href;
    const color = link.dataset.color || "rgb(255, 0, 115)";

    sessionStorage.setItem("transitionColor", color);

    transition.style.backgroundColor = color;
    transition.classList.remove("exit");
    transition.classList.add("enter");

    setTimeout(() => {
      window.location.href = target;
    }, 600);
  });
});


window.addEventListener("load", () => {
  const savedColor = sessionStorage.getItem("transitionColor");

  if (savedColor) {
    transition.style.backgroundColor = savedColor;
  }

  transition.classList.add("exit");
});
