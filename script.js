document.addEventListener("DOMContentLoaded", () => {
  console.log("Tamirapp yüklendi 🚀");

  // Küçük bir animasyon örneği
  const heading = document.querySelector("h2");
  if (heading) {
    heading.style.opacity = 0;
    heading.style.transition = "opacity 1.5s ease";
    setTimeout(() => {
      heading.style.opacity = 1;
    }, 300);
  }
});
