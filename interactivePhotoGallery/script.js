const galleryItems = document.querySelectorAll(".gallery-item");

galleryItems.forEach((item) => {
  item.addEventListener("mouseenter", () => {
    clearActiveClasses();
    item.classList.add("active");
  });

  item.addEventListener("mouseleave", () => {
    clearActiveClasses();
  });
});

function clearActiveClasses() {
  galleryItems.forEach((item) => {
    item.classList.remove("active");
  });
}
