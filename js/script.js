function setLanguage(lang) {
  localStorage.setItem("preferredLanguage", lang);
  fetch("./assets/translations.json")
    .then(response => response.json())
    .then(data => {
      document.querySelectorAll("[data-i18n]").forEach(el => {
        const key = el.getAttribute("data-i18n");
        if (data[lang][key]) {
          el.textContent = data[lang][key];
        }
      });
    })
    .catch(error => console.error("Erreur de chargement des traductions:", error));
}

document.addEventListener("DOMContentLoaded", () => {
  const savedLang = localStorage.getItem("preferredLanguage") || "fr"; // langue par défaut = français
  setLanguage(savedLang);
});

