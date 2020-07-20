jQuery(document).ready(function ($) {
  document.querySelectorAll(".project-tab").forEach((el, index) =>
    el.addEventListener("click", () => {
      document
        .querySelector(".project-content>.active")
        .classList.remove("active");
      document
        .querySelector(`.project-content>:nth-child(${index + 1})`)
        .classList.add("active");
      document.querySelector(".project-tab.active").classList.remove("active");
      document
        .querySelector(`.project-tab:nth-child(${index + 1})`)
        .classList.add("active");
    })
  );
});
