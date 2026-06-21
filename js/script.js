document.addEventListener("DOMContentLoaded", () => {
  const accordionItems = document.querySelectorAll(".accordion-item");

  accordionItems.forEach((item) => {
    const header = item.querySelector(".accordion-header");
    const icon = item.querySelector(".toggle-icon");

    header.addEventListener("click", () => {
      const isActive = item.classList.contains("active");

      accordionItems.forEach((otherItem) => {
        otherItem.classList.remove("active");
        const otherIcon = otherItem.querySelector(".toggle-icon");
        otherIcon.classList.remove("fa-minus");
        otherIcon.classList.add("fa-plus");
      });

      if (!isActive) {
        item.classList.add("active");
        icon.classList.remove("fa-plus");
        icon.classList.add("fa-minus");
      }
    });
  });
});
