const mobileBtn = document.querySelector(".mobile-menu-btn");
const mobileBtnClose = document.querySelector(".mobile-menu-btn-close");
const mobileMenu = document.querySelector(".mobile-menu");
const links = document.querySelectorAll(".link");

const toggleMenu = () => {
  mobileMenu.classList.toggle("show");
  mobileBtn.classList.toggle("hide-btn");
  mobileBtnClose.classList.toggle("show-btn");
};

const removeHash = () => {
  history.replaceState(
    "",
    document.title,
    window.location.origin + window.location.pathname + window.location.search
  );
};

mobileBtn.addEventListener("click", () => {
  toggleMenu();
});

mobileBtnClose.addEventListener("click", () => {
  toggleMenu();
});

links.forEach((link) => {
  link.addEventListener("click", () => {
    setTimeout(() => {
      removeHash();
    }),
      5;
  });
});
